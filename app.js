// toogle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let Navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  Navbar.classList.toggle("active");
};

// scroll active links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toogle icon and navbar when scrolling
  menuIcon.classList.remove("fa-x");
  Navbar.classList.remove("active");
};

// scroll reveal

//skrip utk membuat animasi website ketika ditampilkan
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 3000,
  delay: 300,
});

ScrollReveal().reveal(".home-content, .heading", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

// typed js

//skrip utk membuat tulisan berjalan maju dan mundur
const typed = new Typed(".multiple-text", {
  strings: ["Junior Software Engineer", "Blogger", "Gamer"],
  typeSpeed: 100,
  backSpeed: 100,
  delaySpeed: 1000,
  loop: true,
});
