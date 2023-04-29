'use strict';

const ourServicesWrapper = document.querySelector('.our_services_wrapper');
const ourServicesTitle = Array.from(document.querySelectorAll('.our_services_title'));
const ourServicesDescription = document.querySelectorAll('.our_services_description');
const ourServicesTitleArr = []
let index = 0;

//basic condition
ourServicesTitle[0].classList.add('our_services_checked');
ourServicesTitle[0].classList.remove('draw_border');
ourServicesDescription[0].style.display = 'flex';

//add attribute

ourServicesTitle.forEach(el => {
    el.setAttribute('data-name', `${el.textContent}`);
    ourServicesTitleArr.push(el.textContent);
})

ourServicesDescription.forEach(el => {
    el.setAttribute('data-name', `${ourServicesTitleArr[index]}`)
    index++
})

ourServicesWrapper.addEventListener('click', e => {
    ourServicesTitle.forEach(el => {
        el.classList.remove('our_services_checked');
        el.classList.add('draw_border');
        if (e.target) {
            e.target.classList.remove('draw_border');
            e.target.classList.add('our_services_checked');
        }
    })
    ourServicesDescription.forEach(title => {
        title.style.display = 'none';
        if (e.target.getAttribute('data-name') === title.getAttribute('data-name')) {
            title.style.display = 'flex';
        }
    })
})

