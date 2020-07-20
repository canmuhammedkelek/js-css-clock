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

function saatmaxlimit() {
    let limit = document.getElementById('sonuc0').value;
    if (limit > "24") {
        document.getElementById('sonuc0').value = "24";
    }
}

function dkmaxlimit() {
    let limit = document.getElementById('sonuc1').value;
    if (limit > "60") {
        document.getElementById('sonuc1').value = "60";
    }
}



function arttir() {
    let sonuc = document.getElementById('sonuc0');

    if (sonuc.value < 24) {
        sonuc.value = Number(sonuc.value) + 1;
    }
}

function azalt() {
    let sonuc = document.getElementById('sonuc0');
    if (sonuc.value > 0) {
        sonuc.value = Number(sonuc.value) - 1;
    }

}

function dkarttir() {
    let sonuc = document.getElementById('sonuc1');
    if (sonuc.value < 60) {
        sonuc.value = Number(sonuc.value) + 1;
    }

}

function dkazalt() {
    let sonuc = document.getElementById('sonuc1');
    if (sonuc.value > 0) {
        sonuc.value = Number(sonuc.value) - 1;
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
            h.className = "hourstyle blue";
        } else {
            h.className = "hourstyle gray";
        }
    }
    for (i = 0; i < 59; i++) {
        let m = document.getElementById('minute' + i);
        if (i < dakika) {
            m.className = "minutestyle blue";
        } else {
            m.className = "minutestyle gray";
        }
    }
    for (i = 0; i < 59; i++) {
        let s = document.getElementById('second' + i);
        if (i < saniye) {
            s.className = "secondstyle blue";
        } else {
            s.className = "secondstyle gray";
        }
    }
}, 1000);
var tarih = new Date();
var ihour = tarih.getHours();
var iminute = tarih.getMinutes();
document.getElementById('sonuc0').value = sifirekleme(ihour);
document.getElementById('sonuc1').value = sifirekleme(iminute);