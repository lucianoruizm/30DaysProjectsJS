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


    const startTimer = (mins, secs) => {
        hideElement($inputContainer);
        showElement($pauseBtn);
        hideElement($startBtn);
        hideElement($stopBtn);
    
        if(dateTime) {
            dateTime = new Date();
            let newDateTime = dateTime.getTime() + timeDifference;
            console.log(newDateTime);
            timeDifference = 0;
        } else {
            console.log('Start');
            const milliseconds = (secs + (mins * 60)) * 1000;
            newDateTime = new date(new Date().getTime() + milliseconds);
        }
    
        clearInterval(idInterval);
        idInterval = setInterval(() => {
            const timekeeper = newDateTime.getTime() - new Date().getTime();
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
});