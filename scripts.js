const menuBtn = document.querySelector(".nav__mobile-btn");
const navMenu = document.querySelector(".nav__mobile-menu");
const toggleBtnImg = document.querySelector("#toggleBtnImg");
const options = document.getElementsByClassName("options");

const preferences = document.getElementsByName("preferences");
const dataPreference = document.querySelector("#jsPreference");

const beanType = document.getElementsByName("beanType");
const dataBean = document.querySelector("#jsBean");

const quantity = document.getElementsByName("quantity");
const dataQuantity = document.querySelector("#jsQuantity");

const grind = document.getElementsByName("grindOption");
const dataGrind = document.querySelector("#jsGrind");

const deliveries = document.getElementsByName("deliveries");
const dataDelivery = document.querySelector("#jsDelivery");

const trigger = document.querySelector("[data-open]");
const modal = document.querySelector(".modal");

menuBtn.addEventListener('click', () => {
  // toggle the class "close"
  navMenu.classList.toggle("close");
  // change image 
  if (toggleBtnImg.src.match("./assets/shared/mobile/icon-hamburger.svg")) {
    toggleBtnImg.src = "./assets/shared/mobile/icon-close.svg";
  } else if (toggleBtnImg.src.match("./assets/shared/mobile/icon-close.svg")) {
    toggleBtnImg.src = "./assets/shared/mobile/icon-hamburger.svg";
  }
});

function loopRadioBtns(arr, spanEl) {
  for (let i = 0; i < arr.length; i++) {
    element = arr[i];

    if (element.checked) {
      spanEl.textContent = element.value;
      console.log(element.value);
    }
  }
}

loopRadioBtns(preferences, dataPreference);
loopRadioBtns(beanType, dataBean);
loopRadioBtns(quantity, dataQuantity);
loopRadioBtns(grind, dataGrind);
loopRadioBtns(deliveries, dataDelivery);

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (e) => {
    const target = e.target;
    console.log(target);

    if (target.type === "radio") {
      loopRadioBtns(preferences, dataPreference);
      loopRadioBtns(beanType, dataBean);
      loopRadioBtns(quantity, dataQuantity);
      loopRadioBtns(grind, dataGrind);
      loopRadioBtns(deliveries, dataDelivery);
    }
  });
}

function toggleModal() {
  modal.classList.toggle("is-visible");
}

function modalClick(e) {
  if (e.target == modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", modalClick);

