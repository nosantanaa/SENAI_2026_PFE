const nome = 'noemi'
const titulo = document.querySelector('#titulo');
const texto = document.querySelector('#texto')
const fundo = document.querySelector('.fundo');
const quadro = document.querySelector('.cor-diferente')


titulo.textContent += nome;
texto.textContent += 'e alterado via javascript';
fundo.textContent = '#e58484';
quadro.textContent = '#f8d04c';
titulo.style.color = '#fff';
texto.style.color = '#817979';
titulo.style.fontSize = '68px';