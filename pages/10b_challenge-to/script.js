import gsap from "gsap";

gsap.to(".toast", {
  opacity: 1,
  y: -120,
  delay: 0.6,
  ease: "power4.out",
  stagger: 1,
  yoyo: true,
  onComplete: () => {
    gsap.to(".toast", {
      opacity: 0,
      duration: 2,
      stagger: 1,
    });
  },
});
