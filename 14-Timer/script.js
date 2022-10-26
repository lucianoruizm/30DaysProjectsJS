let interval;
let timer = document.getElementById("userInput");
let countDownSeconds;

const startTime = () => {
    interval = setInterval(start, 1000);
    document.getElementById("displayTimer").innerHTML = timer.value;
    interval;
    countDownSeconds = timer.value;
}

const start = () => {
    countDownSeconds--;
    document.getElementById("displayTimer").innerHTML = countDownSeconds;
    if(countDownSeconds === -1){
        stopTime();
        document.getElementById("displayTimer").innerHTML = "0";
    }
}

const stopTime = () => {
    clearInterval(interval);
}