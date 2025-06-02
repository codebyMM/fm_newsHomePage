const nav = document.querySelector('nav');
const background = document.querySelector('.background');
const btnToggle = document.querySelector('.menu-toggle');
const btnClose = document.querySelector('.btn-close');

[btnToggle, btnClose].forEach(button => {
    button.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        background.classList.toggle('show');
    });
});