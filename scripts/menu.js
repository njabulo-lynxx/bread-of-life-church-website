const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("show");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("show");
  });
});