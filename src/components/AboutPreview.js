import React from 'react'
import Star_Svg from '../assets/svg/star.svg'
import Profile_Img from '../assets/ProfileImg.jpg'
const AboutPreview = () => {
  return (
    <div className="h-screen ">
         {/* starImage */}
         <div className="w-full h-1/5 flex justify-center items-center">
         <img className="h-14" src={Star_Svg} alt="star_svg"/>
         </div>
         {/* AboutME */}
         <div className=" h-4/5">
           <div className='w-[70%] h-full  m-auto grid grid-cols-[55%,45%]'>
            {/* Profile */}
            <div className=' h-full flex justify-center'>
               <div className='h-[80%] w-1/2  '>
               <img className='w-full h-full object-cover rounded-[50px]' alt='profile_image' src={Profile_Img}/>
               </div>
            </div>
            {/* Intro */}
            <div className=' font-migraLight   h-full text-[clamp(10px,5vw,19px)] flex items-end'>
              <div className=''>
              <p className='my-2'>
               Hi and Welcome!
               </p>
               <p className='leading-6'>
               Welcome to my creative corner of the web. I’m Samar Siddiqui, a passionate and self-taught front-end developer with a knack for crafting engaging digital experiences. Whether it’s breathing life into static designs or experimenting with new tools and technologies, I’m always excited to turn ideas into reality.
               </p>
               <p className='leading-6 mt-1'>
               I hold a B.Tech degree from Aligarh Muslim University, where my journey into the tech world began. Initially drawn by curiosity and a love for problem-solving, I’ve steadily honed my skills in front-end development. From exploring HTML and CSS basics to diving deep into advanced frameworks, my path has been fueled by a mix of determination and endless learning.
               </p>
               <p className='leading-5 my-2'>
               As a budding front-end developer, I’ve focused on creating responsive, visually appealing, and user-friendly interfaces. My projects reflect my commitment to clean code, attention to detail, and a seamless user experience.
               </p>
               <p className='leading-5 mt-6 mb-3'>
               I’d love the opportunity to collaborate and bring your vision to life. Let’s connect and create something amazing together!
               </p>
              </div>
           
            </div>
               
           </div>
         </div>
       </div>
  )
}

export default AboutPreview
