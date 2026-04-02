import { useEffect } from "react";

export const useScrollLock = () => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`
    );

    document.body.classList.add("overflow-hidden");
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
      document.body.style.removeProperty("--scrollbar-width");
    };
  }, []);
};