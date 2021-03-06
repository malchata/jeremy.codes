document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navItemContainer = document.querySelector(".nav-items");

  // Navigation toggle code
  navToggle.addEventListener("click", () => {
    if (navToggle.classList.contains("open")) {
      navToggle.innerText = "Menu";
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navItemContainer.classList.remove("open");
    } else {
      navToggle.innerText = "Close";
      navToggle.classList.add("open");
      navToggle.setAttribute("aria-expanded", "true");
      navItemContainer.classList.add("open");
    }
  });
});
