var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");

var wm = document.getElementById("w_minutes");
var ws = document.getElementById("w_seconds");


var bm = document.getElementById("b_minutes");
var bs = document.getElementById("b_seconds");

var counter = document.getElementById("counter");

var startTimer;

function timer() {
    if (ws.innerText != 0) {
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    if (ws.innerText == 0 && wm.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    if (ws.innerText == 0 && wm.innerText == 0 && bs.innerText == 0 && bm.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00"

        counter.innerText++;
    }
}

function stopInterval() {
    clearInterval(startTimer);
}

start.addEventListener('click', function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    }
})

reset.addEventListener('click', function () {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00"

    stopInterval();

    startTimer = undefined;
})

stop.addEventListener('click', function () {
    stopInterval();
    startTimer = undefined;
})