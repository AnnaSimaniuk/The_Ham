'use strict';

import('./nav.js')
import('./our services.js')
import('./our amazing work.js')
import('./breaking news.js')
import('./what people say.js')
import('./gallery of best images.js')

//modal window
const popup = document.querySelector('.popup');
export const popupImage = document.querySelector('.popup_image');
export let popupClick = true;

export function openPopup() {
    popupImage.style.transform = 'perspective(1000px) translateX(0) rotateY(0deg)';
    popup.classList.add('open');
    document.body.style.overflowY = 'hidden';
    popupClick = false;
}

popup.addEventListener('click', e => closePopup(e))

function closePopup(e) {
    if (popup.classList.contains('open') && !e.target.classList.contains('popup_image') && !popupClick) {
        popup.classList.remove('open');
        popupImage.style.transform = 'perspective(1000px) translateX(-1600px) rotateY(-30deg)'
        setTimeout(() => {
            document.body.style.overflowY = 'auto';
            popupClick = true;
            popupImage.style.transform = 'perspective(1000px) translateX(1600px) rotateY(30deg)';
            popupImage.style.backgroundImage = 'none';
        }, 800)

    }
}

//basic condition

const links = document.querySelectorAll('a');
links.forEach(link => {
    if (!link.classList.contains('dandruff') && !link.classList.contains('arrow_up')) {
        link.addEventListener('click', e => e.preventDefault())
    }
})


//page animation

document.querySelectorAll('.title_line1').forEach(el => el.classList.add('animate_items'));
document.querySelectorAll('.title_line2').forEach(el => el.classList.add('animate_items'));
const animateItems = Array.from(document.querySelectorAll('.animate_items'));

window.addEventListener('scroll', animateScroll)

function animateScroll() {
    for (const item of animateItems) {
        const itemHeight = item.offsetHeight;
        const itemOffset = getElementOffset(item).top;
        const itemStart = 4;

        let itemPoint = window.innerHeight - itemHeight / itemStart;

        if ((pageYOffset > itemOffset - itemPoint) && pageYOffset < (itemOffset + itemHeight)) {
            item.classList.add('active');
        } else {
            if (!item.classList.contains('no-repeat'))
                item.classList.remove('active');
        }
    }
}

function getElementOffset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
    };
}


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