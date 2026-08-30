import React from "react";
import { projectData } from "../utils/constant";
import ProjectCard from "./ProjectCard";

const ProjectsPreview = () => {
  if (!projectData || projectData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        No projects available at the moment.
      </div>
    );
  }

  return (
    <section className="relative w-full py-12">
      {/* Project Cards Stack */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-24 lg:gap-36">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
