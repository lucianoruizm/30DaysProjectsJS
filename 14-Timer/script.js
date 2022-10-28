document.addEventListener("DOMContentLoaded", () => {
    const $timekeeper = document.querySelector("#timekeeper"),
          $startBtn = document.querySelector("#startBtn"),
          $pauseBtn = document.querySelector("#pauseBtn"),
          $stopBtn = document.querySelector("#stopBtn"),
          $mins = document.querySelector("#mins"),
          $secs = document.querySelector("#secs"),
          $inputContainer = document.querySelector("#inputContainer");
    
    let idInterval = null,
        timeDifference = 0,
        dateTime = null;

    const hideElement = element => {
        element.style.display = "none";
    }

    const showElement = element => {
        element.style.display = "";
    }

    const startTimer = (mins, secs) => {
        hideElement($inputContainer);
        showElement($pauseBtn);
        hideElement($startBtn);
        hideElement($stopBtn);
    
        if(dateTime) {
            dateTime = new Date(new Date().getTime() + timeDifference);
            console.log(dateTime);
            timeDifference = 0;
        } else {
            console.log('Start');
            const milliseconds = (secs + (mins * 60)) * 1000;
            dateTime = new date(new Date().getTime() + milliseconds);
        }
    
        clearInterval(idInterval);
        idInterval = setInterval(() => {
            const timekeeper = dateTime.getTime() - new Date().getTime();
            if(timekeeper <=0) {
                console.log("Timer end");
                clearInterval(idInterval);
                hideElement($pauseBtn);
                showElement($stopBtn);
            } else {
                $timekeeper.textContent = millisecondsToMinutesAndSeconds(timekeeper);
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
        $timekeeper.textContent = "00:00.0";
        init();
    };

    const addZero = value => {
        if (value < 10) {
            return "0" + value;
        } else {
            return "" + value;
        }
    };

    const millisecondsToMinutesAndSeconds = (milliseconds) => {
        const minutes = parseInt(milliseconds / 1000 / 60);
        milliseconds -= minutes * 60 * 1000;
        seconds = (milliseconds / 1000);
        return `${addZero(minutes)}:${addZero(seconds.toFixed(1))}`;
    };

    const init = () => {
        $mins.value = "";
        $secs.value = "";
        showElement($inputContainer);
        showElement($startBtn);
        hideElement($pauseBtn);
        hideElement($stopBtn);
    };

    $startBtn.onclick = () => {
        const minutes = parseInt($mins.value);
        const seconds = parseInt($secs.value);
        if (isNaN(minutes) || isNaN(seconds) || (seconds <= 0 && minutes <= 0)) {
            return;
        }
        startTimer(minutes, seconds);
    };

    init();
    $pauseBtn.onclick = pauseTimer,
    $stopBtn.onclick = stopTimer;
});