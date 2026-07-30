/*
Dado peso (kg) e altura (m), calcule o IMC peso / (altura ** 2) e classifique:
•   < 18.5: Abaixo do peso
•	>= 18.5 && < 25: Normal
•	>= 25 && < 30: Sobrepeso
•	>= 30: Obesidade
*/

let peso = 50;
let altura = 1.72
let imc = peso / (altura ** 2);
if (imc < 18.5){
    console.log('voce esta abaixo do peso');
} else if (imc >= 18.5 && imc < 25){
    console.log('voce tem peso normal');
} else if(imc >= 25 && imc < 30){
    console.log('voce esta no sobrepeso');
} else if(imc >= 30){
    console.log('voce esta em um nivel de obesidade');
}