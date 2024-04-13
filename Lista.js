// typeof mostra o tipo da variável que está sendo observada
//Em alguns casos ela garante que duas variáveis tenham o mesmo tipo de dado antes de ser executado


//Função que concatena com um argumento de texto

let nome = "Patricia";//Declaração da variável do nome

function Concatenar(nome) {//Função que vai chamar o parâmetro nome
    console.log("Olá", nome);//Mostrando para o usuário
}

Concatenar(nome);//Chamando a função para mostrar ao usuário o que tem dentro dela



// Resolução do professor
let nom = "Pedro"
function cumprimentar(nom){
const saudacao = "Olá";
return [saudacao, nom]. join(','). concat("!")

}

const resultado = cumprimentar(nom);
console.log(resultado);




//Função que recebe a idade e retorna os dias que essa pessoa tem 


let anos = 15;//Declaração da variável com o valor da idade

function Idade(anos) { // Inicio da função que vai fazer a conta da idade
    console.log(anos * 365);// console.log mostra o calculo
}

Idade(anos);//Chamo a função e ele mostra o resultado




//Função que recebe dois parâmetros um é a qtd de horas trabalhadas e a outra é o valor por hoje 

let HorasTrabalhadas = 102;//Declarando o valor das horas trabalhadas
let ValorHora = 70.00;//O valor das horas que trabalhei

function Calculo(HorasTrabalhadas, ValorHora) {//Função que vai trazer o cauculo
    console.log("Seu salário é: " + (HorasTrabalhadas * ValorHora));//Onde eu vou mostrar a mensagem e realizar o cauculo de fato

}


Calculo(HorasTrabalhadas, ValorHora);//Exibir



//Switch com os meses

let mes = 1;

function ExibirMes(mes) {
    switch (mes) {

        case 1:
            console.log("Janeiro");
            break;

        case 2:
            console.log("Fevereiro");
            break;

        case 3:
            console.log("Março");
            break;

        case 4:
            console.log("Abril");
            break;

        case 5:
            console.log("Maio");
            break;

        case 6:
            console.log("Junho");
            break;

        case 7:
            console.log("Julho");
            break;


        case 8:
            console.log("Agosto");
            break;

        case 9:
            console.log("Setembro");
            break;

        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;

        case 12:
            console.log("Dezembro");
            break;
    }
    console.log(mes);
}

ExibirMes(mes);


// Resolução para o professor
let nu = 2;
function receberNomesDoMes(nu){
    const mapeamento =["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return mapeamento [--nu]; 
}

const r = receberNomesDoMes(nu);
console.log(r);

//Criar uma função que recebe dois números e mostre se o primeiro é maior ou igual ao segundo

let n1 = 2;
let n2 = 6;

function maiorIgual(n1, n2) {
    if (n1 >= n2) {
        console.log("É verdade");
    } else {
        console.log("Falso");
    }
}

maiorIgual(n1, n2);

//Resolução do prefe

let primeiro = 78;
let segundo = 90;

function maiorOuIgual(primeiro, segundo){
    if(typeof primeiro!= typeof segundo)
    return false;
    return primeiro >= segundo

}

const res = maiorOuIgual(primeiro, segundo);
console.log(res);



//Retornar o inverso 

let parametro = true;

function Inverso(parametro){
    if (parametro === true){
        console.log("False");
    }else if(parametro === false){
        console.log("True");
    }else{
        console.log("Argumento errado, estavamos esperando um booleano");
    }
}

//Resolução do professor
let value = 1;
function inverso(value){
    const tipo = typeof value
    if (tipo == "boolean")
    return !value;
else if(tipo == "number")
return -value
else
return `Booleano ou número esperados, mas o parâmetro é do ${tipo}`;
}

const resp = inverso(value);
console.log(resp);

//Declarando o inverso só que com numeros

let number = 1;

function Inverso2(number){
    if (number > 0){
        console.log ( - number);
    } else if(number < 0 ){
        console.log( - number);
    }
}

Inverso2(number);

// Declarar três parâmetros e dizer se o numero está entre minimo, maximo e um booleano, que vai dizer se o numero
// que está entre ou não é verdadeiro ou falso

let numero = 189;
let minimo = 123;
let maximo = 256;
let booleano = true;

function NumeroEntre( numero, minimo, maximo, booleano){

    if ((numero >= minimo) && (numero <= maximo) ){
        console.log("Está entre.");
    } else{
        console.log("O numero não se encaixa ao padrão esperado");
    }

}

NumeroEntre(numero, minimo, maximo, booleano);


// Resolução do fessor
let min = 9;
let max = 12;
let n = 11;
let inclusive;

function estaEntre(min, max, n, inclusive = false){
if(inclusive)
return n >= min && n <= max
return n> min && n < max
}


const t = estaEntre(min, max, n, inclusive);
console.log(t);



// Primeiro elemento que repetirá e o segundo é o tanto de vezes que vai ser repetido

let valor = 2;
let repeticao = 4;

function Repeticao(valor, repeticao){

    let resultado = [];

for(let i = 0; i < repeticao; i++){
    resultado.push(valor);
}

return resultado;
}

console.log(Repeticao(valor, repeticao));




// Multiplicação mas sem o operador de multiplicação

let numero1 = 3;
let numero2 = 3;

function FatorMulti(numero1, numero2){
    console.log(numero1+ numero2 + numero2);
}

FatorMulti(numero1, numero2);

//Resolução do fessor

let numeroA = 8;
let numeroB = 10;

function multiplicar(numeroA, numeroB){
    let resultado = 0;
    for(let i = 0; i < numeroB; i++){
        resultado += numeroA
        return resultado;
    
    }
        
}

const p = multiplicar(numeroA, numeroB);
console.log(p);
//Primeiro parametro é o simbolo que vai repetir e o segundo é o número de vezes que vai haver repetição


let simbolo = "+";
let num = 4;

function Repeticao(simbolo, num){

    let resultado = [];

for(let i = 0; i < num; i++){
    resultado.push(simbolo);
}

return resultado;
}

console.log(Repeticao(simbolo, num));

// Resultado do prefe

let quantidade = 12;

function simboloMais(quantidade){
    let resultado = '';
for (let i = 0; i < quantidade; i ++){
    resultado += '+';
}
return resultado;

}

const d = simboloMais(quantidade);
console.log(d);


// Receber um array e retornar o primeiro e último elemento desse array

let array = [2, 3, 4, 5];

// Usar um atalho para funcionar





