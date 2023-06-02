const burgerMenu = document.querySelector('#menu-burger');
const burgerContent = document.querySelector('.burger-content');

export const openingBurger = () => {
    burgerMenu.addEventListener('click', (e) => {
        e.preventDefault();
        burgerAnim('opening');
        closingBurger();
    });
};

const closingBurger = () => {
    burgerMenu.addEventListener('click', (e) => {
        e.preventDefault();
        burgerAnim('closing');
        openingBurger();
    })
};

const burgerAnim = (state) => {
    const content = document.querySelector('.burger-content');
    if (state === 'opening') {
        burgerMenu.classList.add('open');
        content.classList.add('open');
    }
    if (state === 'closing') {
        burgerMenu.classList.remove('open');
        content.classList.remove('open');

    }
};
