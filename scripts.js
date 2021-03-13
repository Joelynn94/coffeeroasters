const menuBtn = document.querySelector(".nav__mobile-btn");
const navMenu = document.querySelector(".nav__mobile-menu");
const toggleBtnImg = document.querySelector("#toggleBtnImg");
const options = document.getElementsByClassName("options");

const preferences = document.getElementsByName("preferences");
let dataPreference = document.querySelector(".jsPreference");

const beanType = document.getElementsByName("beanType");
let dataBean = document.querySelector(".jsBean");

const quantity = document.getElementsByName("quantity");
let dataQuantity = document.querySelector(".jsQuantity");

const grind = document.getElementsByName("grindOption");
let dataGrind = document.querySelector(".jsGrind");

const deliveries = document.getElementsByName("deliveries");
let dataDelivery = document.querySelector(".jsDelivery");

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

let userOptions = {};

function loopRadioBtns(arr, spanEl) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element.checked) {
      spanEl.textContent = element.value;
      console.log(element.value);
      return userOptions = {
        userPreference: dataPreference.textContent,
        userBeanType: dataBean.textContent,
        userQuantity: dataQuantity.textContent,
        userGrindOption: dataGrind.textContent,
        userDelivery: dataDelivery.textContent
      };
    }
  }
}

function callLoopRadioBtns() {
  loopRadioBtns(preferences, dataPreference);
  loopRadioBtns(beanType, dataBean);
  loopRadioBtns(quantity, dataQuantity);
  loopRadioBtns(grind, dataGrind);
  loopRadioBtns(deliveries, dataDelivery);
}

callLoopRadioBtns();

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (e) => {
    const target = e.target;
    console.log(target);

    if (target.type === "radio") {
      callLoopRadioBtns();
    };
    let userOptionsSerialized = JSON.stringify(userOptions);
    localStorage.setItem('userOptions', userOptionsSerialized);
    let userOptionsReversed = JSON.parse(localStorage.getItem("userOptions"));
    console.log(userOptionsReversed);
    userOptionsDOM(userOptionsReversed);
  });
}

function userOptionsDOM(obj) {
  dataPreference.textContent = obj.userPreference;
  dataBean.textContent = obj.userBeanType;
  dataQuantity.textContent = obj.userQuantity;
  dataGrind.textContent = obj.userGrindOption;
  dataDelivery.textContent = obj.userDelivery;
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

