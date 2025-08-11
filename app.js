
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeusuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usario noa ceptó
        if (numeroDeusuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');        
        }
        intentos++;
        limpiarCaja();
    }
    return
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ' ';
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se asignaron todos los núemros posibles')
    }else{ 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`)
    intentos = 1;
    numeroSecreto = generaNumeroSecreto();
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

