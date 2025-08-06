import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      const smoother = ScrollSmoother.get();

      if (smoother) {
        setTimeout(() => {
          smoother.scrollTo(0, true);
        }, 60); // delay added for DOM + GSAP sync
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }, [location]);

  return null;
};

export default ScrollToTop;
