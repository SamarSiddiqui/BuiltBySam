import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeSection = () => {
  return (
    <div>
         <Marquee className="text-[clamp(20px,5vw,180px)] my-1 font-grandSlangRoman " gradient={false} speed={150}>&nbsp;Playing / Talking / Sleeping / Failing / Dreaming / </Marquee>
         <Marquee className='mx-1 text-[clamp(20px,10vw,300px)] font-grandSlangItalic' gradient={false} speed={150}> MY PLAYGROUND&nbsp;&nbsp;</Marquee>
         <Marquee className="font-grandSlangRoman text-[clamp(20px,5vw,180px)] mb-10" gradient={false} speed={150}>&nbsp;Playing / Talking / Sleeping / Failing / Dreaming /</Marquee>
      </div>
  )
}

export default MarqueeSection
