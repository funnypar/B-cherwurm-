navBtn = document.querySelector("#navBtn");
navBox = document.querySelector(".navBox");
cards = document.querySelector("#cards");

navBtn.addEventListener("click", (e) => {
  navBox.classList.toggle("hidden");
  if (!navBox.classList.contains("hidden")) {
    cards.classList.add("ml-64");
  }
  if (navBox.classList.contains("hidden")) {
    cards.classList.remove("ml-64");
  }
});
