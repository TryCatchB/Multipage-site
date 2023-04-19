const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach((element) => {
  element.addEventListener("click", open);
});

function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach((item) => item.classList.remove("tabs__btn-item_active"));
  tabTarget.classList.add("tabs__btn-item_active");

  tabContent.forEach((item) =>
    item.classList.remove("tabs__content-item_active")
  );

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item_active");
}

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list_active");
});
