import { useEffect, useState } from "react";

export function useHeaderScroll() {
  const [scrollY, setScrollY] = useState(() => window.scrollY);
  const [direction, setDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastY = window.scrollY;
  
    setScrollY(lastY);
  
    let ticking = false;
  
    const update = () => {
      const currentY = window.scrollY;
  
      if (Math.abs(currentY - lastY) < 5) {
        ticking = false;
        return;
      }
  
      setDirection(currentY > lastY ? "down" : "up");
      setScrollY(currentY);
  
      lastY = currentY;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
  
    const handleLoad = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      lastY = currentY;
    };
  
    window.addEventListener("load", handleLoad);
  
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return { scrollY, direction };
}