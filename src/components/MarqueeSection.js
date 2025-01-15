import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarqueeSection = () => {
  const middleMarqueeRef = useRef(null);
  const [marqueeDirection, setMarqueeDirection] = useState('left');
  const [marqueeDirection2, setMarqueeDirection2] = useState('right');

  useGSAP(() => {
    const marquee = middleMarqueeRef.current;

    gsap.to(marquee, {
      scrollTrigger: {
        trigger: marquee,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
        onUpdate:(self)=>{
          const direction = self.direction
          if(direction===1){
            setMarqueeDirection('left')
            setMarqueeDirection2('right')
                 
        } else{
          setMarqueeDirection('right')
          setMarqueeDirection2('left')
        }
      },
      },
    });
  });

  return (
    <div className="overflow-hidden  flex flex-col justify-center">
      <Marquee
        className="text-[clamp(20px,5vw,70px)] my-1 font-grandSlangRoman"
        gradient={false}
        speed={50}
        direction={marqueeDirection2}
      >
        &nbsp;Playing / Talking / Sleeping / Failing / Dreaming /
      </Marquee>
      <div className="overflow-hidden">
        <Marquee
          ref={middleMarqueeRef}
          className="mx-1 text-[clamp(20px,10vw,300px)] font-grandSlangItalic"
          gradient={false}
          direction={marqueeDirection}
          speed={50}>
          MY PLAYGROUND&nbsp;&nbsp;MY PLAYGROUND&nbsp;&nbsp;
        </Marquee>
      </div>
      <Marquee
        className="font-grandSlangRoman text-[clamp(20px,5vw,70px)] mb-10"
        gradient={false}
        speed={50}
        direction={marqueeDirection2}
      >
        &nbsp;Dreaming / Failing / Playing / Talking / Sleeping /
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
