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
   <div className="relative overflow-x-hidden">
      {/* <div className="w-10 h-10 bg-zinc-400 fixed top-0"></div> */}
      <HeroSection/>
      <AboutPreview/>
      <VisualImpact/>
      <BioSection/>
      {/* Marquee */}
      <div className="text-[clamp(20px,12vw,300px)] font-grandSlangItalic uppercase flex items-center">
         <Marquee gradient={false} speed={200} className="" pauseOnHover={false}>
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