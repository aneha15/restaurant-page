const menupage = function () {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.innerHTML = `<h1>Menu</h1>
          <div class="menu-items">
        <ul>
            <h3>Slice Cakes</h3>
            <li>Chocolate salted caramel cake</li>
            <li>Blackforest cake</li>
            <li>Hazelnut brownie</li>
            <li>Blueberry cheesecake</li>
            <li>Vanilla cake</li>
        </ul>
        <ul>
            <h3>Bakery</h3>
            <li>Croissant</li>
            <li>Almond croissant</li>
            <li>Cinnamon roll</li>
            <li>Honey toast</li>
        </ul>
    </div>`;
    content.appendChild(menu);
};

export default menupage;