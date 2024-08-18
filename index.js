const menuToggle = document.querySelector(".menu-toggle");
const mainGrid = document.querySelector(".main-grid");
const listText = document.querySelectorAll(".primary-nav >ul ");

menuToggle.addEventListener("click", () => {
  mainGrid.toggleAttribute("data-big-nav-open");
  const menuState = menuToggle.getAttribute("aria-expanded");
  listText.forEach((data) => {
    data.style.color = menuState == "false" ? "white" : "black";
  });
  if (menuState == "false") {
    menuToggle.setAttribute("aria-expanded", true);
  } else {
    menuToggle.setAttribute("aria-expanded", false);
  }
});
