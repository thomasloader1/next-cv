"use client";
import { useEffect } from "react";

const AnimatedBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const speed = 0.2; // Ajusta la velocidad de movimiento

      const newPosition = -scrollTop * speed;
      console.log({ newPosition });
      document.body.style.backgroundPosition = `right ${newPosition}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default AnimatedBackground;
