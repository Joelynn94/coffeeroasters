const menuBtn = document.querySelector(".nav__mobile-btn");
const navMenu = document.querySelector(".nav__mobile-menu");
const toggleBtnImg = document.querySelector("#toggleBtnImg");

function toggleMenuBtn() {
  // toggle the class "close"
  navMenu.classList.toggle("close");
  // change image 
  if (toggleBtnImg.src.match("./assets/shared/mobile/icon-hamburger.svg")) {
    toggleBtnImg.src = "./assets/shared/mobile/icon-close.svg";
  } else if (toggleBtnImg.src.match("./assets/shared/mobile/icon-close.svg")) {
    toggleBtnImg.src = "./assets/shared/mobile/icon-hamburger.svg";
  }
}

menuBtn.addEventListener("click", toggleMenuBtn);