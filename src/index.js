const navbarDefault = document.getElementById("navbar-default");
const collapseToggle = document.querySelector("[data-collapse-toggle='navbar-default']");

collapseToggle.addEventListener("click", function() {
  navbarDefault.classList.toggle("hidden");
});
