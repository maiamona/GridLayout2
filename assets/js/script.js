const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');
let menuLateral = document.querySelectorAll('.menu-lateral__link');
let menuInicio = document.querySelector('.menu-lateral__link--inicio');
let menuVideos = document.querySelector('.menu-lateral__link--videos');
let menuPicos = document.querySelector('.menu-lateral__link--picos');
let menuIntegrantes = document.querySelector('.menu-lateral__link--integrantes');
let menuCamisas = document.querySelector('.menu-lateral__link--camisas');
let menuPinturas = document.querySelector('.menu-lateral__link--pinturas');


menuInicio.classList.add('menu-lateral__link--activo');


botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--activo');
});

for (let i = 0; i < menuLateral.length; i++) {
    menuLateral[i].addEventListener('click', () => {
        // let primeiroMenu = document.querySelector('.menu-lateral a.menu-lateral__link:nth-child(2)');
        notActive();
        menuLateral[i].classList.add('menu-lateral__link--activo');
    });
}

function notActive() {
    menuInicio.classList.remove('menu-lateral__link--activo');
    menuVideos.classList.remove('menu-lateral__link--activo');
    menuPicos.classList.remove('menu-lateral__link--activo');
    menuIntegrantes.classList.remove('menu-lateral__link--activo');
    menuCamisas.classList.remove('menu-lateral__link--activo');
    menuPinturas.classList.remove('menu-lateral__link--activo');
}