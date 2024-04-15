// stick header to top
document.onscroll = () => {
  let header = document.querySelector(".sticky-header");
  let menuLink = document.querySelectorAll(".menu-link");
  let logo = document.querySelector("#main-logo");
  let activeLink = document.querySelector(".menu-link.active");
  let headerParent = document.querySelector(".header-parent");
  let body = document.querySelector("body");
  if (window.scrollY > headerParent.offsetTop) {
    header.classList.remove("py-4", "bg-white");
    header.classList.add(
      "fixed",
      "top-0",
      "shadow-lg",
      "z-10",
      "py-2",
      "bg-orange-500"
    );
    [...menuLink].map((item) => {
      item.style.setProperty("--priamry", "white");
    });
    body.style.paddingTop = header.offsetHeight + "px";
   
    logo.src = "../assets/images/logo_light.png";
  } else {
    header.classList.add("py-4", "bg-white");
    header.classList.remove(
      "fixed",
      "top-0",
      "shadow-lg",
      "z-10",
      "py-2",
      "bg-orange-500"
    );
    [...menuLink].map((item) => {
      item.style.setProperty("--priamry", "#f97316");
    });
    activeLink?.style?.setProperty("--priamry", "#f97316");
    body.style.paddingTop = 0;
    logo.src = "../assets/images/logo.webp";
  }
};