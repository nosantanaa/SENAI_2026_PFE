const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container')
const UC = document.querySelector('.UC')
const imagem = document.querySelector('#imagem')

corpo.style.backgroundColor = '#aaa520';
corpo.style.color = 'black';
titulo.textContent = 'Utilizando o DOM - AULA 12/02';
container.style.widgt = '94%';
container.style.margin = '0 auto'; 
container.style.backgroundColor = '#ecea6f'

UC.style.color = 'black' 

let un = '<h2>Programação FrontEnd</h2>';
container.innerHTML += un

imagem.setAttribute('src','https://logodownload.org/wp-content/uploads/2016/10/sesi-logo-2.png')