// Slick Slider settings
$(document).ready(function () {
  const slides = [...document.querySelectorAll(".fade > div")];
  gsap.from(".title", {
    x: -300,
    duration: 1,
  });
  gsap.from(".description", {
    x: 300,
    duration: 1,
  });
  gsap.from(".slider-cta-btn", {
    opacity: 0,
    scale: 0,
    x: -100,
    duration: 0.5,
    delay: 0.5,
  });

  let i = 0;
  let speed = 150;
  let title = slides[0].querySelector(".title").children[0].innerHTML;
  slides[0].querySelector(".title").children[0].innerHTML = "";
  function typeWriter() {
    if (i < title.length) {
      slides[0].querySelector(".title").children[0].innerHTML +=
        title.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
  // console.log(slides[0].children[0].children[0].children[0])

  $(".fade")
    .slick({
      infinite: true,
      speed: 500,
      cssEase: "linear",
      fade: true,
      dots: false,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      gsap.from(".title", {
        x: -300,
        duration: 1,
      });
      gsap.from(".description", {
        x: 300,
        duration: 1,
      });
      gsap.from(".slider-cta-btn", {
        opacity: 0,
        scale: 0,
        x: -100,
        duration: 0.5,
        delay: 0.5,
      });
      
      const headerColors = [
        "#ffc100",
        "#ff9a00",
        "#ff7400",
        "#ff4d00",
        "#ff0000",
        "#a16207",
        "#854d0e",
      ];
      document
        .querySelector(":root")
        .style.setProperty("--header-bg-color", headerColors[nextSlide]);
      let title =
        slides[nextSlide].querySelector(".title").children[0].innerHTML;
      slides[nextSlide].querySelector(".title").children[0].innerHTML = "";
      let i = 0;
      let speed = 150;
      function typeWriter() {
        if (i < title.length) {
          slides[nextSlide].querySelector(".title").children[0].innerHTML +=
            title.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }

      setTimeout(typeWriter, 500);

      

      
    });
    $(".counter").counterUp({ time: 2000 });
});

const openSmMenu = () => {
  document.getElementById("menu").classList.remove("-translate-x-full");
  document.getElementById("menu").classList.add("translate-x-0");
  // animations
  gsap.from(".sm-menu-link", {
    opacity: 0,
    y: 100,
    duration: 0.3,
    ease: "back.inOut",
    stagger: "0.2",
  });
  //
  gsap.from(".sm-logo", {
    opacity: 0,
    scale: 0,
    x: -100,
    duration: 0.5,
    delay: 0.5,
    ease: "back.inOut",
  });

  //
  gsap.from(".sm-cta-btn", {
    opacity: 0,
    scale: 0,
    x: -100,
    duration: 0.5,
    delay: 0.5,
    ease: "back.inOut",
    stagger: 0.2,
  });
};
const closeSmMenu = () => {
  document.getElementById("menu").classList.add("-translate-x-full");
  document.getElementById("menu").classList.remove("translate-x-0");
};
openMenu = () => {
  document
    .getElementById("menu-hoverly")
    .classList.remove("bg-gray-800/0","pointer-events-none");
  document
    .getElementById("menu-hoverly")
    .classList.add("bg-gray-800/70", "pointer-events-auto");
  document.getElementById("md-menu").classList.remove("-translate-x-full");
  document.getElementById("md-menu").classList.add("translate-x-0");

  // animations
  gsap.from(".md-menu-link", {
    opacity: 0,
    y: 100,
    duration: 0.3,
    ease: "back.inOut",
    stagger: "0.2",
  });
  //
  gsap.from(".md-logo", {
    opacity: 0,
    scale: 0,
    x: -100,
    duration: 0.5,
    delay: 0.5,
    ease: "back.inOut",
  });

  //
  gsap.from(".md-cta-btn", {
    opacity: 0,
    scale: 0,
    x: -100,
    duration: 0.5,
    delay: 0.5,
    ease: "back.inOut",
    stagger: 0.2,
  });
};
closeMenu = () => {
  document
    .getElementById("menu-hoverly")
    .classList.add("bg-gray-800/0", "pointer-events-none");
  document
    .getElementById("menu-hoverly")
    .classList.remove("bg-gray-800/70", "pointer-events-auto");
  document.getElementById("md-menu").classList.add("-translate-x-full");
  document.getElementById("md-menu").classList.remove("translate-x-full");
};

// stick header to top
document.onscroll = () => {
  let header = document.querySelector('.stiky-header');
  let headerParent = document.querySelector('.header-parent');
  let body = document.querySelector('body');
  if (window.scrollY > headerParent.offsetTop) {
    header.classList.remove("p-4", "md:p-6")
    header.classList.add("fixed", "top-0", "shadow-lg", "z-10")
    body.style.paddingTop = header.offsetHeight + "px";
  } else {
    header.classList.add("p-4", "md:p-6")
    header.classList.remove("fixed", "top-0", "shadow-lg", "z-10")
    body.style.paddingTop = 0
  }
  
};

// Footer Year set
document.querySelector('.footer-year').innerHTML = new Date().getFullYear();
// 

// Flip cards
function flipCard(index) {
  const cards = document.querySelectorAll(".flip-card");
  let inner = cards[index].querySelector(".flip-card-inner");
  inner.style.transform = "rotateY(180deg)";
}

function flipCardBack(index) {
  const cards = document.querySelectorAll(".flip-card");
  let inner = cards[index].querySelector(".flip-card-inner");
  inner.style.transform = "rotateY(0deg)";
}
// Flip cards end

// Smoth scrolling
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", function () {
  // scroll plugin
  gsap.registerPlugin(ScrollTrigger);

  // make animations
  const fadeInLeftElems = gsap.utils.toArray(".fadeInLeft");
  fadeInLeftElems.forEach((elem) => {
    gsap.from(elem, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart none none none",
      },
    });
  });

  //
  const fadeInRightElems = gsap.utils.toArray(".fadeInRight");
  fadeInRightElems.forEach((elem) => {
    gsap.from(elem, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart none none none",
      },
    });
  });

  //
  const fadeInUpElems = gsap.utils.toArray(".fadeInUp");
  fadeInUpElems.forEach((elem) => {
    gsap.from(elem, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart none none none",
      },
    });
  });

  //
  const fadeInDownElems = gsap.utils.toArray(".fadeInDown");
  fadeInDownElems.forEach((elem) => {
    gsap.from(elem, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart none none none",
      },
    });
  });

  //
  const scaleUpElems = gsap.utils.toArray(".scaleUp");
  scaleUpElems.forEach((elem) => {
    gsap.from(elem, {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart none none none",
      },
    });
  });

  //
  const scaleDownElems = gsap.utils.toArray(".scaleDown");
  scaleDownElems.forEach((elem) => {
    gsap.from(elem, {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart none none none",
      },
    });
  });

  gsap.from(".flip-card", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.inOut",
    stagger: "0.5",
    scrollTrigger: {
      trigger: ".flip-card",
      toggleActions: "restart none none none",
    },
  });


  gsap.from(".logo", {
    scale: 0,
    x: -100,
    duration: 0.5,
    ease: "back.inOut",
    stagger: "0.2",
  });
  gsap.from(".menu-link", {
    opacity: 0,
    y: 100,
    duration: 0.3,
    ease: "back.inOut",
    stagger: "0.2",
  });

  gsap.from(".feature", {
    opacity: 0,
    y: 100,
    duration: 0.3,
    ease: "back.inOut",
    stagger: "0.2",
    scrollTrigger: {
      trigger: ".feature",
      toggleActions: "restart none none none",
    }
  });

  //
  gsap.from(".cta-btn", {
    opacity: 0,
    scale: 0,
    x: -100,
    duration: 0.5,
    delay: 0.5,
    ease: "back.inOut",
    stagger: 0.2,
  });

  // linegrow animations
  gsap.from(".line", {
    scrollTrigger: {
      trigger: ".line",
      scrub: true,
      start: "top center",
      end: "+=1000"
    },
    markers: true,
    scaleY: 0,
    ease: "none"
  });

  // 
  const label1 = gsap.utils.selector('[data-label="1"]')
  const div1 = label1('div');
  const p1 = label1('p');
  gsap.to(div1, {
    scrollTrigger: {
      trigger: div1,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: '#f97316',
    ease: "none"
  });
  gsap.to(p1, {
    scrollTrigger: {
      trigger: p1,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: 'white',
    ease: "none"
  });
  // 
  const label2 = gsap.utils.selector('[data-label="2"]')
  const div2 = label2('div');
  const p2 = label2('p');
  gsap.to(div2, {
    scrollTrigger: {
      trigger: div2,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: '#f97316',
    ease: "none"
  });
  gsap.to(p2, {
    scrollTrigger: {
      trigger: p2,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: 'white',
    ease: "none"
  });
  // 
  const label3 = gsap.utils.selector('[data-label="3"]')
  const div3 = label3('div');
  const p3 = label3('p');
  gsap.to(div3, {
    scrollTrigger: {
      trigger: div3,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: '#f97316',
    ease: "none"
  });
  gsap.to(p3, {
    scrollTrigger: {
      trigger: p3,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: 'white',
    ease: "none"
  });
  // 
  const label4 = gsap.utils.selector('[data-label="4"]')
  const div4 = label4('div');
  const p4 = label4('p');
  gsap.to(div4, {
    scrollTrigger: {
      trigger: div4,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: '#f97316',
    ease: "none"
  });
  gsap.to(p4, {
    scrollTrigger: {
      trigger: p4,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: 'white',
    ease: "none"
  });

  // linegrow animations end
});



