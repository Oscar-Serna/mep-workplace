const header_items = document.querySelectorAll(".list_menu_header > li");
const header_menus = document.querySelectorAll(".list_menu_header > nav");

const menu_header_responsive = document.querySelector(".menu_responsive_icon");

function positionate_menus() {
  header_items.forEach((item) => {
    const positionX = item.getBoundingClientRect().x;
    const positionY = item.getBoundingClientRect().y;

    const height = item.getBoundingClientRect().height;

    const bottomPositionY = positionY + height;

    header_menus.forEach((menu) => {
      if (menu.id === item.id) {
        menu.style = `left: ${positionX}px; top: ${bottomPositionY}px;`;
      }
    });
  });
}

function handle_hover_menus(id) {
  header_menus.forEach((menu) => {
    if (menu.id === id) {
      if (menu.classList.contains("inactive")) {
        menu.classList.remove("inactive");
        return;
      } else {
        menu.classList.add("inactive");
      }
    }

    menu.classList.add("inactive");
  });
}

function handle_click_menu_responsive() {
  const menu = document.querySelector(".list_menu_header");

  if (menu.classList.contains("inactive")) {
    menu.classList.remove("inactive");
    return;
  }

  menu.classList.add("inactive");
}


function EventListenerDesktop() {
  header_items.forEach((item) => {
    const itemId = item.id;

    item.addEventListener("mouseenter", () => {
      handle_hover_menus(itemId);
    });

    item.addEventListener("mouseleave", () => {
      handle_hover_menus(itemId);
    });
  });

  header_menus.forEach((menu) => {
    const menuId = menu.id;

    menu.addEventListener("mouseenter", () => {
      handle_hover_menus(menuId);
    });

    menu.addEventListener("mouseleave", () => {
      handle_hover_menus(menuId);
    });
  });
}

function EventListenerResponsive() {
  header_items.forEach((item) => {
    const itemId = item.id;

    item.addEventListener("click", () => {
      handle_hover_menus(itemId);
    });
  });
}

function InitializeComponents() {
  const screen_width = window.innerWidth;

  if (screen_width > 470) {
    positionate_menus();
    EventListenerDesktop();
  } else {
    EventListenerResponsive();
  }
}

menu_header_responsive.addEventListener("click", handle_click_menu_responsive);

window.addEventListener("resize", InitializeComponents);

window.addEventListener("DOMContentLoaded", InitializeComponents);