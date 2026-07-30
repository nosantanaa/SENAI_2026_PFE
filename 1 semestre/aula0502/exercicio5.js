/*Peça ao usuário que informe seu ano de nascimento. 
Depois, use a data atual para calcular e exibir quantos anos ele tem.*/

const prompt = require ("prompt-sync")();
let ano = prompt ("digite seu ano de nascimento: ");
let dataAtual = new Date;
let resultado = dataAtual.getFullYear() - ano;
console.log("voce tem ", resultado , "anos");