let menu = document.querySelector(".menu-bar");
let closeBar = document.querySelector(".close-menu");
let backdrop = document.querySelector(".back-drop");

menu.addEventListener("click", (e) => {
  document.body.classList.add("lock");
  backdrop.style.display = "block";
  backdrop.classList.add("show");
});
closeBar.addEventListener("click", (e) => {
  document.body.classList.remove("lock");
  backdrop.style.display = "none";
  backdrop.classList.remove("show");
});
