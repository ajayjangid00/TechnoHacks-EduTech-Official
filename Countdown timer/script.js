

let displaytime = document.querySelector('.displaytime')
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let rsetbtn = document.getElementById('rsetbtn');


let milisec = 0;
let sec = 0;
let minte = 0;

let timerid = null;


startbtn.addEventListener('click', function () {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid=setInterval(startTimer, 10);
});


stopbtn.addEventListener('click', function () {

    clearInterval(timerid);
});

rsetbtn.addEventListener('click', function () {

    clearInterval(timerid);
    displaytime.innerHTML = ` 00: 00 : 00`;
});

function startTimer() {
    milisec++;
    if (milisec == 100) {
        milisec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            minte++;
        }
    }

    let miliStruing = milisec < 10 ? '0' + milisec : milisec;
    let secString = sec < 10 ? '0' + sec : sec;
    let minitstring = sec < 10 ? '0' + minte : minte;


    displaytime.innerHTML = `${minitstring}: ${secString} : ${miliStruing} `;
}