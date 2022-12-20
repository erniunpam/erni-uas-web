const nav = document.querySelector(".menu-links");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

const openNavMenu = () => {
  menuIcon.addEventListener("click", () => {
    nav.classList.add("menu-links-active");
    closeIcon.classList.add("close-icon-active");
    menuIcon.classList.add("menu-icon-none");
  });
};

const closeNavMenu = () => {
  const links = document.querySelectorAll(".menu-links a");

  //Close Nav When Click Links
  for (const link of links) {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-links-active");
      closeIcon.classList.remove("close-icon-active");
      menuIcon.classList.remove("menu-icon-none");
    });
  }

  //Close Nav When Scroll
  let initalPosition = window.pageYOffset;
  onscroll = () => {
    let currentPosition = window.pageYOffset;
    if (initalPosition != currentPosition) {
      nav.classList.remove("menu-links-active");
      closeIcon.classList.remove("close-icon-active");
      menuIcon.classList.remove("menu-icon-none");
    }
    initalPosition = currentPosition;
  };

  closeIcon.addEventListener("click", () => {
    nav.classList.remove("menu-links-active");
    closeIcon.classList.remove("close-icon-active");
    menuIcon.classList.remove("menu-icon-none");
  });
};

openNavMenu();
closeNavMenu();
