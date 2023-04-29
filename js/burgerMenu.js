const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.navbar_wrapper');

burgerBtn.addEventListener('click', ()=> {
    menu.classList.toggle('open');
});
