import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMultipleMagneticEffect } from "../hooks/useMagneticEffect";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, description, projectImg, techImages, projectLink }) => {
  const cardRef = useRef(null);

  // Apply Magnetic Effect to buttons
  useMultipleMagneticEffect(".button-container", ".button");

  // GSAP Scroll Animation for Card
  useGSAP(() => {
    const card = cardRef.current;
    if (card) {
       gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "top 40%",
            scrub: true,
          },
        }
      )
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center my-6">
      <div
        ref={cardRef}
        className="project-card w-[85%] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-[#d2b99f]/10 relative cursor-pointer group proTablet:w-11/12 m-5 overflow-hidden transition-all duration-500 hover:border-[#d2b99f]/25"
      >
        {/* Image Container with Zoom effect */}
        <div className="w-full h-full overflow-hidden rounded-2xl proTablet:rounded-b-none">
          <img
            src={projectImg}
            alt={`${title} project`}
            className="w-full h-full object-cover rounded-2xl proTablet:rounded-t-2xl proTablet:rounded-b-none group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Description overlay */}
        <div
          className={`hidden group-hover:flex rounded-2xl bg-gradient-to-br from-neutral-950/90 via-[#1e2125]/92 to-neutral-950/96 backdrop-blur-md absolute h-full w-full top-0 left-0 flex-col justify-center items-center border border-[#d2b99f]/15 transition-all duration-300
          proTablet:relative proTablet:bottom-0 proTablet:h-auto proTablet:flex proTablet:bg-[#1a1c1e] proTablet:backdrop-blur-none proTablet:rounded-b-2xl proTablet:rounded-t-none proTablet:border-0`}
        >
          <div className="w-[85%] m-auto h-[90%] flex flex-col justify-between proTablet:w-full proTablet:h-auto">
            {/* Content Area */}
            <div className="p-5 h-full flex flex-col justify-between proTablet:p-6">
              <div className="p-1">
                <h1 className="text-[clamp(26px,3.8vw,56px)] font-grandSlangBold font-bold text-[#e9dfce] tracking-wide mb-3 proTablet:mb-2">
                  {title}
                </h1>
                <p className="text-[clamp(14px,1.4vw,20px)] text-[#d2b99f]/85 w-11/12 leading-[1.8] font-planeItalic proTablet:leading-7 proTablet:w-full my-2">
                  {description}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-center py-4 border-t border-[#d2b99f]/10 mt-6 proTablet:mt-4 proTablet:flex-col proTablet:items-start proTablet:gap-4">
                {/* Tech Icons with custom containers */}
                <div className="flex flex-wrap items-center gap-2">
                  {techImages?.map((image, index) => (
                    <div 
                      className="inline-flex items-center justify-center bg-neutral-900/60 border border-[#d2b99f]/10 p-1.5 rounded-xl transition-all duration-300 hover:scale-110 hover:border-[#d2b99f]/30 hover:bg-neutral-800/80 shadow-sm" 
                      key={index}
                    >
                      <img src={image} className="h-6 object-contain" alt={`Tech icon ${index + 1}`} />
                    </div>
                  ))}
                </div>

                {/* Buttons (Primary vs Secondary styling) */}
                <div className="flex items-center gap-3 proTablet:w-full proTablet:justify-end">
                  <div className="button-container">
                    <a
                      href={projectLink?.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Source Code"
                    >
                      <button className="button font-planeBold text-sm tracking-wider uppercase border border-[#d2b99f]/40 text-[#e9dfce] bg-transparent py-2.5 px-6 rounded-full hover:bg-[#d2b99f] hover:text-[#1e2125] hover:border-[#d2b99f] transition-all duration-300 shadow-md hover:shadow-lg proTablet:px-4 proTablet:text-xs">
                        View Source
                      </button>
                    </a>
                  </div>
                  <div className="button-container">
                    <a
                      href={projectLink?.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="See Live Project"
                    >
                      <button className="button font-planeBold text-sm tracking-wider uppercase bg-[#c27c45] text-[#f6f3ef] border border-[#c27c45] py-2.5 px-6 rounded-full hover:bg-transparent hover:text-[#c27c45] transition-all duration-300 shadow-md hover:shadow-lg proTablet:px-4 proTablet:text-xs">
                        See It Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
