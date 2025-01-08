import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero-secton  min-h-[100vh] flex items-center ">
    <div className="hero-title-wrap w-full h-full text-center ">
      <div className=" my-5">
       <h1 className="uppercase font-planeBold leading-[2] text-[clamp(10px,2.5vw,14px)] font-bold ">Front-End Developer |  Crafting Interfaces</h1>
      </div>
      <div className=" ">
       <h1 className="uppercase text-[clamp(45px,11vw,180px)]  font-grandSlangRoman leading-[0.9]">Building</h1>
      </div>
      <div className=' mt-2'>
       <h1 className="uppercase text-[clamp(45px,11vw,200px)] font-grandSlangRoman leading-[0.8]">Delightful </h1>
      </div>
      <div className=' mt-2'>
       <h1 className="font-grandSlangItalic text-[clamp(45px,10vw,150px)] leading-[0.5]">experiences</h1>
      </div>
      <div className="leading-[1.8] mt-1  flex justify-center items-center ">
       <h1 className="font-migraLightItalic text-[clamp(5px,7vw,35px)]  mr-3">for a</h1>
       <h1 className="text-[clamp(35px,7vw,100px)] font-migraBoldItalic font-extrabold">business world</h1>
      </div>
    </div>
  </div>
  )
}

export default HeroSection
