// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function massaCorporal(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

function calculaFatorial(numero){
    let contador = numero - 1;
    let fatorial = numero;
    while (contador > 0){
        fatorial = fatorial * contador;
        contador--;
    } 
    return `o fatorial de ${numero} é ${fatorial}`;
}

function convertDolarReal(dolar){
    let cambio = 4.80;
    let real = dolar * cambio;
    return `${dolar} Dolares equivale a ${real} Reais`;

}

function calculaPerimetroRetangulo(base, altura){
    let perimetro = (base * 2) + (altura * 2);
}

function CalculaPerimetroCirculo(raio){
    let pi = 3.14;
    let perimetro = pi * (raio * raio);
    return `A area do circulo cujo raio é ${raio} é de ${perimetro}`;

}

function calcularTabuada(numero){
    let contador = 1;
    let tabuada = '';
    while (contador <= 10){
        tabuada += `${numero} x ${contador} = ${numero * contador}\n`;
        contador++;
    }
    return tabuada;
}

alert(massaCorporal(78, 1.72));
alert(calculaFatorial(6));
alert(convertDolarReal(50));
alert(CalculaPerimetroCirculo(9));
alert(calcularTabuada(5));