
const homepage = function () {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.id = 'home';
    home.innerHTML = `<h1>Welcome to Rose Bakery</h1>
       <p class="intro">Celebrate life's sweetest moments with 
       our handcrafted bakes made with the finest quality 
       ingredients.</p>`;
    content.appendChild(home);
};

export default homepage;