let time = document.getElementsByClassName("timer");

let timings = 60;
let i = 0;

let myInterval = setInterval(Timeout, 1000);

function Timeout(){
    time[0].innerHTML= `${(timings*60-i)%60}`
    i++;
}