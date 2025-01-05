
const aboutpage = function () {
    const content = document.querySelector('#content');
    const about = document.createElement('div');
    about.id = 'about';
    about.innerHTML = `<h1>About</h1>
       <div class="about">At Rise n Shine Bakery, we create fresh, 
       handcrafted pastries and breads with the finest local 
       ingredients. From buttery croissants to rich cakes, 
       each item is made with care and passion. 
       Whether you're stopping by for a daily treat or a 
       special celebration, we're here to bring a little 
       sweetness to your day.</div>`;
    content.appendChild(about);
};

export default aboutpage;