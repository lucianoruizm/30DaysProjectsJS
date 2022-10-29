document.addEventListener("DOMContentLoaded", () => {
    const $timekeeper = document.querySelector("#timekeeper"),
          $startBtn = document.querySelector("#startBtn"),
          $pauseBtn = document.querySelector("#pauseBtn"),
          $stopBtn = document.querySelector("#stopBtn"),
          $hrs = document.querySelector("#hrs"),
          $mins = document.querySelector("#mins"),
          $secs = document.querySelector("#secs");
    
    let idInterval = null,
        timeDifference = 0,
        dateTime = null;


    const startTimer = (hrs, mins, secs) => {
    
        if(dateTime) {
            dateTime = new Date(new Date().getTime() + timeDifference);
            console.log(dateTime);
            timeDifference = 0;
        } else {
            console.log('Start');
            const milliseconds = (secs + (mins * 60)) * 1000 + (hrs * 60) * 60000;
            dateTime = new Date(new Date().getTime() + milliseconds);
            console.log(dateTime);
        }
    
        clearInterval(idInterval);
        idInterval = setInterval(() => {
            const timekeeper = dateTime.getTime() - new Date().getTime();
            console.log(timekeeper);
            if(timekeeper <=0) {
                console.log("Timer end");
                clearInterval(idInterval);
            } else {
                $timekeeper.textContent = millisecondsToHourMinuteSecond(timekeeper);
            }
        }, 50);
    };

    const pauseTimer = () => {
        timeDifference = dateTime.getTime() - new Date().getTime();
        clearInterval(idInterval)
    };

    const stopTimer = () => {
        clearInterval(idInterval);
        dateTime = null;
        timeDifference = 0;
        $timekeeper.textContent = "00:00:00.0";
        init();
    };

    const addZero = value => {
        if (value < 10) {
            return "0" + value;
        } else {
            return "" + value;
        }
    };

    const millisecondsToHourMinuteSecond = (ms) => {
        const milliseconds = ms % 1000;
        ms = (ms - milliseconds) / 1000;
        const seconds = ms % 60;
        ms = (ms - seconds) / 60;
        const minutes = ms % 60;
        const hours = (ms - minutes) / 60;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds.toFixed(1))}`;
    };

    const init = () => {
        $hrs.value = "";
        $mins.value = "";
        $secs.value = "";
    };

    $startBtn.onclick = () => {
        const hours = parseInt($hrs.value);
        const minutes = parseInt($mins.value);
        const seconds = parseInt($secs.value);
        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || (hours <= 0 && seconds <= 0 && minutes <= 0)) {
            return;
        }
        startTimer(hours, minutes, seconds);
    };

    init();
    $pauseBtn.onclick = pauseTimer,
    $stopBtn.onclick = stopTimer;
});


// /*
// https://parzibyte.me/blog
// */
// const agregarCeroSiEsNecesario = valor => {
// 	if (valor < 10) {
// 		return "0" + valor;
// 	} else {
// 		return "" + valor;
// 	}
// }
// const milisegundosAMinutosYSegundos = (ms) => {
// 	// const horas = parseInt(milisegundos / 3600000 / 60); // convertido a horas
//     // minutos = milisegundos / 1000 / 60; // convertido a minutos
// 	// milisegundos -= horas * 60 * 1000;
// 	// segundos = (milisegundos / 1000);
//     const milisegundos = ms % 1000;
//     ms = (ms - milisegundos) / 1000;
//     const segundos = ms % 60;
//     ms = (ms - segundos) / 60;
//     const minutos = ms % 60;
//     const horas = (ms - minutos) / 60;
    
// 	return `${agregarCeroSiEsNecesario(horas)}:${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(segundos.toFixed(1))}`;
// };

// const pruebas = [3600000, 60000, 15000, 1000, 600000];
// for (const prueba of pruebas) {
// 	const conversion = milisegundosAMinutosYSegundos(prueba);
// 	console.log("Los %d milisegundos se convierten a %s\n", prueba, conversion);
// }
