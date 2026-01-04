const startBtn = document.getElementById("btn-start")
const stopBtn = document.getElementById("btn-stop")
const resetBtn = document.getElementById("btn-reset")

let hours=0;
let minutes=0;
let second = 0
let tens = 0
let timerInterval

startBtn.addEventListener('click', start)
function start() {
    timerInterval = setInterval(startTimer, 10)
}
function startTimer() {
    tens++
    if (tens < 10) {
        document.getElementById("tens").innerText = "0" + tens
    }
    else if (tens >= 10 && tens < 100) {
        document.getElementById("tens").innerText = tens
    }
    else {
        tens = 0
        document.getElementById("tens").innerText = tens
        second++
        if (second < 10) {
            document.getElementById("second").innerText = "0" + second
        } else{
            document.getElementById("second").innerText = second
        }
        //h.w//
        if(second==60){
             second= 0
              document.getElementById("second").innerText = "0" +second
               minutes++

               if(minutes<10){
                  document.getElementById("minutes").innerText="0"+minutes;

               }
               else{
                document.getElementById("minutes").innerText=minutes
               }
        }

        if(minutes==60){
            minutes= 0
             document.getElementById("minutes").innerText = "0" + minutes
             hours++
             if(hours<10){
                document.getElementById("hours").innerText="0"+hours;
             }
             else{
                document.getElementById("hours").innerText=hours;
             }
        }

    }
}

stopBtn.addEventListener('click', stop)
function stop() {
    clearInterval(timerInterval)
}

resetBtn.addEventListener('click', reset)
function reset() {
    clearInterval(timerInterval)
    tens = 0
    second = 0
    minutes=0
    hours=0
    document.getElementById("tens").innerText = "0" + tens
    document.getElementById("second").innerText = "0" + second
   document.getElementById("minutes").innerText = "0" + second
       document.getElementById("hors").innerText = "0" + second

}


