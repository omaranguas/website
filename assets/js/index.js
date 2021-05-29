import validateForm from "./form.js";
import { activeLink, hideScrollButtonAndHeader } from "./scroll.js";
import changeTheme from "./theme_dark.js";
import menuToggle from "./toggle_menu.js";

const d = document;

window.addEventListener("load", (e) => {
  const $loader = d.getElementById("loading");
  setTimeout(() => {
    d.body.removeChild($loader);
    d.getElementById("content").classList.remove("hidden");
  }, 1000);
});

d.addEventListener("DOMContentLoaded", (e) => {
  menuToggle("nav-menu", "nav-toggle");
  activeLink();
  hideScrollButtonAndHeader("scroll-top");
  validateForm();
});

changeTheme();