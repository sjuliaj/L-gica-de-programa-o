// Conceito sobre array 

// Utilizar uma estrutura que armazena várias informações

//Ex: vou criar uma variável notas que armazena várias notas

// let notas = [2.3, 3.4, 5.4, 3.5];
// Primeiro elemento começa a ser contado pelo zero
//Foreach é utilizado para percorrer múltiplos elementos dentro de um array


//Básico sobre array
//              0    1    2    3    4    5
const notas = [5.3, 5.6, 7.9, 3.2, 5.2, 1.9];

console.log(notas);
console.log(notas[5]);
// Valores internos podem ser modificados 
notas[4] = 4.2;

console.log(notas);

//Segundo exemplo: 

//Exemplo que o usuário vai falando os nomes e eu vou acrescentando ao array
const nomes = [];

nomes[0] = "Juliana";

nomes[1] = "Pedro";

nomes[2] = "Rafaela";

nomes[3] = "Jão";

nomes[4] = "Marcos";

nomes[5] = "Marocas";

nomes[6] = "Carmen";

nomes[7] = "Muriçoca";

nomes[8] = "Nina";

console.log(nomes);

//Terceiro exemplo

// console.log(typeof console)

//Usando o typeof

console.log(typeof console);
console.log(typeof console.log);

const numeros = [1, 2, 3];

console.log(typeof numeros);

numeros.push(4);
numeros.push(5);
numeros.push(12);

console.log(numeros);
console.log(numeros.length);

//Isso modifica arrays de forma dinâmica

// Usando estruturas de controle

const num = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < num.length; i++ ){
console.log(numeros[i]);

}

//Segundo exercicio sobre array com for

const notas = [2, 3, 4, 5, 6, 7, 7, 8];
let valores = '';
for(let nota of notas){
    valores += nota +  '  ';
}
console.log(valores);