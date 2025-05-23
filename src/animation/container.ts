export const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, x: -20 },
};

export const span = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0.1, 0.4, 1],
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  exit: { opacity: 0 },
};

export const nav = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
  exit: { opacity: 0 },
};

export const item = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "backInOut",
      duration: 2,
    },
  },
  exit: { opacity: 0, x: -20 },
};
