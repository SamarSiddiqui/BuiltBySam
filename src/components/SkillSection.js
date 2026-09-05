import React, { useRef } from "react";
import { categorizedSkills, softSkills } from "../utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
  const skillContainer = useRef();

  useGSAP(
    () => {
      // 1. Heading Entrance Animation
      gsap.fromTo(
        ".skill-heading-block",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillContainer.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Glass Cards Entrance Physics
      gsap.fromTo(
        ".skill-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skill-cards-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Staggered Skill Pills Entrance
      gsap.fromTo(
        ".skill-pill",
        { y: 25, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.03,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skill-cards-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: skillContainer }
  );

  return (
    <section
      ref={skillContainer}
      className="min-h-screen py-24 text-custom-vanila relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center"
    >
      {/* Editorial Header Section */}
      <div className="skill-heading-block text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-[#d2b99f]/10 border border-[#d2b99f]/30">
          <span className="w-2 h-2 rounded-full bg-[#d2b99f] animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-[#d2b99f] font-planeBold">
            TECHNICAL & PERSONAL CAPABILITIES
          </span>
        </div>

        <h2 className="text-[clamp(34px,5.5vw,68px)] font-grandSlangRoman leading-[1.05] text-[#f6f3ef] mb-5">
          Crafting Systems with <br />
          <span className="font-migraLightItalic text-[#d2b99f]">Precision &</span> Depth.
        </h2>

        <p className="text-gray-400 font-planeItalic text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
          A curated taxonomy of core engineering frameworks, system architecture tools, and collaborative mindsets shaping my end-to-end development process.
        </p>
      </div>

      {/* 2-Column Responsive Glassmorphism Grid */}
      <div className="skill-cards-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Hard Skills & Domain Clusters (7 Cols) */}
        <div className="skill-card lg:col-span-7 bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-5 sm:p-7 lg:p-8 backdrop-blur-md shadow-2xl hover:border-[#d2b99f]/40 transition-all duration-500">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-5 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d2b99f] font-planeBold block mb-1">
                TECHNICAL STACK
              </span>
              <h3 className="text-xl sm:text-2xl font-grandSlangRoman text-gray-100">
                Core Engineering Tools
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-black/60 border border-neutral-800 text-[10px] sm:text-[11px] font-mono text-gray-400">
              HARD SKILLS
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {categorizedSkills.map((domain, idx) => (
              <div key={idx} className="bg-black/30 border border-neutral-800/60 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{domain.icon}</span>
                  <span className="text-xs uppercase font-planeBold tracking-wider text-[#d2b99f]">
                    {domain.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="skill-pill text-[11px] sm:text-xs font-planeLight px-3 py-1.5 rounded-lg bg-neutral-800/80 text-gray-200 border border-neutral-700/60 hover:border-[#d2b99f]/50 hover:text-custom-vanila hover:scale-105 transition-all duration-300 cursor-default max-w-full break-words"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Soft Skills & Mindset (5 Cols) */}
        <div className="skill-card lg:col-span-5 bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-5 sm:p-7 lg:p-8 backdrop-blur-md shadow-2xl hover:border-[#d2b99f]/40 transition-all duration-500 self-stretch flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-5 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d2b99f] font-planeBold block mb-1">
                  INTERPERSONAL & WORK ETHIC
                </span>
                <h3 className="text-xl sm:text-2xl font-grandSlangRoman text-gray-100">
                  Mindset & Leadership
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-black/60 border border-neutral-800 text-[10px] sm:text-[11px] font-mono text-gray-400">
                SOFT SKILLS
              </span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-2">
              {softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="skill-pill group flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-black/40 border border-neutral-800 text-[11px] sm:text-xs font-planeBold text-gray-300 hover:border-[#d2b99f]/50 hover:text-custom-vanila hover:scale-105 transition-all duration-300 cursor-default max-w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d2b99f] group-hover:scale-125 transition-transform shrink-0" />
                  <span className="break-words">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800/60 text-xs font-planeItalic text-gray-500 flex justify-between items-center">
            <span>Continuous Evolution</span>
            <span className="font-mono text-[#d2b99f]/80">&bull; Always Learning</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillSection;
