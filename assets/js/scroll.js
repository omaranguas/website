const d = document,
  w = window;

/* <<<<< ACTIVE LINK >>>>> */
export const activeLink = () => {
  w.addEventListener("scroll", (e) => {
    const sections = d.querySelectorAll("section[id]");
    let scrollY = w.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 50,
        sectionId = section.getAttribute("id");

      scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
        ? d
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link")
        : d
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
    });
  });
};

/* <<<<< SCROLL >>>>> */
export const hideScrollButtonAndHeader = (scroll) => {
  const $scroll = d.getElementById(scroll),
    $nav = d.getElementById("header");

  w.addEventListener("scroll", () => {
    let scroll = w.pageYOffset;

    scroll >= 600
      ? $scroll.classList.add("visible")
      : $scroll.classList.remove("visible");

    scroll >= 200
      ? $nav.classList.add("scroll-header")
      : $nav.classList.remove("scroll-header");

    $scroll.addEventListener("click", () => {
      w.scrollTo({ behavior: "smooth", top: 0 });
    });
  });
};
