import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarqueeSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Top Marquee line (glides right to left on scroll down)
      gsap.fromTo(
        '.marquee-line-top',
        { xPercent: 5 },
        {
          xPercent: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        }
      );

      // Middle Playground Marquee line (glides left to right on scroll down)
      gsap.fromTo(
        '.marquee-line-middle',
        { xPercent: -25 },
        {
          xPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        }
      );

      // Bottom Marquee line (glides right to left on scroll down)
      gsap.fromTo(
        '.marquee-line-bottom',
        { xPercent: 5 },
        {
          xPercent: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        }
      );
    },
    { scope: containerRef }
  );

  const topBottomText =
    "Playing / Trying / Sleeping / Failing / Dreaming / Playing / Trying / Sleeping / Failing / Dreaming / Playing / Trying / Sleeping / Failing / Dreaming / Playing / Trying / Sleeping / Failing / Dreaming / ";

  const middleText = Array(12).fill("MY PLAYGROUND \u00A0\u2022\u00A0 ").join("");

  return (
    <section
      ref={containerRef}
      className="overflow-hidden py-16 flex flex-col justify-center select-none w-full relative z-10"
    >
      {/* Top Marquee Line */}
      <div className="overflow-hidden whitespace-nowrap w-full my-1">
        <div className="marquee-line-top text-[clamp(22px,4.5vw,100px)] font-grandSlangRoman whitespace-nowrap text-custom-vanila/85 inline-block">
          {topBottomText}
        </div>
      </div>

      {/* Middle Playground Marquee */}
      <div className="overflow-hidden whitespace-nowrap w-full my-2 pt-4">
        <div className="marquee-line-middle text-[clamp(50px,10vw,140px)] font-grandSlangItalic whitespace-nowrap text-[#d2b99f] inline-block leading-none">
          {middleText}
        </div>
      </div>

      {/* Bottom Marquee Line */}
      <div className="overflow-hidden whitespace-nowrap w-full my-1">
        <div className="marquee-line-bottom text-[clamp(22px,4.5vw,100px)] font-grandSlangRoman whitespace-nowrap text-custom-vanila/85 inline-block">
          {topBottomText}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
