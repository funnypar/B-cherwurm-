navBtn = document.querySelector("#navBtn");
navBox = document.querySelector(".navBox");
cards = document.querySelector("#cards");

navBtn.addEventListener("click", (e) => {
  navBox.classList.toggle("hidden");
  if (navBox.classList.includes("hidden")) {
    cards.classList.remove("mx-12");
    cards.classList.add("ml-64 mr-12");
  }
});
