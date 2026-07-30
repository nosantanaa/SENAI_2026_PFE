/*
Crie um algoritmo peça um número ao usuário e que gere um outro número que seja aleatório,
verifique se são iguais e retorne
*/

const prompt = require ("prompt-sync")();
let algoritmo = Number(prompt("digite um numero: "));
let aleatorio = Math.random
console.log(aleatorio)
if(algoritmo == aleatorio){
    console.log("são iguais!")
} else{
    console.log("sao diferentes!");
}
