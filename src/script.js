import './style.css';

import homepage from './home.js';
import menupage from './menu.js';
import aboutpage from './about.js';
// import load from './pageload';

const tabSwitch = function () {
    const content = document.querySelector('#content');
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');

    homepage();

    home.addEventListener('click', () => {
        content.textContent = '';
        homepage();
    });
    menu.addEventListener('click', () => {
        content.textContent = '';
        menupage();
    });

    about.addEventListener('click', () => {
        content.textContent = '';
        aboutpage();
    });
};


tabSwitch();