gsap.to(".card", {
  opacity: 1,
  duration: 2,
  scale: 1,
  onComplete: () => {
    gsap.to(".card", {
      y: -30,
      repeat: -1,
      yoyo: true,
      scale: 1.05,
      duration: 0.5,
    });
  },
});
