import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  duration: 2,
  rotate: 360,
  background: "#ffeeca",
  ease: "power1.inOut",
  onComplete: () => {
    gsap.to(".box", {
      background: "#1517",
      rotate: 360,
      borderRadius: "30%",
      repeat: -1,
      yoyo: true,
    });
  },
});
