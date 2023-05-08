const claro = document.querySelector('.claro');
const escuro = document.querySelector('.escuro');
const main = document.querySelector('.main');
const botao = document.querySelectorAll('.botao')


claro.addEventListener("click", () => {
    main.style.background = "#e4e4e4";
    main.style.transition = '.5s'

    for(i = 0 ; i < botao.length ; i++){
        botao[i].style.color = '#000000'
    }
})

escuro.addEventListener('click', () => {
    main.style.background = '#555555';

    for(i = 0 ; i < botao.length ; i++){
        botao[i].style.color = '#e4e4e4'
    }
})