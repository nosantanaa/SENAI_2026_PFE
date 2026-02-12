const prompt = require ("prompt-sync")();
let idade = Number(prompt('informe sua idade: '));
if(idade < 16){
    console.log('você nao tem idade suficiente para pegar livro');
} else if(idade >= 18){
    console.log('você é maior de idade e pode pegar livro');
} else {
    console.log('você nao é de maior, mas pode pegar livros')
}