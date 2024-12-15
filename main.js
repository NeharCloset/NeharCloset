document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert('Item added to cart!');
        });
    });
});
