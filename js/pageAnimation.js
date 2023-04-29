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
const animateItems = document.querySelectorAll('.animate_items');

window.addEventListener('scroll', animateScroll)

function animateScroll() {
    animateItems.forEach(item => {
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
    })
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


