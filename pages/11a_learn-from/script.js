import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power4.out",
  stagger: 0.3,
  scale: 0.9,
});

repeat.addEventListener("click", () => {
  animation.restart();
});
