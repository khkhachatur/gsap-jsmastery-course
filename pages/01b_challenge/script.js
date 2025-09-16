import gsap from "gsap";

gsap.to(".card", {
  duration: 0.7,
  fade: 10,
  opacity: 0.8,
  scale: 0.9,
  yoyo: true,
  boxShadow: "5px 5px 20px 10px rgba(10, 90, 120, 0.8)",
  repeat: -1,
});
