const botaoligar = window.document.getElementById('botaoligar');
const botaodesligar = window.document.getElementById('botaodesligar');
const lamp = window.document.getElementById('lamp');


function lampOn() {
    lamp.src = './img/ligada.jpg'
}

function lampOff() {
    lamp.src = './img/desligada.jpg';
}

botaoligar.addEventListener('click', lampOn);
botaodesligar.addEventListener('click', lampOff)