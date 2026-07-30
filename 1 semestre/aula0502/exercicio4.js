/*
Crie um algoritmo que obtenha a data atual e exiba no console as seguintes informações separadamente:
O dia do mês
O mês
O ano completo
*/

let agora = new Date();

console.log("dia: ", agora.getDay()+1);
console.log("mês: ", agora.getMonth()+1);
console.log("ano: ", agora.getFullYear());