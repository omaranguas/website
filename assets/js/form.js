const d = document;

export default function validateForm() {
  const $form = d.querySelector(".contact__form"),
    $inputs = d.querySelectorAll(".contact__form [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    input.insertAdjacentElement("afterend", $span);
    $span.classList.add("contact__form-error", "none");
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact__form [required]")) {
      let $input = e.target,
        patter = $input.pattern || $input.dataset.pattern;

      if (patter && $input.value !== "") {
        let regex = new RegExp(patter);

        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!patter) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    const $response = d.querySelector(".contact__form-response");

    fetch("https://formsubmit.co/ajax/fcomaranguas@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : new Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText;
        $response.innerHTML = `<p>Error:${err.status}:${message}</p>`;
      })
      .finally(() => {
        setTimeout(() => {
          $response.classList.add("none");
          $response.innerHTML = "";
        }, 5000);
      });
  });
}
