const _createCloseBtn = () => {
    if (options.closible === true){
        const closeBtn = document.createElement('span');
        const cartHeader = document.querySelector('.cart__header');
        closeBtn.classList.add('cart__close');
        closeBtn.innerHTML = '&times;';
        cartHeader.appendChild(closeBtn);
    }
}

const _createModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="cart__overlay">
        <div class="cart__wrapper close">
            <div class="cart__header">
                <h1 class="cart__title">${options.title}</h1>
            </div>
            <div class="cart__goods">${options.content}</div>
            <div class="cart__button">
                <a class="cart__button-btn" style="background-color:#42cc8c">
                    ${options.btn.submit}
                </a>
                <a class="cart__button-btn" style="background-color:#666; color: #eee">
                    ${options.btn.cancel}
                </a>
            </div>
        </div>
    </div>`
    document.body.appendChild(modal);
    return modal
}

$.modal = function () {
    const ANIMATION__SPEED = 200;
    const $modal = _createModal();
    _createCloseBtn();
    let closing = false;
    const wrapper = document.querySelector('.cart__wrapper');
    wrapper.style.width = options.width + 'px';
    // Возвращаем обьект (ex. $.modal.openCart())
    return {
        // 
        openCart(){
            !closing && $modal.classList.add('open');
        },
        // 
        closeCart(){
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('close');
            setTimeout(() => {
                $modal.classList.remove('close')
                closing = false
            }, ANIMATION__SPEED);
        },
        // 
        destroy(option){
            if(option === false) return; 
            $modal.remove();
        },

        // setContent(option){

        // }
    };
}