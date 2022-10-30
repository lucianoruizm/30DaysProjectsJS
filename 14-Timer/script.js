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

    const showElement = element => {
        element.style.display = ""; 
    }
    const hideElement = element => {
        element.style.display = "none"; 
    }

    const startTimer = (hrs, mins, secs) => {
        showElement($pauseBtn);
        hideElement($startBtn);
        showElement($stopBtn);
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
            if(timekeeper <=0) {
                console.log("Timer end");
                clearInterval(idInterval);
            } else {
                $timekeeper.textContent = millisecondsToHourMinuteSecond(timekeeper);
            }
        }, 50);
    };

    const pauseTimer = () => {
        hideElement($pauseBtn);
        showElement($startBtn);
        showElement($stopBtn);
        timeDifference = dateTime.getTime() - new Date().getTime();
        clearInterval(idInterval)
    };

    const stopTimer = () => {
        clearInterval(idInterval);
        dateTime = null;
        timeDifference = 0;
        $timekeeper.textContent = "00:00:00";
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

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    };

    const init = () => {
        $hrs.value = "";
        $mins.value = "";
        $secs.value = "";
        showElement($startBtn);
        hideElement($pauseBtn);
        hideElement($stopBtn);
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