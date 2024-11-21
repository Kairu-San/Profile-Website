const navbar = document.getElementById("navbar");
const heroSection = document.getElementById("hero");
const aboutSection = document.getElementById("about");
const portfolioSection = document.getElementById("portfolio");
const contactSection = document.getElementById("contact");

const homeLink = document.querySelector('.navbar ul li a[href="#hero"]');
const aboutLink = document.querySelector('.navbar ul li a[href="#about"]');
const portfolioLink = document.querySelector('.navbar ul li a[href="#portfolio"]');
const contactLink = document.querySelector('.navbar ul li a[href="#contact"]');

window.addEventListener("scroll", () => {
  // Check if sections are in view
  const heroInView = window.scrollY < heroSection.offsetHeight;
  const aboutInView = window.scrollY >= aboutSection.offsetTop - window.innerHeight / 2 && window.scrollY < aboutSection.offsetTop + aboutSection.offsetHeight;
  const portfolioInView = window.scrollY >= portfolioSection.offsetTop - window.innerHeight / 2 && window.scrollY < portfolioSection.offsetTop + portfolioSection.offsetHeight;
  const contactInView = window.scrollY >= contactSection.offsetTop - window.innerHeight / 2 && window.scrollY < contactSection.offsetTop + contactSection.offsetHeight;

  // Change navbar style based on scroll position
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Remove active class from all links
  homeLink.classList.remove("active");
  aboutLink.classList.remove("active");
  portfolioLink.classList.remove("active");
  contactLink.classList.remove("active");

  // Add active class to the current section
  if (heroInView) {
    homeLink.classList.add("active");
  } else if (aboutInView) {
    aboutLink.classList.add("active");
  } else if (portfolioInView) {
    portfolioLink.classList.add("active");
  } else if (contactInView) {
    contactLink.classList.add("active");
  }
});
