const dagenElem = document.getElementById('dagen');
const urenElem = document.getElementById('uren');
const minutenElem = document.getElementById('minuten');
const secondenElem = document.getElementById('seconden');

const targetdate = new Date("June 27 2025 09:00:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetdate - currentDate;

    const dagen = Math.floor(distance / 1000 / 60 / 60 / 24);
    const uren = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minuten = Math.floor(distance / 1000 / 60) % 60;
    const seconden = Math.floor(distance / 1000) % 60;

    dagenElem.innerHTML = dagen;
    urenElem.innerHTML = uren;
    minutenElem.innerHTML = minuten;
    secondenElem.innerHTML = seconden;
}

setInterval(timer, 1000);
