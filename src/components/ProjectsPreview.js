import React from 'react'
import {projectData} from '../utils/constant'
import ProjectCard from './ProjectCard'


const ProjectsPreview = () => {
  if (!projectData || projectData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        No projects available at the moment.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-20 lg:gap-32">
      {projectData.map((project, index) => (
        <ProjectCard
          key={project.id}
          index={index}
          project={project}
        />
      ))}
    </div>
  );
};

export default ProjectsPreview
