import { saveAs } from "file-saver";

// SCROLLED NAVBAR
export const scrolledNavbar = (selector, classname) => {
  window.addEventListener("scroll", function (e) {
    let element = document.querySelector(`.${selector}`);
    element.classList.toggle(`${classname}`, window.scrollY > 0);
  });
};

export const downloadImage = (url) => {
  saveAs(url, "image.jpg" || "image.png");
};
