let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificaConsole() {
    console.log('O botão foi Clicado');
}

function verificaAlerta() {
    alert('Eu Amo JS');
}

function verificaPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);

}

function verificaSoma() {
    let num1 = prompt('Digite um numero: ');
    let num2 = prompt('Digite outro numero: ');
    let soma = Number(num1) + Number(num2);
    alert(`O resultado da soma é: ${soma}`);

}