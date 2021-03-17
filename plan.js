const options = document.getElementsByClassName("options");
const trigger = document.querySelector("[data-open]");
const modal = document.querySelector(".modal");
const planItems = document.getElementsByClassName("plan__item")

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
const coffeePrice = document.querySelectorAll("[data-price]");

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

loopOptionDivs()

function callLoopRadioBtns() {
  loopRadioBtns(preferences, dataPreference);
  loopRadioBtns(beanType, dataBean);
  loopRadioBtns(quantity, dataQuantity);
  loopRadioBtns(grind, dataGrind);
  loopRadioBtns(deliveries, dataDelivery);
}

callLoopRadioBtns();


function getFromLocalStorage() {
  // turn the userOptions back into an object 
  const userOptionsObj = JSON.parse(localStorage.getItem("userOptions"));

  // If userOptions were retrieved from localsotrage, update the userOptions object to it
  if (userOptionsObj !== null) {
    userOptions = userOptionsObj;
  }
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



for(let i = 0; i < planItems.length; i++) {
  const element = planItems[i];
  element.addEventListener("click", () => {
    const current = document.getElementsByClassName("active")
    
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("plan__item active", "plan__item");
    }

    // Add the active class to the current/clicked li
    element.classList.toggle("active")
    console.log(current)
  })
}

function toggleModal() {
  const { userPreference, userBeanType, userQuantity, userGrindOption, userDelivery, userCost } = userOptions

  modal.classList.toggle("is-visible");

  if (modal.classList.contains("is-visible")) {
    getFromLocalStorage();
    modalDataPreference.textContent = userPreference
    modalDataBean.textContent = userBeanType
    modalDataQuantity.textContent = userQuantity
    modalDataGrind.textContent = userGrindOption    
    modalDataDelivery.textContent = userDelivery
    checkoutPrice.textContent = userCost;
    checkoutModalPrice.textContent = userCost;
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