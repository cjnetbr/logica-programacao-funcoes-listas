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
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior!');
        }
        tentativas++;
        limparCampo()
    }
}

//Função com retorno
function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * 10 + 1);
    return numeroAleatorio;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 0 e 10');

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

