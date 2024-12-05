/*Navbar Section*/

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

/* Portfolio Section */
const buttons = document.querySelectorAll('#portfolio .buttons button');
const images = document.querySelectorAll('#portfolio .images > .pic');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach((btn) => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Get the category from the button's text content
        const category = button.textContent.toLowerCase();

        // Filter images based on the category
        images.forEach((image) => {
            if (category === 'all' || image.classList.contains(category)) {
                // Show matching category images
                image.classList.remove('hidden');
            } else {
                // Hide non-matching category images
                image.classList.add('hidden');
            }
        });
    });
});

/* Contact Section */
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            alert('Thank you for your message. I will get back to you soon.');
        } else {
            alert('Sorry, there was an error. Please try again later.');
        }
    };
    xhr.send(formData);
});





