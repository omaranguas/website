const d = document,
    w = window;

/* <<<<< ACTIVE LINK >>>>> */
export function activeLink() {
    w.addEventListener('scroll', (e) => {
        const sections = d.querySelectorAll('section[id]');
        let scrollY = w.pageYOffset;

        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight,
                sectionTop = section.offsetTop - 50,
                sectionId = section.getAttribute('id');

            (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
                ? d.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                : document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        });
    });
}

/* <<<<< SCROLL >>>>> */
export const hideScrollButtonAndHeader = (scroll) => {
    const $scroll = d.getElementById(scroll),
        $nav = d.getElementById('header');

    w.addEventListener('scroll', () => {
        let scroll = w.pageYOffset;

        scroll >= 600
            ? $scroll.classList.add('visible')
            : $scroll.classList.remove('visible');

        scroll >= 200
            ? $nav.classList.add('scroll-header')
            : $nav.classList.remove('scroll-header');

        $scroll.addEventListener('click', () => {
            w.scrollTo({ behavior: 'smooth', top: 0 });
        });
    });
};

/* <<<<< ACTIVE LINK WITH INTERSECTION OBSERVER >>>>> */
/* const activeSection = () => {
    const $sections = d.querySelectorAll('section[data-scroll-spy]');

    const cb = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');

            (entry.isIntersecting)
                ? d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active-link')
                : d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active-link');
        });
    }

    const observer = new IntersectionObserver(cb, { threshold: [0.50, 0.75] });
    $sections.forEach(el => observer.observe(el));
} */