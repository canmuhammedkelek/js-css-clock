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

function sifirekleme(sayi) {
    if (sayi < 10) {
        return "0" + sayi;
    } else {
        return sayi;
    }
}
let interval = setInterval(() => {
    let date = new Date();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    document.getElementById('time').innerHTML = sifirekleme(saat) + ":" + sifirekleme(dakika) + ":" + sifirekleme(saniye);

    for (i = 0; i < 24; i++) {
        let h = document.getElementById('hour' + i);
        if (i < saat) {
            h.style.backgroundColor = "#5AC8FA";
        } else {
            h.style.backgroundColor = "#D9D9D9";
        }
    }
    for (i = 0; i < 59; i++) {
        let m = document.getElementById('minute' + i);
        if (i < dakika) {
            m.style.backgroundColor = "#5AC8FA"
        } else {
            m.style.backgroundColor = "#D9D9D9"
        }
    }
    for (i = 0; i < 59; i++) {
        let s = document.getElementById('second' + i);
        if (i < saniye) {
            s.style.backgroundColor = "#5AC8FA"
        } else {
            s.style.backgroundColor = "#D9D9D9"
        }
    }
}, 1000);