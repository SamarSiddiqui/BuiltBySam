import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../utils/constant";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CATEGORIES = [
  { id: "All", label: "All Projects" },
  { id: "AI", label: "AI & Intelligence" },
  { id: "FullStack", label: "Full-Stack & Web" },
  { id: "Interactive", label: "Audio & UI Clones" },
  { id: "Games", label: "Arcade Games" },
];

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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
    gsap.fromTo(
      ".archive-filter-bar",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
    );
  }, []);

  // Filter helper logic
  const matchesCategory = (project, category) => {
    if (category === "All") return true;
    if (project.categories && project.categories.includes(category)) return true;

    const text = `${project.category || ""} `.toLowerCase();

    if (category === "AI") {
      return text.includes("ai") || text.includes("gpt") || text.includes("intelligence") || text.includes("rag") || text.includes("openai");
    }
    if (category === "FullStack") {
      return text.includes("full-stack") || text.includes("backend") || text.includes("architecture") || text.includes("ecosystem") || text.includes("next.js") || text.includes("supabase") || text.includes("firebase") || text.includes("systems");
    }
    if (category === "Interactive") {
      return text.includes("audio") || text.includes("clone") || text.includes("ui") || text.includes("interactive") || text.includes("experience");
    }
    if (category === "Games") {
      return text.includes("game") || text.includes("arcade") || text.includes("snake");
    }
    return false;
  };

  const countCategory = (catId) => {
    return projectData.filter((p) => matchesCategory(p, catId)).length;
  };

  const filteredProjects = projectData.filter((project) =>
    matchesCategory(project, activeCategory)
  );

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
            COMPLETE ARCHIVE & EXPERIMENTS ({projectData.length})
          </span>
        </div>

        <h1 className="text-[clamp(38px,6.5vw,84px)] font-grandSlangRoman leading-[0.95] text-gray-100 mb-6">
          Selected <span className="font-migraLightItalic">Works &</span> Projects.
        </h1>

        <p className="text-[#d2b99f]/90 font-planeItalic text-base md:text-lg max-w-2xl leading-relaxed">
          A comprehensive collection of applications, AI ecosystem tools, full-stack systems, and web experiments engineered from pixel to production.
        </p>
      </div>

      {/* Interactive Controls Bar: Category Filters */}
      <div className="archive-filter-bar mb-16 flex items-center justify-between gap-6 pb-6 border-b border-neutral-800/80">

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const count = countCategory(cat.id);
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-planeBold tracking-wider transition-all duration-300 flex items-center gap-2 ${isActive
                    ? "bg-[#d2b99f] text-black shadow-lg scale-105"
                    : "bg-neutral-900/80 border border-neutral-800 text-gray-400 hover:border-[#d2b99f]/40 hover:text-custom-vanila"
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${isActive ? "bg-black/20 text-black" : "bg-neutral-800 text-gray-400"
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Filtered Projects Stack Grid */}
      {filteredProjects.length > 0 ? (
        <div className="flex flex-col gap-24 lg:gap-36">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 max-w-xl mx-auto">
          <span className="text-4xl mb-4 block">🔍</span>
          <h3 className="text-xl font-grandSlangRoman text-[#d2b99f] mb-2">No Matching Projects Found</h3>
          <p className="text-gray-400 text-sm font-planeLight mb-6">
            No projects found under the selected category.
          </p>
          <button
            onClick={() => setActiveCategory("All")}
            className="px-6 py-2.5 rounded-full bg-[#d2b99f] text-black font-planeBold text-xs uppercase hover:bg-white transition-colors"
          >
            Reset Category Filter
          </button>
        </div>
      )}
    </main>
  );
};

export default AllProjects;
