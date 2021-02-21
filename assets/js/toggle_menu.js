const d = document;

/* <<<<< TOGGLE MENU >>>>> */
export default function menuToggle(idMenu, idToggle) {
  const $nav = d.getElementById(idMenu),
    $toggle = d.getElementById(idToggle),
    $links = d.querySelectorAll(".nav__link");

  if ($nav && $toggle)
    $toggle.addEventListener("click", (e) =>
      $nav.classList.toggle("show-menu")
    );

  $links.forEach((link) =>
    link.addEventListener("click", (e) => $nav.classList.remove("show-menu"))
  );
}
