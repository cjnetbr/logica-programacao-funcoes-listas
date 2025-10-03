// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Numero Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 0 e 10';


//função com parâmetro
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Função sem Parâmetro
function verificarChute(){
    let chute = document.querySelector('input').value;
    console,console.log(chute == numeroSecreto);
}

//Função com retorno
function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * 10 + 1);
    return numeroAleatorio;
}

exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 0 e 10');

let numeroSecreto = gerarNumeroAleatorio();
