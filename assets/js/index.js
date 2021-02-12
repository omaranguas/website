import { activeLink, hideScrollButtonAndHeader } from './scroll.js';
import { scrollReveal } from './scroll_reveal.js';
import changeTheme from './theme_dark.js';
import menuToggle from './toggle_menu.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  menuToggle('nav-menu', 'nav-toggle');
  activeLink();
  hideScrollButtonAndHeader('scroll-top')
  scrollReveal;
});

changeTheme();