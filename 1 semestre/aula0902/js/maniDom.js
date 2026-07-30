// alert('eu estou aprendendo o DOM e sou uma boa aluna')
// alert('eu estou aprendendo o DOM e meu professor é top')
let fundo = document.getElementById('corpo');
let fundoPagina = document.querySelector('#corpo');// seletor id
//document.querySelector('.corpo')// seletor class
const titulo = document.querySelector('.titulo');

fundo.style.backgroundColor = '#8559c8';
titulo.style.color = '#fff';
titulo.style.fontSize = '80px';
titulo.textContent += ' - sesi mirandopolis';