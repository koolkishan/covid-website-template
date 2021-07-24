const preloader = document.querySelector(".preloader");

const bodyLoaded = () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
};

const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
  window.pageYOffset > 400
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

let navBarState = false;

const navbarToggle = document.querySelector(".responsive-toggle");

navbarToggle.addEventListener("click", () => {
  const navlinks = document.querySelector(".links");
  if (navBarState) {
    navlinks.style.top = "-40rem";
    navBarState = false;
  } else {
    navlinks.style.top = "-4rem";
    navBarState = true;
  }
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `nav,.starter,.about
  .contagion,.symptoms,
  .solutions,.map,.contact,footer,span`,
  {
    interval: 200,
  }
);
