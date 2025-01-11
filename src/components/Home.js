import React, { useRef, useState } from "react";
import HeroSection from "./HeroSection";
import AboutPreview from "./AboutPreview";
import BioSection from "./BioSection";
import ProjectsPreview from "./ProjectsPreview";
import VisualImpact from "./VisualImpact";
import Marquee from "react-fast-marquee";
import MarqueeSection from "./MarqueeSection";
import SkillSection from "./SkillSection";
import Contact from "./Contact";
import Loader from "./Loader";
import gsap from "gsap";

const Home = () => {  
  const [loaderAnimation,setLoaderAnimation] = useState(false)

   // const starRef = useRef()
   
   const handleLoaderComplete = ()=>{
   const headings = document.querySelectorAll('.hero-heading')
   gsap.fromTo(headings,
      {opacity:0,y:100,scale:0.5}, //Initial state
      {
         opacity:1,
         y:0,
         scale:1,
         stagger:0.2,
         duration:1,
         ease:"power2.out",
         onComplete:()=>starAnimation()
         
      } )
   
  }

 const starAnimation = ()=> {
  gsap.to('.star-img',{
   y:-120,
   rotate:360,
   ease:"power1.out",
   duration:2
  })
 }

 return (
   <div className=" relative overflow-x-hidden">  
      <Loader onComplete={handleLoaderComplete} setLoaderAnimation={setLoaderAnimation}/>
      <HeroSection/>

      { loaderAnimation &&
      <>
      <AboutPreview />
      <VisualImpact />
      <BioSection/>
      {/* Marquee */}
      <div className="text-[clamp(50px,12vw,300px)] font-grandSlangItalic uppercase flex items-center mb-10">
         <Marquee gradient={false} speed={150} className="" pauseOnHover={false}>
         Projects <span>.</span> Projects .
         </Marquee>
      </div>
     
      <ProjectsPreview/>
      <MarqueeSection/>
      <SkillSection/>
      <Contact/>
      </>
      }
   </div>
 )
}

export default Home;