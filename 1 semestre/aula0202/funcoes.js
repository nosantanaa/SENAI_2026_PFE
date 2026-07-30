function cumprimento(nome){
    console.log('seja bem vinda(o)!' + nome)
}

cumprimento(' noemi santana')

//funcao anonima
const somar = function(num1,num2){
    console.log('a soma dos numero é: ' + (num1 + num2));
}

somar(10,15);

const subtrair = (num1,num2) => {
    console.log('a subtracao dos numeros é: ' + (num1 - num2))
}

subtrair (30,20);