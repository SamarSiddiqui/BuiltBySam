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
    <div>
      {
        projectData.map((card)=>(
          <ProjectCard key={card.id}
              title={card.title}
              description={card.description}
              projectImg={card.projectImg}
              techImages={card.techStack}
              projectLink={card.links}/>
        ))
      }
    </div>
  )
}

export default ProjectsPreview
