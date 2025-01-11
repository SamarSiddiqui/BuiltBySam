import React from 'react'
import Star_Svg from '../assets/svg/star.svg'
import Profile_Img from '../assets/ProfileImg.jpg'
const AboutPreview = ({starRef}) => {
  
  
  return (
    <div className="min-h-[120vh] flex flex-col">
         {/* starImage */}
         <div className="w-full h-40 flex justify-center p-5">
         <img className="star-img h-14 smallerTab:h-10" src={Star_Svg} alt="star_svg"/>
         </div>
         {/* AboutME */}
         <div className=" flex-1 flex ">
           <div className=' w-full flex  smallerTab:block justify-center'>
            {/* Profile */}
            <div className=' h-full w-1/2 flex justify-center   smallerTab:w-full smallerTab:h-96'>
               <div className='h-2/3  w-[20em] mx-6  smallerTab:h-96'>
               <img className='w-full h-full object-cover rounded-[70px] ' alt='profile_image' src={Profile_Img}/>
               </div>
            </div>
            {/* Intro */}
            <div className='font-migraLight w-1/2  h-full text-[clamp(18px,2.5vw,19px)] smallerTab:w-full smallerTab:flex smallerTab:justify-center smallerTab:h-auto'>
              <div className='mt-16 w-[55%] proTablet:w-[90%] smallerTab:px-5 '>
                
             <p className='my-1'>
               Nice to <span className='font-migraLightItalic'>meet you</span> all.
               </p>
               <p className='leading-5'>
               Welcome to my creative corner of the web. I’m Samar Siddiqui, a passionate and self-taught front-end developer with a knack for crafting engaging digital experiences. Whether it’s breathing life into static designs or experimenting with new tools and technologies, I’m always excited to turn ideas into reality.
               </p>
               <p className='leading-5 mt-2'>
               I hold a <span className='font-migraLightItalic'>B.Tech</span>  degree from <span className='font-migraLightItalic'>Aligarh Muslim University</span>, where my journey into the tech world began. Initially drawn by curiosity and a love for problem-solving, I’ve steadily honed my skills in front-end development. From exploring HTML and CSS basics to diving deep into advanced frameworks, my path has been fueled by a mix of determination and endless learning.
               </p>
               <p className='leading-5 my-2'>
               As a budding front-end developer, I’ve focused on creating responsive, visually appealing, and user-friendly interfaces. My projects reflect my commitment to clean code, attention to detail, and a seamless user experience.
               </p>
               <p className='leading-5 mt-3 mb-3'>
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
