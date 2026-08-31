import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AllProjects = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Entrance GSAP animation
  useGSAP(() => {
    gsap.fromTo(
      ".archive-header",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-24 text-custom-vanila relative max-w-7xl mx-auto px-6">
      {/* Navigation Back Link */}
      <div className="mb-8 archive-header">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase font-planeBold tracking-widest text-gray-400 hover:text-custom-vanila transition-colors"
        >
          <span>&larr;</span>
          <span>Back to Main Portfolio</span>
        </Link>
      </div>

      {/* Archive Header */}
      <div className="archive-header mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#d2b99f] animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold">
            COMPLETE ARCHIVE & EXPERIMENTS
          </span>
        </div>

        <h1 className="text-[clamp(38px,6.5vw,84px)] font-grandSlangRoman leading-[0.95] text-gray-100 mb-6">
          Selected <span className="font-migraLightItalic">Works &</span> Projects.
        </h1>

        <p className="text-[#d2b99f]/90 font-planeItalic text-base md:text-lg max-w-2xl leading-relaxed">
          A comprehensive collection of applications, AI ecosystem tools, full-stack systems, and web experiments engineered from pixel to production.
        </p>
      </div>
    </main>
  );
};

export default AllProjects;
