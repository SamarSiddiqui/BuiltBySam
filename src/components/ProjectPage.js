import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectData } from "../utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find target project
  const projectIndex = projectData.findIndex((p) => p.id === id);
  const project = projectData[projectIndex];
  const nextProject = projectData[(projectIndex + 1) % projectData.length];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Entrance animation
  useGSAP(() => {
    gsap.fromTo(
      ".project-detail-header",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".project-detail-hero",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
    );
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-custom-vanila pt-20 px-6">
        <h2 className="text-3xl font-grandSlangRoman mb-4">Project Not Found</h2>
        <p className="text-gray-400 mb-6">The requested project case study does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2.5 rounded-full bg-[#d2b99f] text-black font-planeBold text-xs uppercase"
        >
          &larr; Back to Portfolio
        </button>
      </div>
    );
  }

  const { title, category, year, role, description, overview, highlights, projectImg, techNames, techStack, links } = project;

  return (
    <main className="min-h-screen pt-28 pb-24 text-custom-vanila relative max-w-7xl mx-auto px-6">
      {/* Top Navigation Back Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase font-planeBold tracking-widest text-gray-400 hover:text-custom-vanila transition-colors"
        >
          <span>&larr;</span>
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header Section */}
      <div className="project-detail-header mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-[#d2b99f]/10 border border-[#d2b99f]/30 text-xs font-mono text-[#d2b99f]">
            {year} &bull; {category}
          </span>
          {role && (
            <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold">
              {role}
            </span>
          )}
        </div>

        <h1 className="text-[clamp(40px,7vw,96px)] font-grandSlangRoman leading-[0.95] text-gray-100 mb-6">
          {title}
        </h1>

        <p className="text-[clamp(16px,2vw,22px)] text-[#d2b99f]/90 font-planeItalic max-w-3xl leading-relaxed">
          {description}
        </p>

        {/* Live CTA Links */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          {links?.liveLink && (
            <a
              href={links.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-[#c27c45] text-[#f6f3ef] font-planeBold text-xs uppercase tracking-wider hover:bg-transparent border border-[#c27c45] hover:text-[#c27c45] transition-all shadow-lg"
            >
              See It Live ↗
            </a>
          )}
          {links?.sourceLink && (
            <a
              href={links.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-neutral-700 text-[#e9dfce] font-planeBold text-xs uppercase tracking-wider hover:bg-[#d2b99f] hover:text-black hover:border-[#d2b99f] transition-all"
            >
              Source Code ↗
            </a>
          )}
        </div>
      </div>

      {/* Hero Showcase Image */}
      <div className="project-detail-hero relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 shadow-2xl mb-16 min-h-[300px] md:min-h-[480px] lg:min-h-[560px] flex items-center justify-center p-4 md:p-8">
        {/* Ambient Blurred Background to frame non-matching aspect ratio screenshots */}
        <img
          src={projectImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-110 pointer-events-none"
        />

        {/* Full Uncropped Project Screenshot */}
        <img
          src={projectImg}
          alt={`${title} full showcase`}
          className="relative z-10 max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-neutral-800/60"
        />
      </div>

      {/* Deep Dive Case Study Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6 border-t border-neutral-800/80">
        
        {/* Left Column: Project Story & Overview */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#d2b99f] font-planeBold mb-3">
              PROJECT OVERVIEW
            </h3>
            <p className="text-gray-300 font-planeItalic text-lg leading-relaxed">
              {overview || description}
            </p>
          </div>

          {highlights && highlights.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#d2b99f] font-planeBold mb-4">
                KEY FEATURES & HIGHLIGHTS
              </h3>
              <ul className="flex flex-col gap-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-base font-planeLight">
                    <span className="text-[#d2b99f] font-bold mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Metadata Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-8 bg-neutral-900/60 border border-neutral-800/80 p-8 rounded-2xl backdrop-blur-md self-start">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold block mb-1">
              CATEGORY
            </span>
            <span className="text-gray-200 font-grandSlangRoman text-lg">
              {category}
            </span>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold block mb-1">
              ROLE & RESPONSIBILITIES
            </span>
            <span className="text-gray-200 font-planeLight text-base">
              {role || "Full-Stack Development"}
            </span>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold block mb-3">
              TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {techNames ? (
                techNames.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-planeLight px-3 py-1.5 rounded-lg bg-neutral-800/80 text-gray-300 border border-neutral-700/60"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                techStack?.map((img, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-neutral-800 border border-neutral-700/60">
                    <img src={img} className="h-6 object-contain" alt={`Tech ${idx}`} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Footer Navigation to Next Project */}
      {nextProject && (
        <div className="mt-24 pt-12 border-t border-neutral-800/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold">
            NEXT FEATURED PROJECT
          </span>
          <Link
            to={`/projects/${nextProject.id}`}
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-grandSlangRoman text-gray-200 hover:text-[#d2b99f] transition-colors"
          >
            <span>{nextProject.title}</span>
            <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
          </Link>
        </div>
      )}
    </main>
  );
};

export default ProjectPage;
