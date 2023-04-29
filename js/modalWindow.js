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