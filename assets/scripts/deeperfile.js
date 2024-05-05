// stick header to top
document.onscroll = () => {
  let header = document.querySelector(".sticky-header");
  let menuLink = document.querySelectorAll(".menu-link");
  let logo = document.querySelector("#main-logo");
  let activeLink = document.querySelector(".menu-link.active");
  let headerParent = document.querySelector(".header-parent");
  let body = document.querySelector("body");
  let announcementBar = document.getElementById('announcement-bar-mobile')
  if (window.scrollY > headerParent.offsetTop) {
    header.classList.remove("pt-4", "bg-white");
    header.classList.add(
      "fixed",
      "top-0",
      "shadow-lg",
      "z-10",
      "pt-2",
      "bg-orange-500"
    );
    [...menuLink].map((item) => {
      item.style.setProperty("--priamry", "white");
    });
    body.style.paddingTop = header.offsetHeight + "px";
   
    logo.src = "../assets/images/logo_light.png";
    announcementBar.style.display = 'flex';
  } else {
    header.classList.add("pt-4", "bg-white");
    header.classList.remove(
      "fixed",
      "top-0",
      "shadow-lg",
      "z-10",
      "pt-2",
      "bg-orange-500"
    );
    [...menuLink].map((item) => {
      item.style.setProperty("--priamry", "#f97316");
    });
    activeLink?.style?.setProperty("--priamry", "#f97316");
    body.style.paddingTop = 0;
    logo.src = "../assets/images/logo.webp";
    announcementBar.style.display = 'none';
  }
};