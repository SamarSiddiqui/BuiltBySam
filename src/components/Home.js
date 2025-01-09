import React from "react";
import HeroSection from "./HeroSection";
import AboutPreview from "./AboutPreview";
import BioSection from "./BioSection";
import ProjectsPreview from "./ProjectsPreview";
import VisualImpact from "./VisualImpact";
import Marquee from "react-fast-marquee";
import MarqueeSection from "./MarqueeSection";
import SkillSection from "./SkillSection";
import Contact from "./Contact";
import useLenis from "../utils/useLenis";

const Home = () => {
   
   useLenis()
 return (
   <div className=" relative overflow-x-hidden">
      {/* customCursor */}
     
      <HeroSection/>
      <AboutPreview/>
      <VisualImpact/>
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
   </div>
 )
}

export default Home;