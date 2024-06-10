// Slick Slider settings
$(document).ready(function () {
  const slides = [...document.querySelectorAll(".fade > div")];
  // gsap.from(".title", {
  //   x: -300,
  //   duration: 1,
  // });
  // gsap.from(".description", {
  //   x: 300,
  //   duration: 1,
  // });
  // gsap.from(".slider-cta-btn", {
  //   opacity: 0,
  //   scale: 0,
  //   x: -100,
  //   duration: 0.5,
  //   delay: 0.5,
  // });

  let i = 0;
  let speed = 150;
  let title = slides[0]?.querySelector(".title")?.children[0]?.innerHTML;
  if (title) {
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
  }

  $(".fade")
    .slick({
      infinite: true,
      speed: 500,
      cssEase: "linear",
      fade: true,
      dots: false,
      autoplay: true,
      arrows: true,
      prevArrow: $("#prevBtn"),
      nextArrow: $("#nextBtn"),
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $("#nextBtn").html(nextSlide + 2);

      // gsap.from(".title", {
      //   x: -300,
      //   duration: 1,
      // });
      // gsap.from(".description", {
      //   y: -50,
      //   opacity: 0,
      //   delay: 0.5,
      //   duration: 1,
      // });
      // gsap.from(".slider-cta-btn", {
      //   opacity: 0,
      //   y: -40,
      //   duration: 0.5,
      //   delay: 0.7,
      // });

      // const headerColors = [
      //   "#c2410c",
      //   "#4d7c0f",
      //   "#a16207",
      //   "#9333ea",
      //   "#c026d3",
      //   "#db2777",
      //   "#e11d48",
      // ];
      // document
      //   .querySelector(":root")
      //   .style.setProperty("--header-bg-color", headerColors[nextSlide]);
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

  // Number Counter Up
  $(".counter").counterUp({ time: 2000 });
});

// Preloader
const body = document.getElementsByTagName("body")[0];
const element = document.getElementById("preloader");
body.classList.add();
const preLoader = () => {
  element.classList.add("opacity-0", "pointer-events-none");
  body.classList.remove("overflow-hidden");
};

window.addEventListener("load", preLoader);

// const openSmMenu = () => {
//   document.getElementById("menu").classList.remove("-translate-x-full");
//   document.getElementById("menu").classList.add("translate-x-0");
//   // animations
//   gsap.from(".sm-menu-link", {
//     opacity: 0,
//     y: 100,
//     duration: 0.3,
//     ease: "back.inOut",
//     stagger: "0.2",
//   });
//   //
//   gsap.from(".sm-logo", {
//     opacity: 0,
//     scale: 0,
//     x: -100,
//     duration: 0.5,
//     delay: 0.5,
//     ease: "back.inOut",
//   });

//   //
//   gsap.from(".sm-cta-btn", {
//     opacity: 0,
//     scale: 0,
//     x: -100,
//     duration: 0.5,
//     delay: 0.5,
//     ease: "back.inOut",
//     stagger: 0.2,
//   });
// };
// const closeSmMenu = () => {
//   document.getElementById("menu").classList.add("-translate-x-full");
//   document.getElementById("menu").classList.remove("translate-x-0");
// };

// Menu

const menuHoverly = document.getElementById("menu-hoverly");
const menu = document.getElementById("md-menu");

const openMenu = () => {
  menuHoverly.classList.remove("bg-gray-800/0", "pointer-events-none");
  menuHoverly.classList.add("bg-gray-800/70", "pointer-events-auto");
  menu.classList.toggle("-translate-x-full");

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
const closeMenu = () => {
  menuHoverly.classList.add("bg-gray-800/0", "pointer-events-none");
  menuHoverly.classList.remove("bg-gray-800/70", "pointer-events-auto");
  menu.classList.toggle("-translate-x-full");
};

// Close Menu on click outside
menuHoverly.addEventListener("click", (event) => {
  if (!menu.contains(event.target)) {
    closeMenu();
  }
});

// Inquiry Form
const inquiryHoverly = document.getElementById("inquiry-hoverly");
const inquiryForm = document.getElementById("inquiry-form");

const openInquiryForm = () => {
  inquiryHoverly.classList.remove(
    "bg-gray-800/0",
    "pointer-events-none",
    "backdrop-blur-none"
  );
  inquiryHoverly.classList.add(
    "bg-gray-800/70",
    "pointer-events-auto",
    "backdrop-blur-sm"
  );
  inquiryForm.classList.remove("-translate-x-full");
  inquiryForm.classList.add("translate-x-0");
};

const closeInquiryForm = () => {
  inquiryHoverly.classList.remove(
    "bg-gray-800/70",
    "pointer-events-auto",
    "backdrop-blur-sm"
  );
  inquiryHoverly.classList.add(
    "bg-gray-800/0",
    "pointer-events-none",
    "backdrop-blur-none"
  );
  inquiryForm.classList.add("-translate-x-full");
  inquiryForm.classList.remove("translate-x-0");
};

// Close Inquery from on click outside
inquiryHoverly.addEventListener("click", (event) => {
  const clickedDeleteIcon = [...event.target.classList].includes("delete-icon");
  if (!inquiryForm.contains(event.target) && !clickedDeleteIcon) {
    closeInquiryForm();
  }
});

const enquiryPopupBg = document.getElementById("enquiry-popup-bg");
const enquiryPopupForm = document.getElementById("enquiry-popup-form");

const openInquiryPopup = () => {
  enquiryPopupBg.classList.remove(
    "bg-gray-800/0",
    "pointer-events-none",
    "backdrop-blur-none"
  );
  enquiryPopupBg.classList.add(
    "bg-gray-800/40",
    "pointer-events-auto",
    "backdrop-blur-sm"
  );
  enquiryPopupForm.classList.add("scale-100");
  enquiryPopupForm.classList.remove("scale-0");
};
const closeEnquiryPopup = () => {
  enquiryPopupBg.classList.remove(
    "bg-gray-800/40",
    "pointer-events-auto",
    "backdrop-blur-sm"
  );
  enquiryPopupBg.classList.add(
    "bg-gray-800/0",
    "pointer-events-none",
    "backdrop-blur-none"
  );
  enquiryPopupForm.classList.add("scale-0");
  enquiryPopupForm.classList.remove("scale-100");
};

// stick header to top
document.onscroll = () => {
  let header = document.querySelector(".sticky-header");
  let menuLink = document.querySelectorAll(".menu-link");
  let logo = document.querySelector("#main-logo");
  let activeLink = document.querySelector(".menu-link.active");
  let headerParent = document.querySelector(".header-parent");
  let body = document.querySelector("body");
  let announcementBar = document.getElementById("announcement-bar-mobile");
  function getBasePath() {
    const scripts = document.getElementsByTagName("script");
    const currentScript = scripts[scripts.length - 1].src;
    console.log(scripts[scripts.length - 1].src);
    const basePath =
      currentScript.substring(0, currentScript.lastIndexOf("/")) + "/";
    return basePath;
  }
  const basePath = getBasePath();
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
    // logo.src = "/assets/images/logo_light.png";
    logo.src = basePath + "../images/logo_light.png";
    announcementBar.style.display = "flex";
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
    // logo.src = "/assets/images/logo.webp";
    logo.src = basePath + "../images/logo.webp";
    announcementBar.style.display = "none";
  }
};

// Footer Year set
document.querySelector(".footer-year").innerHTML = new Date().getFullYear();
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

// requestAnimationFrame(raf);

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
    },
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
      end: "+=1300",
    },
    scaleY: 0,
    ease: "none",
  });

  //
  const label1 = gsap.utils.selector('[data-label="1"]');
  const div1 = label1("div");
  const p1 = label1("p");
  gsap.to(div1, {
    scrollTrigger: {
      trigger: div1,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: "#f97316",
    ease: "none",
  });
  gsap.to(p1, {
    scrollTrigger: {
      trigger: p1,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: "white",
    ease: "none",
  });
  //
  const label2 = gsap.utils.selector('[data-label="2"]');
  const div2 = label2("div");
  const p2 = label2("p");
  gsap.to(div2, {
    scrollTrigger: {
      trigger: div2,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: "#f97316",
    ease: "none",
  });
  gsap.to(p2, {
    scrollTrigger: {
      trigger: p2,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: "white",
    ease: "none",
  });
  //
  const label3 = gsap.utils.selector('[data-label="3"]');
  const div3 = label3("div");
  const p3 = label3("p");
  gsap.to(div3, {
    scrollTrigger: {
      trigger: div3,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: "#f97316",
    ease: "none",
  });
  gsap.to(p3, {
    scrollTrigger: {
      trigger: p3,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: "white",
    ease: "none",
  });
  //
  const label4 = gsap.utils.selector('[data-label="4"]');
  const div4 = label4("div");
  const p4 = label4("p");
  gsap.to(div4, {
    scrollTrigger: {
      trigger: div4,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: "#f97316",
    ease: "none",
  });
  gsap.to(p4, {
    scrollTrigger: {
      trigger: p4,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: "white",
    ease: "none",
  });
  const label5 = gsap.utils.selector('[data-label="5"]');
  const div5 = label5("div");
  const p5 = label5("p");
  gsap.to(div5, {
    scrollTrigger: {
      trigger: div5,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    backgroundColor: "#f97316",
    ease: "none",
  });
  gsap.to(p5, {
    scrollTrigger: {
      trigger: p5,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    color: "white",
    ease: "none",
  });

  // linegrow animations end
});

// Gallry Image Change
const selectedImage = document.querySelector("#selected-image");
const thumbnails = document.querySelectorAll(".thumbnail");

const changeImage = (e) => {
  thumbnails.forEach((thumbnail) =>
    thumbnail.classList.remove("border", "border-orange-500")
  );
  selectedImage.setAttribute("src", e.src);
  e.classList.add("border", "border-orange-500");
};

//

// Borken Phones Dropdown

const elements = document.querySelectorAll(".button_form_layout_wizard7");
elements.forEach((e) => {
  e.addEventListener("change", (e1) => {
    elements.forEach((item) => {
      if (item.checked) {
        item.parentElement.classList.add("border-orange-500");
        item.parentElement.classList.add("bg-gray-50");
        item.parentElement.children[1].classList.add("font-medium");
      } else if (!item.checked) {
        item.parentElement.classList.remove("border-orange-500");
        item.parentElement.classList.remove("bg-gray-50");
        item.parentElement.children[1].classList.remove("font-medium");
      }
    });
  });
});

// Get the button
const backtoTop = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backtoTop.classList.remove("hidden");
  } else {
    backtoTop.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
backtoTop.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

// Faqs
document.querySelectorAll(".send-button").forEach((button) => {
  button.addEventListener("click", () => {
    const questionId = button.parentNode.id;
    const answerId = `a${questionId.slice(1)}`;
    const selectedAnswer = document.getElementById(answerId);
    console.log(button);
    if (!selectedAnswer.classList.contains("max-h-0")) {
      button.classList.remove("text-orange-100", "bg-orange-400");
      button.classList.add("text-orange-400", "bg-orange-100");
      selectedAnswer.classList.toggle("scale-0");
      setTimeout(() => {
        selectedAnswer.classList.toggle("max-h-0");
      }, 200);
    } else {
      button.classList.remove("text-orange-400", "bg-orange-100");
      button.classList.add("text-orange-100", "bg-orange-400");
      selectedAnswer.classList.toggle("max-h-0");
      setTimeout(() => {
        selectedAnswer.classList.toggle("scale-0");
      }, 100);
    }
  });
});

// Announcement bar
const announcementBar = document.getElementById("announcement-bar");
const announcementDismissBtn = document.getElementById("dismiss-announcement");

announcementDismissBtn?.addEventListener("click", () => {
  announcementBar.style.display = "none";
});

// New issue generator
const issueInput = document.getElementById("issue-input");
const issueInputContainer = document.getElementById("issue-input-container");
const newIssueBtn = document.getElementById("new-issue-btn");
const deleteIcon = `<button class="delete-icon ml-2" onclick="deleteIssue(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-500 " >
<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg></button>
`;

var issueNumber = 2;
newIssueBtn.addEventListener("click", () => {
  const newIssue = issueInput.cloneNode(true);
  newIssue.querySelector("#issue-title").innerHTML =
    `Issue (${issueNumber}) <span class="text-red-500 ml-1">*</span> ` +
    deleteIcon;
  newIssue.id = "issue-input" + issueNumber;
  issueInputContainer.appendChild(newIssue);
  issueNumber += 1;
});

function deleteIssue(icon) {
  let issue = icon.parentNode.parentNode.parentNode;
  setTimeout(() => {
    issue.remove();
  }, 100);
}

// Success Model

let modal = document.getElementById("success-modal");

function modalHandler(val) {
  if (val) {
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100", "pointer-events-auto");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } else {
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-100", "pointer-events-auto");
  }
}
