// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Numero Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 0 e 10';


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    console,console.log('O botão foi clicado');
}

exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 0 e 100');


