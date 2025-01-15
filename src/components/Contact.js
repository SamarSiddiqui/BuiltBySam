import React, {useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {useMagneticEffect, useMultipleMagneticEffect} from '../hooks/useMagneticEffect'
import { handleDownload } from '../utils/constant'

gsap.registerPlugin(ScrollTrigger)
const Contact = () => {
  
useMagneticEffect('.contact-container','.contact-btn')
useMagneticEffect('.resume-container','.resume-btn')
useMultipleMagneticEffect('.footer-icon-container','.footer-icon')
 
  const scopeContainer = useRef()
  useGSAP(()=>{
    gsap.from('.heading-right',{
      rotateX:-90,
      rotateY:50,
      opacity:0,
      duration:2,
      scrollTrigger:{
       trigger:".heading-right",
      //  markers:true,
       start:"top 60%",
       end:"top 20%",
      //  scrub:true
      }
   })
    //HeadingAnimations
    gsap.from('.heading-right',{
       x:-20,
       duration:2,
       scrollTrigger:{
        trigger:".heading-right",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:true
       }
    })   

    gsap.from('.heading-left',{
      x:60,
      opacity:0,
      duration:2,
     //  ease:"power4.in",
      scrollTrigger:{
       trigger:".heading-left",
      //  markers:true,
       start:"top 90%",
       end:"top 50%",
       scrub:true
      }
      
   }) 

   gsap.from(".middle-heading",{
    rotateX:-90,
      rotateY:-30,
      opacity:0,
      duration:2,
      scrollTrigger:{
       trigger:".middle-heading",
      //  markers:true,
       start:"top 80%",
       end:"top 20%",
      //  scrub:true
      }
   })
  //  gsap.from(".heading-left",{
  //   scale:0.5,
  //     opacity:0,
  //     duration:2,
  //     scrollTrigger:{
  //      trigger:".heading-left",
  //      markers:true,
  //      start:"top 90%",
  //      end:"top 10%",
  //      scrub:true
  //     }
  //  })

  
  gsap.to('.btn-anim',{
    y:-30,
//  rotate:360,
 ease:"power1.out",
 duration:5,
    scrollTrigger:{
     trigger:".btn-anim",
    //  markers: true,
     start:"top bottom",
     // end:"top 20%",
     scrub:true
    }

 })   
  gsap.to('.btn-anim',{
    y:-3,
    repeat:-1,
    yoyo:true,
//  rotate:360,
 ease:"power1.out",
//  duration:5

 })   

  },{scope:scopeContainer})

  return (
    <div ref={scopeContainer} className='min-h-screen flex flex-col'>
      {/* AnimatedHeading */}
      <div className='py-3'>
        <div className=' flex flex-col items-center font-migraLightItalic  smallerTab:py-14'>
          {/* first-line */}
          <div className=' flex gap-10 mt-5  leading-[0.8] largerMobile:leading-[1.1] largerMobile:items-center largerMobile:gap-3 '>
            <div className='text-[clamp(45px,5vw,100px)]  flex items-center text-right'>Lets<br/>create</div>
            <h1 className='heading-right text-[clamp(65px,12vw,200px)]'>something</h1>
          </div>
          {/* second-line */}
          <div className='text-[clamp(70px,15vw,200px)] leading-[1] '>
            <h1 className='middle-heading largerMobile:leading-[1.1]'>MEANINGFUL</h1>
          </div>
          {/* thrid-line */}
          <div className='heading-left flex items-center'>
            <h1 className='font-bold text-[clamp(36px,5vw,80px)] leading-[0.1] largerMobile:leading-[1] px-1'>TOGETHER</h1>
            <div className='font-bold text-[clamp(25px,5vw,80px)] ml-2'>(but not forever)</div>
          </div>
        </div>
        <div className='justify-center  flex items- font-planeBold btn-anim'>
          <div className=' px-3 contact-container'>
          <button className='contact-btn py-3.5 px-9 my-7 rounded-full text-black bg-custom-vanila text-sm font-normal font-planeBold largerMobile:m-14 largerMobile:px-[2.5rem]'><a href='mailto:samar.r.siddiqui@gmail.com '>CONTACT ME 👋🏻</a></button>
          </div>
        </div>
      </div>

      {/* SocialIcons */}
      <div className=' font-planeBold h-full flex-1 flex flex-col justify-between '>
        <div className='  smallerTab:flex-1 flex justify-between items-center  proTablet:flex  proTablet:flex-col smallerTab:justify-center'>
          <div className='mx-4 text-black px-2 text-xl'>
            {/* Instagram */}
          <a href='https://www.instagram.com/samsid__?igsh=MTgxMHpoY3prZzNkMQ==' className='footer-icon-container' target='blank'>
        <i className="fa-brands fa-instagram footer-icon  rounded-full px-3 py-2.5  mx-2 bg-custom-vanila cursor-pointer"></i>
        </a>
        {/* Twitter */}
		<a href='https://x.com/samsid__?t=td35lKcr2eFGflbmhChFHw&s=09' className='footer-icon-container' target='blank'>
        <i className="fa-brands fa-x-twitter footer-icon rounded-full p-2.5  mx-2 bg-custom-vanila  cursor-pointer"></i>
        </a>
        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' className='footer-icon-container' target='blank' rel='noopener noreferrer'>        
        <i className="fa-brands fa-linkedin-in footer-icon  rounded-full px-3 py-2.5  mx-2 bg-custom-vanila cursor-pointer"></i>
        </a>
        {/* GitHub */}
        <a href='https://github.com/SamarSiddiqui' className='footer-icon-container' target='blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-github footer-icon  rounded-full px-3 py-2.5   mx-2 bg-custom-vanila cursor-pointer"></i>
        </a>
          </div>
          <div className=' resume-container px-2 proTablet:mt-5'>
            <button className='mx-5 resume-btn  py-2 px-5 rounded-full  text-sm text-black bg-custom-vanila font-bold cursor-pointer' onClick={handleDownload}>RESUME<i className="fa-solid fa-download ml-2 "></i></button>
          </div>
        </div>
        <div className='text-center text-sm mb-1 text-white'>Samar Siddiqui 2025 🖤</div>
      </div>
    </div>
  )
}

export default Contact
