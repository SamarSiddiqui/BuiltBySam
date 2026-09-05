import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
    });

    lenisRef.current = lenis;

    let rafId;
    const handleScroll = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(handleScroll);
    };

    rafId = requestAnimationFrame(handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top immediately on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);
};

export default useLenis;