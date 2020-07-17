//TODO@canmuhammedkelek
const hour = 24;
const minute = 59;
const second = 59;

for (i = 0; i < hour; i++) {
    const hourdiv = document.createElement('div');
    hourdiv.id = "hour" + i;
    hourdiv.className = "hourstyle";
    hourdiv.innerHTML = ""
    document.getElementById('hours').appendChild(hourdiv);
}

for (i = 0; i < minute; i++) {
    const minutediv = document.createElement('div');
    minutediv.id = "minute" + i;
    minutediv.className = "minutestyle";
    minutediv.innerHTML = "";
    document.getElementById('minutes').appendChild(minutediv);
}

for (i = 0; i < second; i++) {
    const seconddiv = document.createElement('div');
    seconddiv.id = "second" + i;
    seconddiv.className = "secondstyle";
    seconddiv.innerHTML = "";
    document.getElementById('seconds').appendChild(seconddiv);
}
let interval = setInterval(() => {
    let date = new Date();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    document.getElementById('time').innerHTML = saat + ":" + dakika + ":" + saniye;

}, 1000);