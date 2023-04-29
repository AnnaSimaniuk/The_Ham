'use strict';

//navbar
const search = document.querySelector('.search');
const searchClose = document.querySelector('.search_close');
const searchInput = document.querySelector('.search_input');
const searchWrapper = document.querySelector('.search-wrapper');
search.addEventListener('click', () => searchWrapper.classList.add('active'));
searchClose.addEventListener('click', () => {
    searchInput.value = '';
    searchWrapper.classList.remove('active')
});