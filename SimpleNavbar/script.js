const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".navbar-links");

navBtn.addEventListener("click", function () {
  navLinks.classList.toggle("navbar-show");
  navBtn.classList.toggle("nav-rotated");
});
