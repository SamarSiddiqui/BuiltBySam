import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero-secton  min-h-[100vh] flex items-center justify-center">
    <div className="hero-title-wrap  mt-20 m-auto w-[85%]  h-full text-center ">
      <div className="">
       <h1 className="uppercase font-planeBold leading-[2] text-[clamp(10px,5vw,15px)] ">Front-End Developer |  Crafting Interfaces</h1>
      </div>
      <div className=" ">
       <h1 className="uppercase text-[clamp(30px,15vw,180px)]  font-grandSlangRoman leading-[1.1]">Building</h1>
      </div>
      <div>
       <h1 className="uppercase text-[clamp(30px,12vw,180px)] font-grandSlangRoman leading-[0.8]">Delightful </h1>
      </div>
      <div>
       <h1 className="font-grandSlangItalic text-[clamp(30px,11vw,130px)] leading-[0.4]">experiences </h1>
      </div>
      <div className="leading-[2.1] flex justify-center items-center">
       <h1 className="font-migraBoldItalic text-[clamp(20px,15vw,35px)]  mr-3">for a</h1>
       <h1 className="text-[clamp(30px,8vw,80px)] font-migraBoldItalic font-extrabold">business world</h1>
      </div>
    </div>
  </div>
  )
}

export default HeroSection
