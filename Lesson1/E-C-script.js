// document.addEventListener('DOMContentLoaded', () => {
//   const menuIcon = document.querySelector('#mobile .bx-menu');
//   const closeIcon = document.querySelector('#navbar #close');
//   const navbar = document.querySelector('#navbar');

//   menuIcon.addEventListener('click', () => {
//     navbar.style.right = '0px';
//   });

//   closeIcon.addEventListener('click', () => {
//     navbar.style.right = '-300px';
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('#mobile .men');
  const closeIcon = document.querySelector('#navbar #close');
  const navbar = document.querySelector('#navbar');

  menuIcon.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });

  closeIcon.addEventListener('click', function () {
    navbar.classList.remove('active');
  });
});

