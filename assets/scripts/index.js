// initialize Animon Animation
Animon.animon();

// Slick Slider settings
$(document).ready(function () {
  var slides = $('.fade > div');

  $(".fade").slick({
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    dots: true,
    autoplay: true,
    arrows: false,
  })
  // .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  //   $(".title").removeClass("animonItem").hide();
  //   $(".description").removeClass("animonItem").hide();
  //   $(".cta-btn").removeClass("animonItem").hide();
  //   $(".slide-image").removeClass("animonItem").hide();
  //   setTimeout(() => {
  //     $('.title').addClass('animonItem').show();
  //     $('.description').addClass('animonItem').show();
  //     $('.cta-btn').addClass('animonItem').show();
  //     $('.slide-image').addClass('animonItem').show();
  //   }, 1000);
  // });
 

  $(".counter").counterUp({ time: 3000, delay: 10 });
});

const openSmMenu = () => {
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("menu").classList.add("flex");
};
const closeSmMenu = () => {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("menu").classList.remove("flex");
};
openMenu = () => {
  document.getElementById("md-menu").classList.add("md:block");
};
closeMenu = () => {
  document.getElementById("md-menu").classList.remove("md:block");
};

let slides2 = document.querySelectorAll(".slide-ana2>div");
let slideSayisi2 = slides2.length;

for (let index = 0; index < slides2.length; index++) {
  const element = slides2[index];
  element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop2 = 0 + 1000 * slideSayisi2;

function nextTest() {
  loop2++;
  for (let index = 0; index < slides2.length; index++) {
    const element = slides2[index];
    element.style.transform =
      "translateX(" + 200 * (index - (loop2 % slideSayisi2)) + "%)";
  }
}

function prevTest() {
  loop2--;
  for (let index = 0; index < slides2.length; index++) {
    const element = slides2[index];
    element.style.transform =
      "translateX(" + 200 * (index - (loop2 % slideSayisi2)) + "%)";
  }
}

// Scrolling Slides
var sliderContainer = document.getElementById("slider-container");

var nextBtn = document.getElementById("next-btn");
nextBtn.onclick = function () {
  sideScroll(sliderContainer, "right", 20, 360, 30);
};

var backBtn = document.getElementById("back-btn");
backBtn.onclick = function () {
  sideScroll(sliderContainer, "left", 20, 360, 30);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
