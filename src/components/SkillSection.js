import React from "react";
import { softSkills,hardSkills } from "../utils/constant";
const SkillSection = ()=> {
    return (
        <div className="min-h-screen text-custom-vanila flex flex-col justify-center">
            {/* heading */}
          <div className=" text-center py-10">
            <h1 className="text-xl font-planeLight font-bold">Personal Skills</h1>
          </div>
            {/* Skills */}
          <div className="  mt-5 flex ">
            {/* softSkills */}
            <div className=" my-10 mx-5">
                <h1 className="text-center text-lg">SOFT</h1>
                <div className="  h-auto flex flex-wrap justify-center px-20">
               {
                softSkills.map((skill,index)=>(
                    <span key={index} className='border border-gray-500 m-2 px-5 text-sm   py-2 rounded-3xl'>{skill}</span>
                ))
               }
                </div>
            </div>
            {/* HardSkills */}
            <div className=" my-10 mx-5">
                <h1 className="text-center text-lg">Hard</h1>
                <div className=" h-auto flex flex-wrap justify-center px-20">
               {
                hardSkills.map((skill,index)=>(
                    <span key={index} className='border border-gray-500 m-2 px-5 text-sm   py-2 rounded-3xl'>{skill}</span>
                ))
               }
                </div>
            </div>
          </div>
        </div>
    )
}

export default SkillSection;