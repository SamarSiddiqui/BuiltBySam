import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-5 h-5 rounded-full bg-[rgba(233,233,206,0.8)] fixed z-[9999] top-0 left-0 pointer-events-none mix-blend-difference opacity-0 proTablet:w-0 proTablet:cursor-pointer"/>
  );
};

export default Cursor;
