document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('#mobile .bx-menu');
  const navbar = document.querySelector('#navbar');

  menuIcon.addEventListener('click', () => {
    if (navbar.style.right === '0px') {
      navbar.style.right = '-300px';
    } else {
      navbar.style.right = '0px';
    }
  });
});
