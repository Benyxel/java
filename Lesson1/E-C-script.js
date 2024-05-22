// E-C-script.js

document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll('.cart');

  cartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
  });

  function addToCart(event) {
      event.preventDefault();

      const product = event.target.closest('.pro');
      const productName = product.querySelector('h5').innerText;
      const productPrice = product.querySelector('h4').innerText;
      const productImage = product.querySelector('img').src;

      const cartItem = {
          name: productName,
          price: productPrice,
          image: productImage,
          quantity: 1
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      const existingItem = cart.find(item => item.name === cartItem.name);
      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push(cartItem);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      showNotification(`${productName} has been added to your cart.`);
      updateCartCount();
  }

  function showNotification(message) {
      const notification = document.createElement('div');
      notification.classList.add('notification');
      notification.innerText = message;
      document.body.appendChild(notification);
      
      setTimeout(() => {
          notification.remove();
      }, 3000);
  }

  function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
      document.querySelector('.bx-shopping-bag').dataset.count = cartCount;
  }

  updateCartCount();
});
