import gsap from "gsap";

const reactions = document.querySelectorAll(".reactions button");

reactions.forEach((button) => {
  button.addEventListener("click", () => {
    gsap.fromTo(
      button,
      {
        y: 0,
      },
      {
        y: -70,
        scale: 2,
        duration: 0.2,
        ease: "bounce.inOut",
        rotate: -10,
        yoyo: true,
        onComplete: () => {
          gsap.fromTo(
            button,
            {
              rotate: 0,
            },
            {
              rotate: -20,
              repeat: 4,
              duration: 0.15,
              yoyo: true,
              onComplete: () => {
                gsap.to(button, {
                  y: 0,
                  delay: 0.6,
                  ease: "bounce.inOut",
                  rotate: 0,
                  scale: 1,
                  duration: 0.1,
                  yoyo: true,
                });
              },
            }
          );
        },
      }
    );
  });
});
