/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 

  
Bons estudos 😉*/


console.log(" _______  _______  _        _______           _        _______ ")
console.log("(  ____ \\(  ___  )( \\      (  ____ \\|\\     /|( \\      (  ___  )")
console.log("| (    \\/| (   ) || (      | (    \\/| )   ( || (      | (   ) |")
console.log("| |      | (___) || |      | |      | |   | || |      | (___) |")
console.log("| |      |  ___  || |      | |      | |   | || |      |  ___  |")
console.log("| |      | (   ) || |      | |      | |   | || |      | (   ) |")
console.log("| (____/\\| )   ( || (____/\\| (____/\\| (___) || (____/\\| )   ( |")
console.log("(_______/|/     \\|(_______/(_______/(_______)(_______/|/     \\|")
console.log("                                                               ")
console.log(" _______  _______  _        _       ")
console.log("(  ____ )(  ___  )( (    /|| \\    /\\")
console.log("| (    )|| (   ) ||  \\  ( ||  \\  / /")
console.log("| (____)|| (___) ||   \\ | ||  (_/ / ")
console.log("|     __)|  ___  || (\\ \\) ||   _ (  ")
console.log("| (\\ (   | (   ) || | \\   ||  ( \\ \\ ")
console.log("| ) \\ \\__| )   ( || )  \\  ||  /  \\ \\")
console.log("|/   \\__/|/     \\||/    )_)|_/    \\/ ")

const read = require('readline-sync');
const cores = require('colors');

var quantVitorias = Number(read.question("Quantas vitórias você tem? "));
var quantDerrotas = Number(read.question("Quantas derrotas você tem? "));

function calculaSaldo(quantVitorias,quantDerrotas){
    return saldoVitorias = quantVitorias - quantDerrotas;
}


calculaSaldo(quantVitorias,quantDerrotas);

var nivel = "";

if (saldoVitorias <=10)
   nivel = "Ferro";
else if (saldoVitorias >= 11 && saldoVitorias <= 20)
    nivel = "Bronze";
else if (saldoVitorias >= 21 && saldoVitorias <= 50)
    nivel = "Prata";
else if (saldoVitorias >= 51 && saldoVitorias <= 80)
    nivel = "Ouro";
else if (saldoVitorias >= 81 && saldoVitorias <= 90)
    nivel = "Diamante";
else if (saldoVitorias >= 91 && saldoVitorias <= 100)
    nivel = "Lendário";
else if (saldoVitorias >=101)
    nivel = "Imortal";

if (nivel == "Ferro")
    nivel = nivel.black;
else if (nivel == "Bronze")
    nivel = nivel.magenta;
else if (nivel == "Prata")
    nivel = nivel.grey;
else if (nivel == "Ouro")
    nivel = nivel.yellow;
else if (nivel == "Diamante")
    nivel = nivel.green;
else if (nivel == "Lendário")
    nivel = nivel.red;
else if (nivel == "Imortal")
    nivel = nivel.rainbow;

console.log(`O Herói tem um saldo de ${saldoVitorias}  vitórias e está no Rank :  ${nivel}`)