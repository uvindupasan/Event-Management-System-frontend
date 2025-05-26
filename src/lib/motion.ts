// lib/motion.ts
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0
) => {
  let x = 0, y = 0;

  switch (direction) {
    case "up":
      y = 40;
      break;
    case "down":
      y = -40;
      break;
    case "left":
      x = 40;
      break;
    case "right":
      x = -40;
      break;
  }

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
      },
    },
  };
};
