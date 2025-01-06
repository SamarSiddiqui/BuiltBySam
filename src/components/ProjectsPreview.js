import React from 'react'
import {projectData} from '../utils/constant'
import ProjectCard from './ProjectCard'
const ProjectsPreview = () => {
  return (
    <div>
      {
        projectData.map((card)=>(
          <ProjectCard key={card.id} title={card.title} description={card.description} projectImg={card.projectImg} techImages ={card.techStack}/>
        ))
      }
    </div>
  )
}

export default ProjectsPreview
