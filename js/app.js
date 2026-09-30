(function () {
  const plus = document.querySelector(".plus-btn");
  const overlay = document.querySelector(".nav-overlay");
  if (plus && overlay) {
    plus.addEventListener("click", () => {
      const open = overlay.classList.toggle("show");
      plus.classList.toggle("open", open);
      plus.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    overlay.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        overlay.classList.remove("show");
        plus.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("show")) plus.click();
    });
  }
  const lines = [
    "Matthew zet vandaag de koffie",
    "Emiel zet vandaag de koffie",
    "Ronald zet het bier koud",
    "Bart haalt de croissants",
    "Rinske zet de plotter aan",
    "Melissa checkt de drukproef",
  ];
  const coffee = document.querySelector("[data-coffee]");
  if (coffee) {
    const i = Math.floor(Date.now() / 86400000) % lines.length;
    coffee.textContent = lines[i];
  }
  const cookie = document.querySelector(".cookie");
  const ok = document.querySelector("[data-cookie-ok]");
  if (cookie && ok) {
    if (localStorage.getItem("bb-cookie") === "1") cookie.remove();
    ok.addEventListener("click", () => {
      localStorage.setItem("bb-cookie", "1");
      cookie.remove();
    });
  }
  const form = document.querySelector("form[data-contact]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const box = form.querySelector("[data-form-status]");
      box.hidden = false;
      box.textContent = "Bedankt. Dit is een clone — er wordt niets verstuurd naar BenedenBoven.";
      form.reset();
    });
  }
})();
