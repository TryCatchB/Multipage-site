const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach((element) => {
  element.addEventListener("click", open);
});

function open(event) {
  const tabTarget = event.target;
  const button = tabTarget.dataset.button;

  removeClass(tabItem, "tabs__btn-item_active");

  tabTarget.classList.add("tabs__btn-item_active");

  removeClass(tabContent, "tabs__content-item_active");

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item_active");
}

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list_active");
});

function removeClass(listItems, className) {
  listItems.forEach((item) => {
    if (item.classList.contains(className)) {
      item.classList.remove(className);
    }
  });
}
