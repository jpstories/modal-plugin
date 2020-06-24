# Settings
## go to => index.js
const options = {
##    // Width (number)
    width: 800,
##    // Title (string)
    title: 'Тяните билет',
##    // Content (html/string)
    content: `
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 1</span>
            <span>Tokyo</span>
        </div>
        <div class="cart__goods-item">
            <span class="cart__goods-elem">№ 2</span>
            <span>Osaka</span>
        </div>
    `,
##    // Buttons (string)
    btn: {
        submit: 'Начать',
        cancel: 'Отмена'
    },
##    // Closible (boolean), true => the window can be closed
    closible: true,
##    // Destroy (boolean), true => Remove window after closing
    destroy: false
}
