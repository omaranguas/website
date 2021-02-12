export const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
});

scrollReveal.reveal(
    `.section__title, .section__subtitle,
      .home__data, .home__img, .home__social,
      .about__data, .about__img, 
      .skills__header, .skills__data, .skills__img,
      .portfolio__img,
      .education__content, .education__img,
      .contact__box, .contact__form, .button,
      .footer__container, .footer__social
      `,
    {
        interval: 200,
    }
);