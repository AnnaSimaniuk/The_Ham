//arrow up

const arrowUp = document.querySelector('.arrow_up');
arrowUp.addEventListener('click', () => {
    arrowUp.classList.add('rotation');
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        arrowUp.classList.remove('rotation');
    }, 500);
})

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 400) {
        arrowUp.classList.remove('hide_arrow_up');
    } else {
        arrowUp.classList.add('hide_arrow_up');
    }
})