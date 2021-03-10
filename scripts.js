const menuBtn = document.querySelector(".nav__mobile-btn");
const navMenu = document.querySelector(".nav__mobile-menu");

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle("close");
});