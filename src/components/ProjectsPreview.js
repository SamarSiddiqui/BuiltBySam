import React from "react";
import { Link } from "react-router-dom";
import { projectData } from "../utils/constant";
import ProjectCard from "./ProjectCard";
import { useMagneticEffect } from "../hooks/useMagneticEffect";

const ProjectsPreview = ({ limit }) => {
  useMagneticEffect(".view-all-btn-box", ".view-all-btn");

  if (!projectData || projectData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        No projects available at the moment.
      </div>
    );
  }

  const displayedProjects = limit ? projectData.slice(0, limit) : projectData;

  return (
    <section className="relative w-full py-12">
      {/* Project Cards Stack */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-24 lg:gap-36">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            project={project}
          />
        ))}
      </div>

      {/* CTA Button to View All Projects */}
      {limit && projectData.length > limit && (
        <div className="mt-20 flex justify-center items-center view-all-btn-box relative z-20">
          <Link to="/projects">
            <button className="view-all-btn font-planeBold text-xs uppercase tracking-widest bg-custom-vanila text-black border border-custom-vanila py-4 px-10 rounded-full hover:bg-transparent hover:text-custom-vanila transition-all duration-300 shadow-xl flex items-center gap-3">
              <span>EXPLORE ALL PROJECTS ({projectData.length})</span>
              <span className="text-base">↗</span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProjectsPreview;
