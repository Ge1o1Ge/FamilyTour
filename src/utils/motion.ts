import { Variants } from "framer-motion";

// Тип для параметров анимации появления
interface FadeInOptions {
  direction: "left" | "right" | "up" | "down";
  type: string;
  delay: number;
  duration: string;
}

// Тип для параметров анимации сдвига
interface SlideInOptions {
  direction: "left" | "right" | "up" | "down";
  type: string;
  delay: number;
  duration: number;
}

// Функция для создания варианта анимации текста
export const textVariant = (delay: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// Функция для создания варианта анимации появления
export const fadeIn = (options: FadeInOptions): Variants => {
  const { direction, type, delay, duration } = options;
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Функция для создания варианта анимации масштабирования
export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Функция для создания варианта анимации сдвига
export const slideIn = (options: SlideInOptions): Variants => {
  const { direction, type, delay, duration } = options;
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Функция для создания варианта анимации контейнера с задержкой
export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
): Variants => {
  return {
    show: {
      transition: {
        staggerChildren: staggerChildren || 0,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
