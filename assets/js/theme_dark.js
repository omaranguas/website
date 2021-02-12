const d = document;

/* <<<<< LIGHT/DARK MODE >>>>> */
export default function changeTheme() {
    const themeButton = d.getElementById('theme-button'),
        darkTheme = 'dark-theme',
        iconTheme = 'bx-sun',
        selectedTheme = localStorage.getItem('selected-theme'),
        selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => d.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

    if (selectedTheme) {
        d.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }

    themeButton.addEventListener('click', () => {
        d.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
};