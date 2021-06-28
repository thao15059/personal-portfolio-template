const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = Array.from(
  document.querySelectorAll(".progress-bar span")
).map((percent) => Number(percent.innerHTML));

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((currentNavbarLink) => {
        currentNavbarLink.classList.remove("change");
      });
      navbarLinks[index].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document
      .querySelectorAll(".progress-percent")
      .forEach((progress, index) => {
        progress.style.width = `${progressBarPercents[index]}%`;
        progress.previousElementSibling.firstElementChild.textContent =
          progressBarPercents[index];
      });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});
