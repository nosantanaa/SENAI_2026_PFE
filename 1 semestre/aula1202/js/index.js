const corpo = document.querySelector('body')
const titulo = document.querySelector('.titulo')
const container = document.querySelector('#container')
const imagem = document.querySelector('#imagem')
const botao = document.querySelector('.botao')

corpo.style.backgroundColor = '#8311df';
corpo.style.color = 'white';
titulo.textContent = 'adicionando elementos via JS';
container.style.widgt = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#b784de';

let anuncio = '<h2>curso de com ia - novidade!!!</h2>';
container.innerHTML += anuncio

//adc atributos

imagem.setAttribute('src','https://logodownload.org/wp-content/uploads/2016/10/sesi-logo-2.png')

//imagem.removeAttribute('src')//

//add classes
imagem.classList.add('imagem');

//eventos 
let contador = 0
botao.addEventListener('click', () =>{
    alert('clique no botao' + contador++)
})