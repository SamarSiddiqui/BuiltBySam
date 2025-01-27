import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BioSection = () => {
  useGSAP(() => {
    // Select all inspiring text elements
    const inspiringTexts = document.querySelectorAll('.inspiring-text');
    
    inspiringTexts.forEach((inspiringText) => {
      let words = inspiringText.textContent.split(' '); // Split text into words
      let clutter = '';
      
      // Wrap each word and letter
      words.forEach((word) => {
        clutter += `<span class="word inline-block">`; // Wrap each word
        word.split('').forEach((letter) => {
          clutter += `<span class="letter inline-block">${letter}</span>`; // Wrap each letter
        });
        clutter += `</span> `; // Close the word span and add a space
      });

      // Update the paragraph with the wrapped content
      inspiringText.innerHTML = clutter;
    });

    // Animation for each letter
    gsap.from('.letter', {
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.letter',
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
      },
    });

    // Animation for the left paragraph
    gsap.from('.left-para', {
      y: 100,
      duration: 2,
      ease: 'power1',
      scrollTrigger: {
        trigger: '.left-para',
        start: 'top 90%',
        end: 'top 40%',
        scrub: true,
      },
    });
  });

  return (
    <div className="min-h-screen flex largerMobile:block largerMobile:mb-10">
      {/* Left Section */}
      <div className="w-1/2 flex-1 flex justify-center largerMobile:w-full largerMobile:h-1/2">
        <div className="w-2/3 proTablet:w-[80%] mt-20 text-[clamp(20px,4.5vw,40px)] font-migraLight leading-[1.2] largerMobile:text-4xl">
          <p className="left-para">
            Living my dream of{' '}
            <span className="font-grandSlangBold italic font-normal">
              creating
            </span>{' '}
            something{' '}
            <span className="font-grandSlangBold italic font-normal">
              meaningful
            </span>
            , one line of code at a time, with an{' '}
            <span className="font-grandSlangBold italic font-normal">
              eye on Innovation and Endless Possibilities.
            </span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-1 items-center pt-20 justify-center largerMobile:w-full largerMobile:h-1/2">
        <div className="h-1/2 w-2/3 proTablet:w-[90%] font-planeBold text-[clamp(10px,2vw,18px)] largerMobile:text-lg my-5">
          <p className="break-words mb-5 inspiring-text">
            I live in Lucknow, India — a city rich in culture and history. My
            journey into programming sparked during the last year of my college,
            where curiosity and logic led me to explore the art of coding.
          </p>
          <p className="inspiring-text">
            Driven by a passion for understanding how things work behind the
            scenes, I found my calling in front-end development. My goal is
            simple yet profound: to make the internet a more beautiful,
            functional, and engaging place for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioSection;
