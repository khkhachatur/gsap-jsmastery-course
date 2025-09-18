import gsap from "gsap";

// const cardFront = document.querySelector(".card-front");
// const cardBack = document.querySelector(".card-back");

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.to(".card-front", {
    rotateY: -90,
    duration: 1,
    yoyo: true,
    ease: "back.in",
    onComplete: () => {
      gsap.to(".card-back", {
        rotateY: 0,
        yoyo: true,
        duration: 1,
        ease: "back.out",
      });
    },
  });
});
card.addEventListener("mouseleave", () => {
  gsap.to(".card-back", {
    rotateY: 90,
    duration: 1,
    yoyo: true,
    ease: "back.in",
    onComplete: () => {
      gsap.to(".card-front", {
        rotateY: 0,
        yoyo: true,
        duration: 1,
        ease: "back.out",
      });
    },
  });
});
