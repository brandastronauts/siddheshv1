import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Retry scrolling to anchor until element is rendered (lazy sections)
      let attempts = 0;
      const maxAttempts = 15;
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 200);
        }
      };
      // Start after a small initial delay
      setTimeout(tryScroll, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOnRouteChange;
