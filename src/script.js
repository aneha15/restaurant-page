import './style.css';

import homepage from './home.js';
import menupage from './menu.js';
import aboutpage from './about.js';

const tabSwitch = function () {
    const content = document.querySelector('#content');

    const pages = {
        hometab: homepage,
        menutab: menupage,
        abouttab: aboutpage,
    }

    homepage();

    Object.keys(pages).forEach(key => {
        const page = document.getElementById(key);
        page.addEventListener('click', () => {
            content.textContent = '';
            pages[key]();
        });
    });

};


tabSwitch();