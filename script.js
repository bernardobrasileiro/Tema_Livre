const botao = document.querySelector('#tema');
botao.addEventListener('click', function () {
    document.body.classList.toggle('claro');
});

const links = document.querySelectorAll('#links a');
let contador = 0;
const numero = document.querySelector('#numero');
links.forEach(function (link) {
    link.addEventListener('click', function () {
        contador++;
        numero.textContent = contador;
    });
});

const form = document.querySelector('form');
const campo = document.querySelector('#campo');
form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (campo.value === '') {
        alert('Campo Vazio!');
    }
});