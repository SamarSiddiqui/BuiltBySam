import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarqueeSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Top Marquee line (glides left on scroll down, reverses on scroll up)
      gsap.to('.marquee-line-top', {
        xPercent: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      });

      // Middle Huge Marquee line (glides right on scroll down, reverses on scroll up)
      gsap.to('.marquee-line-middle', {
        xPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      });

      // Bottom Marquee line (glides left on scroll down, reverses on scroll up)
      gsap.to('.marquee-line-bottom', {
        xPercent: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="overflow-hidden py-16 flex flex-col justify-center select-none w-full relative z-10"
    >
      {/* Top Marquee Line */}
      <div className="overflow-hidden whitespace-nowrap w-full my-1">
        <div className="marquee-line-top text-[clamp(22px,4.5vw,260px)] font-grandSlangRoman whitespace-nowrap text-custom-vanila/85 inline-block">
          Playing / Trying / Sleeping / Failing / Dreaming / Playing / Trying / Sleeping / Failing / Dreaming / Playing / Trying / Sleeping / Failing / Dreaming /
        </div>
      </div>

      {/* Middle Huge Playground Marquee */}
      <div className="overflow-hidden whitespace-nowrap w-full my-2">
        <div className="marquee-line-middle text-[clamp(65px,14vw,100px)] font-grandSlangItalic whitespace-nowrap text-[#d2b99f] inline-block -ml-[30%] leading-none">
          MY PLAYGROUND &nbsp;&bull;&nbsp; MY PLAYGROUND &nbsp;&bull;&nbsp; MY PLAYGROUND &nbsp;&bull;&nbsp; MY PLAYGROUND &nbsp;&bull;&nbsp;
        </div>
      </div>

      {/* Bottom Marquee Line */}
      <div className="overflow-hidden whitespace-nowrap w-full my-1">
        <div className="marquee-line-bottom text-[clamp(22px,4.5vw,64px)] font-grandSlangRoman whitespace-nowrap text-custom-vanila/85 inline-block">
          Dreaming / Failing / Playing / Trying / Sleeping / Dreaming / Failing / Playing / Trying / Sleeping / Dreaming / Failing / Playing / Trying / Sleeping /
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
