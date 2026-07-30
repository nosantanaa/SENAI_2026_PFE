/*   Crie um algoritmo que peça um número com casas decimais para o usuário 
e retorne o arredondamento dele.   */


const prompt = require ("prompt-sync")();
let numero = prompt ("digite um numero com casas decimais: ");
let arredondado = Math.round(numero);
console.log("o resultado do arredondamento é: ", arredondado);