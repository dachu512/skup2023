const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const hiddenElements = document.querySelectorAll(".hidden");
const navItem = document.querySelectorAll(".nav-item");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navlist").style.padding = "5px 0px";
  } else {
    document.getElementById("navlist").style.padding = "20px 0px";
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

hiddenElements.forEach((el) => observer.observe(el));

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
  });
});

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let vinylImage = document.getElementById("vinyl");
  vinylImage.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  let smallVinylImage = document.getElementById("small-vinyl");
  smallVinylImage.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
}
