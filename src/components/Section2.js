import React from 'react'
import Star_Svg from '../assets/star.svg'
import Explore_Img from '../assets/explore.svg'

const Section2 = () => {
  return (
    <div className="h-screen">
         {/* starImage */}
         <div className="w-full h-1/3 flex justify-center items-center">
         <img className="h-14" src={Star_Svg} alt="star_svg"/>
         </div>
         {/* AboutME */}
         <div className="">
           <div className="m-auto  w-[60%] min-h-[50vh]   grid grid-cols-[60%,40%]">
            <div className="flex justify-center  items-end ">
               <p className="break-words text-base mx-10 text-[clamp(20px,1.5vw,40px)] font-planeItalic  ">
               Welcome to my world of creativity and code! I’m a self-taught Frontend Web Developer with a passion for transforming ideas into dynamic digital experiences. With every line of code, I aim to create responsive, user-friendly, and visually stunning websites. Learning new technologies excites me, and I thrive on crafting web solutions that blend innovation with functionality. Let’s build something extraordinary together!</p>
            </div>
             
             {/* ExploreImage */}
            <div className="">
               <div className=" relative   flex justify-center">
               <img className="h-44" src={Explore_Img} alt="explore_more"/>
               <button className="absolute top-[35%] font-migraBoldItalic text-[clamp(20px,2.5vw,30px)] font-bold leading-[1]">Push<br/>Me</button>

               </div>
            </div>
           </div>
         </div>
       </div>
  )
}

export default Section2
