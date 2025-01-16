import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import SVG from "../assets/logo.png";
import gsap from "gsap";

const Loader = ({ onLoaderComplete, setLoaderAnimation}) => {

  const loaderRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onLoaderComplete// Trigger parent-defined loader completion
      
    });

    // Define loader animation sequence
    tl.to(loaderRef.current, {
      yPercent: -100, 
      borderRadius: "50%", 
      ease: "power4.in",
      duration: 1, 
      onComplete: () => setLoaderAnimation(true), 
    });

   
  }, []);

  return (
    <div
      ref={loaderRef}
      className="h-screen w-screen bg-custom-app z-[99999] fixed top-0 left-0 flex justify-center items-center"
    >
      <img src={SVG} className="h-36 w-auto" alt="Logo" />
    </div>
  );
};

export default Loader;
