import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMultipleMagneticEffect } from "../hooks/useMagneticEffect";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;
  const projectNumber = String(index + 1).padStart(2, "0");

  // Apply Magnetic Effect to buttons
  useMultipleMagneticEffect(".button-container", ".button");

  // GSAP Scroll Animation for Card
  useGSAP(
    () => {
      const card = cardRef.current;
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: cardRef }
  );

  // Mouse tilt physics handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: (x / rect.width) * 10,
      rotateX: -(y / rect.height) * 10,
      transformPerspective: 1000,
      ease: "power1.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateY: 0,
      rotateX: 0,
      ease: "power2.out",
      duration: 0.6,
    });
  };

  const { title, category, year, role, description, projectImg, techStack, techNames, links } = project;

  return (
    <div
      ref={cardRef}
      className={`project-card relative w-full flex flex-col items-center gap-8 lg:gap-14 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Block with GSAP 3D Tilt & Micro-Interactions */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full lg:w-7/12 group relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900/80 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-[#d2b99f]/50 hover:shadow-[0_25px_60px_-15px_rgba(210,185,159,0.2)] cursor-pointer"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={projectImg}
            alt={`${title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Top Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700/80 text-[11px] font-mono text-[#d2b99f]">
              {year} &bull; {category}
            </span>
          </div>

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
            <span className="px-5 py-2.5 rounded-full bg-black/80 border border-[#d2b99f]/40 text-custom-vanila text-xs font-planeBold tracking-wider uppercase shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform flex items-center gap-2">
              <span>EXPLORE PROJECT</span>
              <span className="text-sm">↗</span>
            </span>
          </div>
        </div>
      </div>

      {/* Typography & Details Block */}
      <div className="w-full lg:w-5/12 flex flex-col justify-between py-2 text-custom-vanila">
        <div>
          {/* Index & Role Badge */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-mono text-[#d2b99f] font-bold">
              {projectNumber} //
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold">
              {role || category}
            </span>
          </div>

          {/* Overlapping Serif Title */}
          <h2 className="text-[clamp(32px,4vw,54px)] font-grandSlangRoman font-bold leading-[1.1] text-gray-100 mb-4 hover:text-[#d2b99f] transition-colors cursor-pointer">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[#d2b99f]/85 font-planeItalic text-sm lg:text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {techNames ? (
              techNames.map((name, idx) => (
                <span
                  key={idx}
                  className="text-xs font-planeLight px-3 py-1 rounded-lg bg-neutral-900/90 text-gray-300 border border-neutral-800/80 hover:border-[#d2b99f]/40 hover:text-custom-vanila hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {name}
                </span>
              ))
            ) : (
              techStack?.map((img, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center justify-center bg-neutral-900/80 border border-neutral-800 p-1.5 rounded-xl hover:border-[#d2b99f]/40 transition-colors"
                >
                  <img src={img} className="h-5 object-contain" alt={`Tech icon ${idx}`} />
                </div>
              ))
            )}
          </div>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-neutral-800/80">
          {links?.liveLink && (
            <div className="button-container">
              <a
                href={links.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`See ${title} Live`}
              >
                <button className="button font-planeBold text-xs uppercase tracking-wider bg-[#c27c45] text-[#f6f3ef] border border-[#c27c45] py-2.5 px-6 rounded-full hover:bg-transparent hover:text-[#c27c45] transition-all duration-300 shadow-md">
                  See It Live ↗
                </button>
              </a>
            </div>
          )}

          {links?.sourceLink && (
            <div className="button-container">
              <a
                href={links.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} Source Code`}
              >
                <button className="button font-planeBold text-xs uppercase tracking-wider border border-neutral-700 text-[#e9dfce] bg-transparent py-2.5 px-6 rounded-full hover:bg-[#d2b99f] hover:text-black hover:border-[#d2b99f] transition-all duration-300">
                  Source Code ↗
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
