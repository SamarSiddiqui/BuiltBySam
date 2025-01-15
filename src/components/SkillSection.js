import React, { useRef } from "react";
import { softSkills,hardSkills } from "../utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillSection = ()=> {
   const skillContainer = useRef()
    useGSAP(()=>{
      gsap.from('.skill-heading',{
        y:100,
        opacity:0.5,  
        duration:1,   
        ease:"power1",
        scrollTrigger:{
          trigger:'.skill-heading',
          start:"top 100%",
          // markers:true,
          end:"top 70%",
          scrub:true
        }
      })

      gsap.from('.skills',{
        y:100,
        opacity:0,
        scale:0.6,
        duration:1,
        scrollTrigger:{
          trigger:'.skills',
          start:"top 90%",
          end:"top 50%",
          // markers:true,
          scrub:true
        }
      })
      
    },{scope:skillContainer})
    return (
        <div ref={skillContainer} className="min-h-screen  text-custom-vanila flex flex-col justify-center smallerTab:justify-normal">
            {/* heading */}
          <div className=" text-center  py-10">
            <h1 className="skill-heading text-xl font-planeLight font-bold">Personal Skills</h1>
          </div>
            {/* Skills */}
          <div className="  mt-5 flex smallerTab:block">
            {/* softSkills */}
            <div className="skills my-10 mx-4  ">
                <h1 className="text-center text-lg smallerTab:my-2 ">SOFT</h1>
                <div className="  h-auto flex flex-wrap justify-center px-20 proTablet:px-0">
               {
                softSkills.map((skill,index)=>(
                    <span key={index} className='border border-gray-500 text-gray-300 m-2 px-5 text-sm   py-2 rounded-3xl largerMobile:text-[10px] largerMobile:m-1 largerMobile:px-2 largerMobile:rounded-xl'>{skill}</span>
                ))
               }
                </div>
            </div>
            {/* HardSkills */}
            <div className="skills my-10 mx-4 ">
                <h1 className="text-center text-lg smallerTab:my-2">Hard</h1>
                <div className=" h-auto flex flex-wrap justify-center px-20 proTablet:px-0">
               {
                hardSkills.map((skill,index)=>(
                    <span key={index} className='border text-gray-300 border-gray-500 m-2 px-5 text-sm   py-2 rounded-3xl largerMobile:text-[10px] largerMobile:m-1 largerMobile:px-2 largerMobile:rounded-xl'>{skill}</span>
                ))
               }
                </div>
            </div>
          </div>
        </div>
    )
}

export default SkillSection;