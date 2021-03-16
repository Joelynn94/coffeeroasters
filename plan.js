const options = document.getElementsByClassName("options");
const trigger = document.querySelector("[data-open]");
const modal = document.querySelector(".modal");
const coffeePrice = document.querySelectorAll("[data-price]");

// input radio names 
const preferences = document.getElementsByName("preferences");
const beanType = document.getElementsByName("beanType");
const quantity = document.getElementsByName("quantity");
const grind = document.getElementsByName("grindOption");
const deliveries = document.getElementsByName("deliveries");

// order summary span elements 
const dataPreference = document.querySelector(".jsPreference");
const dataBean = document.querySelector(".jsBean");
const dataQuantity = document.querySelector(".jsQuantity");
const dataGrind = document.querySelector(".jsGrind");
const dataDelivery = document.querySelector(".jsDelivery");

// modal span elements 
const modalDataPreference = document.querySelector(".jsModalPreference");
const modalDataBean = document.querySelector(".jsModalBean");
const modalDataQuantity = document.querySelector(".jsModalQuantity");
const modalDataGrind = document.querySelector(".jsModalGrind");
const modalDataDelivery = document.querySelector(".jsModalDelivery");
const checkoutPrice = document.querySelector("#jsCheckoutPrice");
const checkoutModalPrice = document.querySelector("#jsModalCheckoutPrice");

let userOptions = {};

// save object to local storage 
function saveToLocalStorage(obj) {
  // stringify the object to be able to save to local storage 
  const userOptionsStringify = JSON.stringify(obj);

  // save userOptions object to local storage 
  localStorage.setItem('userOptions', userOptionsStringify);
}

function renderOrderSummary(obj) {
  dataPreference.textContent = obj.userPreference;
  dataBean.textContent = obj.userBeanType;
  dataQuantity.textContent = obj.userQuantity;
  dataGrind.textContent = obj.userGrindOption;
  dataDelivery.textContent = obj.userDelivery;
}

function renderModalOrderSummary(obj) {
  modalDataPreference.textContent = obj.userPreference;
  modalDataBean.textContent = obj.userBeanType;
  modalDataQuantity.textContent = obj.userQuantity;
  modalDataGrind.textContent = obj.userGrindOption;
  modalDataDelivery.textContent = obj.userDelivery;
}

function getFromLocalStorage() {
  // turn the userOptions back into an object 
  const userOptionsObj = JSON.parse(localStorage.getItem("userOptions"));

  // If userOptions were retrieved from localsotrage, update the userOptions object to it
  if (userOptionsObj !== null) {
    userOptions = userOptionsObj;
  }

  // render the order summary
  renderOrderSummary(userOptionsObj);
  renderModalOrderSummary(userOptionsObj);
}

getFromLocalStorage();

function loopRadioBtns(arr, spanEl) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // see if an element is checked 
    if (element.checked) {
      spanEl.textContent = element.value;

      return userOptions = {
        userPreference: dataPreference.textContent,
        userBeanType: dataBean.textContent,
        userQuantity: dataQuantity.textContent,
        userGrindOption: dataGrind.textContent,
        userDelivery: dataDelivery.textContent,
        userCost: `${element.dataset.price} / mo`
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

function loopOptionDivs() {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", (e) => {
      const target = e.target;
      console.log(target);

      if (target.type === "radio") {
        callLoopRadioBtns();
      };
      saveToLocalStorage(userOptions);
      getFromLocalStorage();
    });
  }
}

loopOptionDivs();

function toggleModal() {
  modal.classList.toggle("is-visible");

  if (modal.classList.contains("is-visible")) {
    getFromLocalStorage();
    checkoutPrice.textContent = userOptions.userCost;
    checkoutModalPrice.textContent = userOptions.userCost;
  } else {
    return;
  }
}

function modalClick(e) {
  if (e.target == modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", modalClick);