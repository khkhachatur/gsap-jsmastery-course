import gsap from "gsap";

gsap.set(".gsap-box", { opacity: 0, y: 400, scale: 0 });

gsap.to(".gsap-box", {
  delay: 0.5,
  y: 0,
  scale: 1,
  opacity: 1,
  duration: 1.5,
  ease: "bounce.in",
  yoyo: true,
});
