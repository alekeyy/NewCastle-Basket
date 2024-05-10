const countDownDate = new Date("May 25, 2024 15:00:00");
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

let x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dias.innerHTML = days;
    horas.innerHTML = hours;
    minutos.innerHTML = minutes;
    segundos.innerHTML = seconds;

    if(distance < 0){
        clearInterval(x)
        dias.innerHTML = "00";
        horas.innerHTML = "00";
        minutos.innerHTML = "00";
        segundos.innerHTML = "00";
    }

}, 1000)

// libres
let cuposOcupados = 3;
const cuposLibresElem = document.getElementById("disponibles");
cuposLibresElem.innerHTML = `<h3>Quedan <span class="disponibles">${32 - cuposOcupados}</span> lugares disponibles</h3>`;