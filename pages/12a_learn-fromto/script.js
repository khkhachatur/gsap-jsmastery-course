import gsap from "gsap";

const bar = document.querySelectorAll(".bar");

bar.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.3,
    },
    {
      scaleY: 1.5,
      ease: "sine.inOut",
      duration: 1,
      delay: index * 0.2,
      yoyo: true,
      repeat: -1,
      //   stagger: 0.3,
    }
  );
});
