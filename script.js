let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = [];
numeros.forEach(function(numero) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    }
});
console.log(numerosPares);

//-----------------QUESTÃO  2-----------------------------

let nomes = ["João", "Maria", "Carlos", "Ana"];
let nomesComPrefixo = [];
nomes.forEach(function(nome) {
    nomesComPrefixo.unshift("Sr(a). " + nome);
});
console.log(nomesComPrefixo);

//-----------------QUESTÃO  3------------------------------
let numero = [4, 11, 8, 15, 23, 7, 2];
let numerosMaior = [];
numeros.forEach(function(numero) {
    if (numero > 10) {
        numerosMaior.push(numero);
    }
});
console.log(numerosMaior);
//-----------------QUESTÃO  4-----------------------------