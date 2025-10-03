// Desafios
// Criar uma função que exibe "Olá, mundo!" no console.

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo


function olaMundo() {
    alert('Olá Mundo');
}

function cumprimetar(texto){
    let nome = prompt('Digite seu nome: ');
    alert(`Olá ${nome}`);

}

function dobrarNumero(numero) {
    return numero * 2;
}


function mediaNumeros(num1, num2, num3) {
    let media  = (num1 + num2 + num3) / 3;
    return media;
}

function qualMaior(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function multiplicaPorMim(numero) {
    return numero * numero;
}


olaMundo();
cumprimetar('Claudio');
alert(dobrarNumero(5));
alert(mediaNumeros(6, 8, 10));
alert(multiplicaPorMim(5));
alert(qualMaior(13, 22));
alert(multiplicaPorMim(10));