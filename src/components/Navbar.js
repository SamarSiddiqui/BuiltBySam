import { useGSAP } from "@gsap/react";
import SVG from "../assets/svg/star.svg";
import gsap from "gsap";
import { useMagneticEffect, useMultipleMagneticEffect } from "../hooks/useMagneticEffect";

const Navbar = () => {
  // Logo Magnetic Effect
  useMagneticEffect(".logo-container", ".logo");
  // Icons Magnetic Effect
  useMultipleMagneticEffect(".header-icon-box", ".header-icon");

  // GSAP Animation for Logo Rotation
  useGSAP(() => {
     gsap.to(".logo-img", {
      rotation: 360,
      repeat: -1,
      duration: 4,
      ease: "linear",
     })
  }, []);

  return (
    <div className="h-20 w-screen flex items-center fixed z-[999]">
      <div className="w-[94%] m-auto h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="logo-container p-2 font-planeLight text-[clamp(15px,2.5vw,16px)]">
          <div className="logo">
            <h1 className="">SAMAR</h1>
            <div className="flex items-center -mt-2.5">
              <img src={SVG} className="logo-img h-4 w-auto" alt="Star logo" />
              <h1 className="">SIDDIQUI</h1>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-black text-xl">
          <div>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/samar-siddiqui-763481236/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="header-icon-box p-3"
            >
              <i className="fa-brands header-icon fa-linkedin-in p-2.5 mx-2 text-custom-vanila cursor-pointer"></i>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/SamarSiddiqui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="header-icon-box p-2"
            >
              <i className="fa-brands fa-github header-icon p-2.5 mx-2 text-custom-vanila cursor-pointer"></i>
            </a>
            {/* Twitter */}
            <a
              href="https://x.com/samsid__?t=td35lKcr2eFGflbmhChFHw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="header-icon-box p-2"
            >
              <i className="fa-brands fa-x-twitter header-icon p-2.5 ml-2 text-custom-vanila cursor-pointer"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
