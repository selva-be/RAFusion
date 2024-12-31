import React, { useEffect } from "react";
import SmoothScroll from "smooth-scroll";

export const ScrollToTop = ({ children }) => {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });
  }, []);

  return <>{children}</>;
};
