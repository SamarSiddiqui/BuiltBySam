import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = ({ref}) => {
  //  const container = useRef()
  // const headingAnimatingLeft = useRef()
  // const headingAnimatingRight = useRef()

  useGSAP(()=>{
    gsap.utils.toArray(".heading").forEach((heading,index)=>{
      gsap.fromTo(heading,{x:index%2===0?100:-100},{
        x:0,
        scrollTrigger:{
          trigger:heading,
          start:"top 100%",
          end:"top 20%",
          // markers:true,
          scrub:true
        }
      })

    })
  },[])




  return (
    <div ref={ref} className="min-h-[100vh] smallerTab:min-h-[95vh] flex items-center ">
    <div className="smallerTab:mb-12 smallerTab:mt-0  mt-10 w-full h-full text-center ">
      <div className=" my-5 hero-heading opacity-0">
       <h2 className=" uppercase font-planeBold leading-[2] text-[clamp(10px,2.5vw,14px)] font-bold  ">Front-End Developer |  Crafting Interfaces</h2>
      </div>
      <div className="hero-heading opacity-0">
       <h1 className="uppercase text-[clamp(55px,11vw,180px)]  font-grandSlangRoman leading-[0.9] largerMobile:leading-[1.1]">Building</h1>
      </div>
      <div className='hero-heading heading mt-2 opacity-0'>
       <h1 className="uppercase text-[clamp(60px,11vw,200px)] font-grandSlangRoman leading-[0.8] largerMobile:leading-[0.8]">Delightful </h1>
      </div>
      <div className='hero-heading heading mt-2 opacity-0'>
       <h1 className="font-grandSlangItalic text-[clamp(50px,10vw,150px)] leading-[0.5] largerMobile:leading-[0.5]">experiences</h1>
      </div>
      <div className="hero-heading  opacity-0 leading-[1.8] mt-1  flex justify-center items-center largerMobile:mt-2 ">
       <h2 className="font-migraLightItalic text-[clamp(5px,7vw,35px)]  mr-3">for a</h2>
       <h1 className="heading text-[clamp(45px,7vw,100px)] font-migraBoldItalic font-extrabold ">business world</h1>
      </div>
    </div>
  </div>
  )
}

export default HeroSection