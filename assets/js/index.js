import validateForm from "./form.js";
import { activeLink, hideScrollButtonAndHeader } from "./scroll.js";
import changeTheme from "./theme_dark.js";
import menuToggle from "./toggle_menu.js";

const d = document;

window.addEventListener('load', (e) => {
  const $loader = d.getElementById('loading');
  setTimeout(() => {
    d.body.removeChild($loader);
    d.getElementById('content').classList.remove('hidden');
  }, 3000);

});

d.addEventListener("DOMContentLoaded", (e) => {
  menuToggle("nav-menu", "nav-toggle");
  activeLink();
  hideScrollButtonAndHeader("scroll-top");
  validateForm();

  /* const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 1000,
    reset: true,
  });

  scrollReveal.reveal(
    `.section__title, .section__subtitle,
      .home__data, .home__img, .home__social,
      .about__data, .about__img, 
      .skills__header, .skills__content,
      .portfolio__img,
      .education__content,
      .contact__box, .contact__input, .button,
      .footer__container, .footer__social
      `,
    {
      interval: 200,
    }
  ); */
});

changeTheme();