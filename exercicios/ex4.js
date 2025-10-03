// Crie uma lista vazia, com o nome listaGenerica.
// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.


let listaGenerica = [];
let linguagemDeProgramacao = [ 'JavaScript','C','C++', 'Kotlin','Python'];

linguagemDeProgramacao.push('Java');
linguagemDeProgramacao.push('Ruby');
linguagemDeProgramacao.push('GoLang');

console.log(linguagemDeProgramacao);

let listaNomes = ['Claudio', 'Cristina', 'Luiz', 'Caetano', 'Miguel'];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[listaNomes.length - 1]);