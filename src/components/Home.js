import React from "react";
import HeroSection from "./HeroSection";
import AboutPreview from "./AboutPreview";
import BioSection from "./BioSection";
import ProjectsPreview from "./ProjectsPreview";
import VisualImpact from "./VisualImpact";
import Marquee from "react-fast-marquee";

const Home = () => {
 return (
   <div>
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
       
   </div>
 )
}

export default Home;