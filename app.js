let numeroSecreto;
let intentos;
let numerosSecretosAnteriores = [];
let repeticionesMaximas = 5;
let repeticion = 1;
let numeroMaximo = 100;

console.log(numeroSecreto);

function verificarRepeticion(){
    while (numerosSecretosAnteriores.includes(numeroSecreto)){
        console.log(numeroSecreto);
        numeroSecreto = generarNumeroSecreto();
        console.log(numeroSecreto);
    }  
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}
function compararNumeros(numeroSecreto, numeroDeUsuario){
    let mensajeComprobacion = '';
    if (numeroSecreto > numeroDeUsuario){
        mensajeComprobacion = 'El número secreto es mayor';
    } else {
        mensajeComprobacion = 'El número secreto es menor';
    }
    return mensajeComprobacion;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        limpiarCaja();
        asignarTextoElemento('p', compararNumeros(numeroSecreto, numeroDeUsuario));
        intentos++;
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto')
    asignarTextoElemento('p', `Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    return Math.floor((Math.random() * numeroMaximo)) + 1;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    
    numerosSecretosAnteriores.push(numeroSecreto);
    console.log(numerosSecretosAnteriores)
    limpiarCaja();
    condicionesIniciales();
    console.log(repeticion)
    repeticion >= repeticionesMaximas ? numerosSecretosAnteriores.shift() : numerosSecretosAnteriores = numerosSecretosAnteriores;
    repeticion++;
    verificarRepeticion();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
