/*
Crie um algoritmo que contenha uma variável representando a data atual, 
crie uma nova data representando 31 de dezembro, 
calcule quantos dias faltam para o fim do ano e exiba;
*/

let data = new Date();
let fim = new Date(data.getFullYear(), 11, 31);

let faltam = Math.ceil((fim-data) / (1000*60*60*24));

console.log('faltam', faltam , "dias para o fim do ano");