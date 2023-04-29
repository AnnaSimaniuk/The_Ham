'use strict';

import {load} from "./ourAmazingWork.js";
import {openPopup, popupClick, popupImage} from "./modalWindow.js";

export const galleryWrapper = document.querySelector('.gallery_wrapper');
const imgLinks = ['img/gallery/vanglo-house-1.png', 'img/gallery/skyscraper.png', 'img/gallery/interior.png',
    'img/gallery/vanglo-house-1.png', 'img/gallery/vanglo-house-2.png', 'img/gallery/interior.png',
    'img/gallery/arch.png', 'img/gallery/ringve-museum.png', 'img/gallery/vanglo-house-1.png',]

for (let i = 0; i < 9; i++) {
    galleryWrapper.insertAdjacentHTML('beforeend', '<div class="gallery_img popup_img"><div class="gallery_img_hover"><a href="#" class="dandruff"></a><a href="#" class="arrows"></a></div></div>');
}

//add classes

const galleryImg = Array.from(document.querySelectorAll('.gallery_img'));
galleryImg[2].classList.add('gallery_img__width2');
galleryImg[3].classList.add('gallery_img__width2');
galleryImg[2].classList.add('gallery_wrapper2');
galleryImg[3].classList.add('gallery_wrapper3');
galleryImg[6].classList.add('gallery_img__width2');

for (let a = 0; a < 9; a++) {
    galleryImg[a].style.backgroundImage = `url(${imgLinks[a]})`;
}
galleryImg[2].style.backgroundImage = 'none';
galleryImg[3].style.backgroundImage = 'none';


//load more gallery

const imgLinksLoadMore = ['img/gallery/house4.png', 'img/gallery/interior-decoration.png', 'img/gallery/house-style.png', 'img/gallery/interior-design.png',
    'img/gallery/house.png', 'img/gallery/interior-decor.png', 'img/gallery/house-winter.png',
    'img/gallery/interior-style.png', 'img/gallery/house-modern.png',];

for (let i = 0; i < 9; i++) {
    galleryWrapper.insertAdjacentHTML('beforeend', '<div class="gallery_img popup_img gallery_img_load_more"><div class="gallery_img_hover"><a href="#" class="dandruff"></a><a href="#" class="arrows"></a></div></div>');
}
const galleryImgLoadMore = document.querySelectorAll('.gallery_img_load_more');

for (let a = 0; a < 9; a++) {
    galleryImgLoadMore[a].style.backgroundImage = `url(${imgLinksLoadMore[a]})`;
}

let msnry = new Masonry(galleryWrapper, {
    itemSelector: '.gallery_img',
    columnWidth: '.gallery_img',
    gutter: 20,
})

const imgLinks2 = ['img/gallery/ringve-museum.png', 'img/gallery/Kids-Store-Lighting.png']
const galleryWrapper2 = document.querySelector('.gallery_wrapper2');
Array.from(galleryWrapper2.children).forEach(el => el.remove());
for (let j = 0; j < 2; j++) {
    galleryWrapper2.insertAdjacentHTML('beforeend', '<div class="gallery_img2 popup_img"><div class="gallery_img_hover"><a href="#" class="dandruff"></a><a href="#" class="arrows"></a></div></div>');
}
const galleryImg2 = Array.from(document.querySelectorAll('.gallery_img2'))
for (let b = 0; b < 2; b++) {
    galleryImg2[b].style.backgroundImage = `url(${imgLinks2[b]})`;
}
const msnry2 = new Masonry(galleryWrapper2, {
    itemSelector: '.gallery_img2',
    columnWidth: '.gallery_img2',
    gutter: 3,
})

const imgLinks3 = ['img/gallery/pool.png', 'img/gallery/Kids-Store.png', 'img/gallery/vanglo-house-2.png',
    'img/gallery/Kids-Store-Lighting.png', 'img/gallery/vanglo-house-4.png', 'img/gallery/Hourses.png',
    'img/gallery/vanglo-house-1.png', 'img/gallery/billionares.png', 'img/gallery/Brazil-staduims.png',]
const galleryWrapper3 = document.querySelector('.gallery_wrapper3');
Array.from(galleryWrapper3.children).forEach(el => el.remove());
for (let j = 0; j < 9; j++) {
    galleryWrapper3.insertAdjacentHTML('beforeend', '<div class="gallery_img3 popup_img"><div class="gallery_img_hover"><a href="#" class="dandruff"></a><a href="#" class="arrows"></a></span></div></div>');
}
const galleryImg3 = Array.from(document.querySelectorAll('.gallery_img3'));
galleryImg3[1].classList.add('gallery_img3__width2');
galleryImg3[0].classList.add('gallery_img3__width3');
galleryImg3[4].classList.add('gallery_img3__width2');
galleryImg3[3].classList.add('gallery_img3__width3');
galleryImg3[7].classList.add('gallery_img3__width2');
galleryImg3[6].classList.add('gallery_img3__width3');

for (let c = 0; c < 9; c++) {
    galleryImg3[c].style.backgroundImage = `url(${imgLinks3[c]})`;
}

const msnry3 = new Masonry(galleryWrapper3, {
    itemSelector: '.gallery_img3',
    columnWidth: '.gallery_img3',
    gutter: 3,
})

galleryWrapper3.style.top = '0';

//load more btn
const pageEightContentWrapper = document.querySelector('.page_eight_content_wrapper');
const galleryBtn = document.querySelector('.gallery_btn');
const galleryLoad = load.cloneNode(true);
galleryBtn.before(galleryLoad);

galleryBtn.addEventListener('click', () => {
    pageEightContentWrapper.style.marginBottom = '0';
    galleryBtn.style.display = 'none';
    galleryLoad.style.display = 'block';
    setTimeout(() => {
        galleryImgLoadMore.forEach(img => {
            img.style.display = 'block';
        });
        galleryLoad.style.display = 'none';
        pageEightContentWrapper.style.marginBottom = '82px';
        msnry = new Masonry(galleryWrapper, {
            itemSelector: '.gallery_img',
            columnWidth: '.gallery_img',
            gutter: 20,
        })
    }, 3000)
})

//search icon
galleryWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('dandruff')) {
        e.target.setAttribute('target', 'blank')
        e.target.setAttribute('href', `https://www.google.com/search?q=${e.target.closest('.popup_img').style.backgroundImage.slice(17).replace(/.png"\)/g, '')}&sxsrf=ALiCzsb4rCsCQhDjLjJQ3Ox6AD3oIlol1g:1671364423192&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjK7e_VjYP8AhWcAjQIHYR2AW8Q_AUoAnoECAIQBA&cshid=1671364486459127&biw=1366&bih=657&dpr=1`);
    }
})

//arrows icon (modal window)

galleryWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('arrows') && popupClick) {
        e.preventDefault();
        popupImage.style.backgroundImage = e.target.closest('.popup_img').style.backgroundImage;
        popupImage.style.height = `${e.target.closest('.popup_img').offsetHeight * 2 + 'px'}`;
        popupImage.style.width = `${e.target.closest('.popup_img').offsetWidth * 2 + 'px'}`;
        if (e.target.closest('.gallery_img2')) {
            popupImage.style.height = `${e.target.closest('.popup_img').offsetHeight * 4 + 'px'}`;
            popupImage.style.width = `${e.target.closest('.popup_img').offsetWidth * 4 + 'px'}`;
        }
        if (e.target.closest('.gallery_img3')) {
            popupImage.style.height = `${e.target.closest('.popup_img').offsetHeight * 6 + 'px'}`;
            popupImage.style.width = `${e.target.closest('.popup_img').offsetWidth * 6 + 'px'}`;
        }
        openPopup();
    }
})