var display_clock = document.getElementById("clock");


function formatingTime(tme) {
    if (tme < 10) {
        return "0" + tme
    } else {
        return tme;
    }
}



setInterval(() => {
    let timenow = new Date();
    let date_hour = formatingTime(timenow.getHours());
    let date_min = formatingTime(timenow.getMinutes());
    let date_sec = formatingTime(timenow.getSeconds());

    display_clock.innerText = `${date_hour} : ${date_min} : ${date_sec}`;
}, 1000);


var alarmtime;
var alarmtimeut;

var audio = new Audio("./mixkit-digital-clock-digital-alarm-buzzer-992.wav");
audio.loop = true;
////----------------------
function setAlarm(val) {
    alarmtime = val;
}

function setalarmtime() {
    if (alarmtime) {
        let current = new Date();
        let timetoAlarm = new Date(alarmtime);

        if (timetoAlarm > current) {
            let timeout = timetoAlarm.getTime() - current.getTime();

            alarmtimeut = setTimeout(() => {
                audio.play();
            }, timeout);
            alert("Alarm Set!")
        }
    }
}

/////------------------

function clearAlarm() {
    audio.pause();
    if (alarmtimeut) {
        clearTimeout(alarmtimeut);
        alert("Alarm Cleared!")
    }
}