document.addEventListener('DOMContentLoaded', (event) => {
  const mobileMenuIcon = document.getElementById('bar');
  const closeIcon = document.getElementById('close');
  const navbar = document.getElementById('navbar');
  const cartIcon = document.getElementById('lg-bag');

  mobileMenuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    cartIcon.style.display = navbar.classList.contains('active') ? 'none' : 'block';
    if (navbar.classList.contains('active')) {
      mobileMenuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      mobileMenuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });

  closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
    mobileMenuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    cartIcon.style.display = 'block'; // Show cart icon when closing navbar
  });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all add to cart buttons
    const addToCartButtons = document.querySelectorAll('.cart');

    // Define cart array to store added items
    let cart = [];

    // Add click event listener to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent default behavior of anchor tags
            event.preventDefault();

            // Get parent product container
            const productContainer = event.target.closest('.pro');

            // Extract product information
            const productName = productContainer.querySelector('h5').innerText;
            const productPrice = parseFloat(productContainer.querySelector('h4').innerText.replace('$', ''));

            // Create new item object
            const newItem = {
                name: productName,
                price: productPrice
            };

            // Add item to cart array
            cart.push(newItem);

            // Optionally, update UI (e.g., show confirmation message)
            alert(`${productName} added to cart!`);

            // You can also update the UI to display the current cart contents
            // For example, you could have a cart icon that shows the number of items in the cart
            // or display a list of items in a mini cart dropdown.
        });
    });
});
