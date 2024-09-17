const tabItem = document.querySelectorAll(".tabs-btn-item");
const tabContent = document.querySelectorAll(".tabs-content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(e) {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs-btn-item--active");
  });

  tabTarget.classList.add("tabs-btn-item--active");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs-content-item--active");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("tabs-content-item--active");
}

const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menu-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu-list--active");
});

//  ======= contacts page

const logregBox = document.querySelector(".logreg-box");

const loginLink = document.querySelector(".login-link");

const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
  logregBox.classList.remove("active");
});

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});
