import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeSection = () => {
  return (
    <div className="text-[clamp(20px,12vw,300px)] font-grandSlangItalic uppercase">
         <Marquee className="text-6xl" gradient={false} speed={150}>playing / talking / sleeping / failing / dreaming / </Marquee>
         <Marquee gradient={false} speed={150}>My playgorund</Marquee>
         <Marquee className="text-6xl mb-10" gradient={false} speed={150}>playing / talking / sleeping / failing / dreaming /</Marquee>
      </div>
  )
}

export default MarqueeSection
