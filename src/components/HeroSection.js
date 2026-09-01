import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useShapeFalling from "../hooks/useShapeFalling";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ sectionRef }) => {
  useShapeFalling(".heading-flower", ".shapes");

  useGSAP(() => {
    const headings = gsap.utils.toArray(".heading");
    if (headings.length) {
      headings.forEach((heading, index) => {
        gsap.fromTo(
          heading,
          { x: index % 2 === 0 ? 30 : -100 },
          {
            x: 0,
            scrollTrigger: {
              trigger: heading,
              start: "top 100%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="min-h-[100vh] smallerTab:min-h-[95vh] flex items-center relative overflow-hidden">
      {/* Ambient Radial Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[60vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d2b99f]/12 via-[#d2b99f]/3 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="smallerTab:mb-12 smallerTab:mt-0 mt-10 w-full h-full text-center relative z-10">
        {/* Status Pill Badge */}
        <div className="my-5 hero-heading opacity-0 relative flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] md:text-xs uppercase font-mono tracking-widest text-[#d2b99f]">
              AVAILABLE FOR OPPORTUNITIES &bull; FULL STACK DEVELOPER
            </span>
          </div>
          {/* ShapesContainer */}
          <div className="shapes absolute z-[999] top-0 left-0 w-full h-full pointer-events-none"></div>
        </div>
        {/* Headings */}
        <div className="hero-heading cont relative overflow-hidden opacity-0 text-center">
          <h1 className="heading-flower text-center w-full uppercase text-[clamp(55px,11vw,180px)] font-grandSlangRoman leading-[0.9] largerMobile:leading-[1.1]">
            Building
          </h1>
        </div>
        <div className="hero-heading heading mt-2 opacity-0">
          <h1 className="heading-flower uppercase text-[clamp(60px,11vw,200px)] font-grandSlangRoman leading-[0.8] largerMobile:leading-[0.8]">
            Delightful
          </h1>
        </div>
        <div className="hero-heading heading mt-2 opacity-0">
          <h1 className="heading-flower font-grandSlangItalic text-[clamp(50px,10vw,150px)] leading-[0.5] largerMobile:leading-[0.5]">
            experiences
          </h1>
        </div>
        <div className="hero-heading opacity-0 leading-[1.8] mt-1 flex justify-center items-center largerMobile:mt-2">
          <h2 className="font-migraLightItalic text-[clamp(5px,7vw,35px)] mr-3">for a</h2>
          <h1 className="heading heading-flower text-[clamp(45px,7vw,100px)] font-migraBoldItalic font-extrabold">
            business world
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
