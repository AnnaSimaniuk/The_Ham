'use strict';

import {openPopup, popupClick, popupImage} from "./modalWindow.js";

const ourWorksImgLinks = ['img/graphic design/graphic-design1.jpg', 'img/landing page/landing-page1.jpg', 'img/web design/web-design5.jpg', 'img/wordpress/wordpress1.jpg',
    'img/graphic design/graphic-design2.jpg', 'img/landing page/landing-page2.jpg', 'img/web design/web-design1.jpg', 'img/wordpress/wordpress2.jpg',
    'img/graphic design/graphic-design3.jpg', 'img/landing page/landing-page3.jpg', 'img/web design/web-design2.jpg', 'img/wordpress/wordpress3.jpg',
    'img/graphic design/graphic-design4.jpg', 'img/landing page/landing-page4.jpg', 'img/web design/web-design3.jpg', 'img/wordpress/wordpress4.jpg',
    'img/graphic design/graphic-design5.jpg', 'img/landing page/landing-page5.jpg', 'img/web design/web-design4.jpg', 'img/wordpress/wordpress5.jpg',
    'img/graphic design/graphic-design6.jpg', 'img/landing page/landing-page6.jpg', 'img/web design/web-design6.jpg', 'img/wordpress/wordpress6.jpg',
    'img/graphic design/graphic-design7.jpg', 'img/landing page/landing-page7.jpg', 'img/web design/web-design7.jpg', 'img/wordpress/wordpress7.jpg',
    'img/graphic design/graphic-design8.jpg', 'img/wordpress/wordpress8.jpg',
    'img/graphic design/graphic-design9.jpg', 'img/wordpress/wordpress9.jpg',
    'img/graphic design/graphic-design10.jpg', 'img/wordpress/wordpress10.jpg',
    'img/graphic design/graphic-design11.jpg',
    'img/graphic design/graphic-design12.jpg',];

const ourWorksImgWrapper = document.querySelector('.our_works_img_wrapper');

//add attributes

function setAttributeAlt(el) {
    if (el.includes('graphic')) {
        return 'graphic design';
    }
    if (el.includes('landing')) {
        return 'landing pages';
    }
    if (el.includes('wordpress')) {
        return 'wordpress';
    }
    if (el.includes('web')) {
        return 'web design';
    }
}

ourWorksImgLinks.forEach(el => {
    ourWorksImgWrapper.insertAdjacentHTML('beforeend', `<div class="image-container">
               <img class="our_works_img front-side" src="${el}" alt="${setAttributeAlt(el)}">
               <div class="back-side">
                    <div class="inner">
                        <div class="circle_wrapper">
                            <div class="circle_empty"></div>
                            <div class="circle_full"></div>
                        </div>
                        <p>creative design</p>
                        <p class="inner_category"></p>
                    </div>
               </div>
            </div>`)
});

//add classes

const imageContainer = Array.from(document.querySelectorAll('.image-container'));
let imgCounter = 0;

imageContainer.forEach(div => {
    imgCounter++;
    if (imgCounter > 12 && imgCounter <= 24) {
        div.classList.add('load1');
    }
    if (imgCounter > 24 && imgCounter <= 36) {
        div.classList.add('load2');
    }
})

//load more btn

const loadMoreBtn = document.querySelector('.our_works_btn');
export const load = document.querySelector('.loader');
const loadMoreOne = Array.from(document.querySelectorAll('.load1'));
const loadMoreTwo = Array.from(document.querySelectorAll('.load2'));
let counter = 0;

function showImg () {
    load.style.display = 'none';
    loadMoreBtn.hidden = false;
    if (counter === 0) {
        loadMoreOne.forEach(el => {
            el.style.display = 'block'
            el.classList.add('show_img_1')
        });
    } else {
        loadMoreTwo.forEach(el => {
            el.style.display = 'block'
            el.classList.add('show_img_2')
        });
        loadMoreBtn.style.display = 'none';
    }
    counter++;
}

loadMoreBtn.addEventListener('click', () => {
    loadMoreBtn.hidden = true;
    load.style.display = 'block';
    setTimeout(showImg, 2000);
})

//our works filter

const ourWorksWrapper = document.querySelector('.our_works_wrapper');
const ourWorks = Array.from(document.querySelectorAll('.our_works'));
const innerCategory = Array.from(document.querySelectorAll('.inner_category'));
let innerCategoryIndex = 0;
imageContainer.forEach(img => {
    img.setAttribute('data-category', `${img.children[0].getAttribute('alt')}`)
    innerCategory[innerCategoryIndex++].textContent = img.getAttribute('data-category');
})

ourWorksWrapper.addEventListener('click', e => {
    ourWorks.forEach(work => {
        work.classList.remove('our_works_checked');
        work.classList.add('draw_border');
        if (!!e.target) {
            e.target.classList.add('our_works_checked');
            e.target.classList.remove('draw_border')
        }
    })
    imageContainer.forEach(img => {
        img.style.display = 'none';
        if (!img.classList.contains('load1') && !img.classList.contains('load2')) filterImg(e, img);
        if (img.classList.contains('show_img_1')) filterImg(e, img);
        if (img.classList.contains('show_img_2')) filterImg(e, img);
    })
})

function filterImg(category, img) {
    if (category.target.textContent.toLowerCase() === img.getAttribute('data-category').toLowerCase()) {
        img.style.display = 'block';
        loadMoreBtn.hidden = true;
    }
    if (category.target.textContent === 'All') {
        img.style.display = 'block';
        loadMoreBtn.hidden = false;
    }
}

//icons click

imageContainer.forEach(img => img.classList.add('popup_img'))
ourWorksImgWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('circle_full') && popupClick) {
        popupImage.style.backgroundImage = `url("${e.target.closest('.popup_img').children[0].getAttribute('src')}")`;
        popupImage.style.height = `${e.target.closest('.popup_img').offsetHeight * 3 + 'px'}`;
        popupImage.style.width = `${e.target.closest('.popup_img').offsetWidth * 3 + 'px'}`;
        openPopup();
    }
    if (e.target.classList.contains('circle_empty')) {
        let copyText = e.target.closest('.popup_img').children[0].getAttribute('src');
        copyLink(e, copyText);
    }
})

function copyLink (elem, copyText) {
    try {
        window.navigator.clipboard.writeText(copyText);
    } catch (e) {
        console.log(e);
    }
    setTimeout(() => {
        elem.target.classList.add('notification-link');
        document.querySelector('.notification-link').style.opacity = '1';
    }, 250)
    setTimeout(() => {
        elem.target.classList.remove('notification-link');
    }, 1500)
}