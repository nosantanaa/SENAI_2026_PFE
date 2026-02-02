// let op = '+'
const calcular = function(num1,num2,op){
    if(op == '+'){
        console.log('a soma dos numero é: ' + (num1 + num2));
    } else if(op == '-'){
        console.log('a subtracao dos numero é: ' + (num1 - num2));
    } else if(op == '*'){
        console.log('a multiplicacao dos numero é: ' + (num1 * num2));
    } else if(op == '/'){
        console.log('a divisao dos numero é: ' + (num1 / num2));
    } else{
        console.log('Operador inválido');
        
    }
}

calcular(26,10,'*');

/*
const multiplicar = function(num1,num2){
    console.log('a multiplicacao dos numero é: ' + (num1 * num2));
}

multiplicar(10,15)

const dividir = function(num1,num2){
    console.log('a divisao dos numero é: ' + (num1 / num2));
}

dividir(10,15)*/