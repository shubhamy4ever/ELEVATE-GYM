import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] // cubic-bezier for smoother animation
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: "easeOut"
    }
  }
};

export const scaleUp: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    x: -70, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring", 
      stiffness: 100,
      damping: 12
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    x: 70, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring", 
      stiffness: 100,
      damping: 12
    }
  }
};

export const cardHover = {
  rest: { 
    y: 0,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -10,
    boxShadow: "0px 20px 25px rgba(0,0,0,0.15), 0px 10px 10px rgba(0,0,0,0.08)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const buttonHover = {
  rest: { 
    scale: 1,
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// New animations
export const slideInBottom: Variants = {
  hidden: { y: 70, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.7, 
      type: "spring", 
      stiffness: 100,
      damping: 12
    }
  }
};

export const slideInTop: Variants = {
  hidden: { y: -70, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.7, 
      type: "spring", 
      stiffness: 100,
      damping: 12
    }
  }
};

export const rotate3d: Variants = {
  hidden: { 
    rotateX: 20, 
    rotateY: -20, 
    opacity: 0 
  },
  visible: { 
    rotateX: 0, 
    rotateY: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};
