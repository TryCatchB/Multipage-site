// Selectors
const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu__list");

function toggleClass({ items, className, addClass }) {
  items.forEach((item) => {
    item.classList[addClass ? "add" : "remove"](className);
  });
}

function creatingData(items, className, addClass) {
  return {
    items,
    className,
    addClass,
  };
}

// Event delegation for tabs
document.querySelector(".tabs")?.addEventListener("click", (event) => {
  const tabTarget = event.target.closest(".tabs__btn-item");
  if (tabTarget) {
    const button = tabTarget.dataset.button;

    const tabsBtnData = creatingData(tabItem, "tabs__btn-item_active", false);
    toggleClass(tabsBtnData);
    tabTarget.classList.add("tabs__btn-item_active");

    const tabsContentData = creatingData(
      tabContent,
      "tabs__content-item_active",
      false
    );
    toggleClass(tabsContentData);
    document
      .querySelector(`#${button}`)
      ?.classList.add("tabs__content-item_active");
  }
});

// Menu button functionality
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list_active");
});
