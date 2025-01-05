import homepic from './home.jpg';

const homepage = function () {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.id = 'home';
    home.innerHTML = `<h1>Welcome to Rise n Shine Bakery</h1>
       <p class="intro">Celebrate life's sweetest moments with 
       our handcrafted bakes.</p>`;
    const image = document.createElement('img');
    image.id = 'homepic'
    image.src = homepic;
    image.alt = 'Our bakery items';
    home.appendChild(image);
    content.appendChild(home);
};

export default homepage;