// Jumbo ANIMATION
let jumboTL =  gsap.timeline();

jumboTL.fromTo(
    ".jumbo h1",
    {
        y: 300,
        opacity: 0
    },
    {
        y:0,
        opacity: 1,
        duration: 1.3
    },
    ">-.3"
    ).fromTo(
        ".jumbo h3",
        {
            y: 300,
            opacity: 0
        },
        {
            y:0,
            opacity: 1,
            duration: 1.3
        },
        ">-.3"
    ).fromTo(
        ".jumbo-button",
        {
            y: 300,
            opacity: 0
        },
        {
            y:0,
            opacity: 1,
            duration: 1.3
        },
        ">-.6"
);

// Scroll ANIMATION
let homeController = new ScrollMagic.Controller();


// Horizontal-sale Animation
const bannerTL = gsap.timeline();
bannerTL
.fromTo(
    ".banner h2",
    {
       scale: 0,
    },
    {
        scale: 1,
        duration: 1
    }
).fromTo(
    ".banner h4",
    {
       scale: 0,
    },
    {
        scale: 1,
    }
);">-1"

let bannerScene = new ScrollMagic.Scene({
    triggerElement: ".banner",
    triggerHook: 1,
    reverse: true, 
    offset: 150,
    duration: document.querySelector(".banner").offsetHeight
})
.setTween(bannerTL)
// .addIndicators()
.addTo(homeController)

//Mobil Animation
const mobileMenuTL = gsap.timeline({
    paused: true
  });
  mobileMenuTL
    .fromTo(
      "#mobile-menu",
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: .8,
      }
    )
    .fromTo(
      "#mobile-menu .menu .link",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: .6,
        stagger: .2
      }
    );

const openMobileMenu = document.querySelector(".open-mobile-menu");
openMobileMenu.addEventListener("click", () => {
  mobileMenuTL.play();
});
const closeMobileMenu = document.querySelector(".close-mobile-menu");
closeMobileMenu.addEventListener("click", () => {
  mobileMenuTL.reverse();
});

const mobileModeOn = () => {
  if (window.innerWidth <= 991) {
    document.querySelector("header .menu").classList.add("mobile-mode");
  } else {
    document.querySelector("header .menu").classList.remove("mobile-mode");
  }
};
mobileModeOn();
window.addEventListener("resize", function (event) {
  mobileModeOn();
});
