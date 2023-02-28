const dropDowns = document.querySelectorAll(".dropdown");
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".header-menu");

dropDowns.forEach((dropDown) =>
  dropDown.addEventListener("click", () => {
    if (dropDown.classList.contains("active")) {
      dropDown.classList.toggle("active");
    } else {
      dropDown.classList.add("active");
    }
  })
);

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("open")) {
    menuBtn.classList.remove("open");
    menu.classList.remove("visible");
  } else {
    menuBtn.classList.add("open");
    menu.classList.add("visible");
  }
});
