'use strict';

const feedbackSlider = document.querySelector('.feedback_slider');

const feedbackSliderData = [
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad autem cupiditate debitis ea esse hic illoiste, labore laborum magnam minus mollitia nihil nulla obcaecati quos rem ullam, unde vero voluptate. Animidolore explicabo incidunt itaque nisi odio porro ratione repellat sapiente voluptas.',
        author: 'Angelina Jolie',
        position: 'Frontend Developer',
        photo: 'img/what people say/photo1.png',
    },
    {
        content: 'Accusamus atqueconsectetur culpa dignissimos dolor dolorem dolores eaque enim esse facilis fugiat fugit illo impedit inincidunt ipsa labore maxime mollitia natus nesciunt, nihil numquam possimus provident quam quas quasi quiquidem rem similique sint suscipit velit voluptas voluptatibus?',
        author: 'Brad Pitt',
        position: 'Project Manager',
        photo: 'img/what people say/photo2.png',
    },
    {
        content: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quismassa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        author: 'Hasan Ali',
        position: 'UX Designer',
        photo: 'img/what people say/photo3.png',
    },
    {
        content: 'Cum ea et excepturi inventore ipsam iure namreprehenderit repudiandae veniam voluptatem! Asperiores consequuntur, dolore facere maiores nihil quosrecusandae saepe tempora voluptatum.',
        author: 'Demi Moore',
        position: 'Recruiter',
        photo: 'img/what people say/photo4.png',
    },];

let step = 0;

//feedback heads

const feedbackHeadsWrapper = document.querySelector('.feedback_headers_wrapper');

feedbackSliderData.forEach(obj => feedbackHeadsWrapper.insertAdjacentHTML('beforeend', `<img class="feedback_head" src="${obj.photo}" alt="photo">`))

const feedbackHead = Array.from(document.querySelectorAll('.feedback_head'));
let numberOfHead = 0;

feedbackHead.forEach(head => {
    head.setAttribute('data-number', `${numberOfHead}`);
    numberOfHead++;
})

//draw slide

function draw(transform) {
    if (step > 3) {
        step = 0;
    }
    if (step < 0) {
        step = 3;
    }

    let feedbackSlideWrapper = document.createElement('div');
    feedbackSlideWrapper.classList.add('feedback_slide_wrapper');
    feedbackSlideWrapper.insertAdjacentHTML('beforeend', `<div class="quotes"></div>
                            <p class="feedback_slide_content">${feedbackSliderData[step].content}</p>
                            <p class="feedback_slide_author">${feedbackSliderData[step].author}</p>
                            <p class="feedback_slide_position">${feedbackSliderData[step].position}</p>
                            <img class="feedback_slide_photo" src="${feedbackSliderData[step].photo}" alt="photo">`);
    feedbackSlideWrapper.style.transform = `translateX(${transform + 'px'})`;
    feedbackSlider.append(feedbackSlideWrapper);
    feedbackHead.forEach(head => head.classList.remove('checked_head'));
    feedbackHead[step].classList.add('checked_head');

    setTimeout(() => {
        feedbackSlideWrapper.style.transform = 'translateX(0)';
    }, 500);

    setTimeout(() => {
        Array.from(feedbackSlideWrapper.children).forEach((el, ind) => {
            ind === 4 ? drop(el) : appeared(el);
        })
    }, 1200)
}

draw();

//btn click next

const feedbackBtnNext = document.querySelector('.feedback_btn_next');

function left() {
    feedbackBtnNext.removeEventListener('click', left);
    feedbackBtnNext.classList.add('rotation');

    let slides2 = document.querySelectorAll('.feedback_slide_wrapper')[0];
    Array.from(slides2.children).forEach((el, ind) => {
        ind === 4 ? rise(el) : disappeared(el);
    })

    setTimeout(()=>{
        step++;
        draw(1600);
    },250)

    setTimeout(() => {
        slides2.style.transform = 'translateX(-1600px)';
    }, 500)

    setTimeout(function () {
        slides2.remove();
        feedbackBtnNext.classList.remove('rotation')
        feedbackBtnNext.addEventListener("click", left);
    }, 1000)
}

feedbackBtnNext.addEventListener("click", left);

//btn click previous

const feedbackBtnPrevious = document.querySelector('.feedback_btn_previous');

function right() {
    feedbackBtnPrevious.removeEventListener('click', right);
    feedbackBtnPrevious.classList.add('rotation');

    let slides2 = document.querySelectorAll('.feedback_slide_wrapper')[0];
    Array.from(slides2.children).forEach((el, ind) => {
        ind === 4 ? rise(el) : disappeared(el);
    })

    setTimeout(()=>{
        step--;
        draw(-1600);
    },250)

    setTimeout(() => {
        slides2.style.transform = 'translateX(1600px)';
    }, 500)

    setTimeout(function () {
        slides2.remove();
        feedbackBtnPrevious.classList.remove('rotation');
        feedbackBtnPrevious.addEventListener("click", right);
    }, 1000)
}

feedbackBtnPrevious.addEventListener("click", right);

//heads click

feedbackHeadsWrapper.addEventListener('click', e => {

    let slides2 = document.querySelectorAll('.feedback_slide_wrapper')[0];
    Array.from(slides2.children).forEach((el, ind) => {
        ind === 4 ? rise(el) : disappeared(el);
    })

    setTimeout(()=>{
        step = Number(e.target.getAttribute('data-number'));
        draw(1600);
    },250)

    setTimeout(() => {
        slides2.style.transform = 'translateX(-1600px)';
    }, 500)

    setTimeout(function () {
        slides2.remove();
    }, 1000)
});

//decoration function

function disappeared(element) {
    element.style.transition = '0.5s';
    element.style.transform = 'translateY(-20px)';
    element.style.opacity = '0';
}

function rise(element) {
    element.style.transition = '0.5s';
    element.style.transform = 'translateY(-150px)';
}

function appeared(element) {
    element.style.transition = '0.25s';
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '1';
}

function drop(element) {
    element.style.transition = '0.25s';
    element.style.transform = 'translateY(0)';
}
