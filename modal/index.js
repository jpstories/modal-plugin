// Options
const options = {
    // 
    width: 800,
    //
    title: 'Тяните билет',
    // 
    content: `
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 1</span>
            <span>Tokyo</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 2</span>
            <span>Osaka</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 3</span>
            <span>Kyoto</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 4</span>
            <span>Yohohama</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 5</span>
            <span>Sapporo</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 6</span>
            <span>Nigata</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 7</span>
            <span>Fukuoka</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 8</span>
            <span>Nara</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 9</span>
            <span>Aomori</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 10</span>
            <span>Fukusima</span>
        </div>
        <div class="cart__goods-item vip">
            <span class="cart__goods-elem">№ 11</span>
            <span>Okinawa</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 12</span>
            <span>Fujiyama</span>
        </div>
    `,
    // 
    btn: {
        submit: 'Начать',
        cancel: 'Отмена'
    },
    // 
    closible: true,
    destroy: false
}
//----------------------
const modal = $.modal();
const cartBtn = document.querySelector('.cart');
const overlay = document.querySelector('.modal');

cartBtn.addEventListener('click', (e) => {
    modal.openCart();
});

overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart__overlay') || e.target.classList.contains('cart__close')) {
        modal.closeCart();
        modal.destroy(options.destroy);
    }
});