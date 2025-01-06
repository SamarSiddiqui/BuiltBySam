import React from 'react'
import ReactIcon from '../assets/tech-icons/html.png'
const ProjectCard = ({title,description,projectImg,techImages}) => {
    
  return (
    <div className='min-h-[90vh]  border-4 flex items-center justify-center '>
      <div className='w-[80%] min-h-[90%]  relative cursor-pointer group'>
        <img src={projectImg} alt='netflix_bg' className='rounded-3xl w-full h-full '/>
        <div className='rounded-3xl absolute top-0  w-full h-full  hidden group-hover:block bg-custom-linear backdrop-blur-lg'>
           <div className='w-[85%] m-auto border h-full flex flex-col justify-between '>
            {/* UpperSection */}
                <div className='border p-5 h-full'>
                  <h1 className='text-5xl py-5 font-planeItalic font-bold'>{title}</h1>
                  <p className='text-xl w-2/3 font-planeItalic'>{description}</p>
                </div>
                {/* bottomSection */}
                <div className='border flex justify-between p-1 py-10'>
                  <div className='text-3xl'>
                    {
                      techImages?.map((image,index)=>(
                        <div className='border border-gray-800 inline-flex rounded-full mx-2' key={index}>
                        <img src={image} className='h-7 ' alt='react'/>
                        </div>
                          
                      ))
                    }
                                      
                  </div>
                  <div>
                  <button className='text-2xl border'>View Source</button>
                  <button className='text-2xl border'>See It Live</button>

                  </div>
                </div>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
