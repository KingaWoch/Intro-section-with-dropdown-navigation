const dropDowns = document.querySelectorAll(".dropdown");

dropDowns.forEach((dropDown) =>
  dropDown.addEventListener("click", () => {
    if (dropDown.classList.contains("active")) {
      dropDown.classList.toggle("active");
    } else {
      dropDowns.forEach((dropDown) => dropDown.classList.remove("active"));
      dropDown.classList.add("active");
    }
  })
);
