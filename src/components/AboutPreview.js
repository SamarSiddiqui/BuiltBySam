import React from 'react';
import Star_Svg from '../assets/svg/star.svg';
import Profile_Img from '../assets/ProfileImg.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  useGSAP(() => {
    // Star Image Animation
    gsap.to('.star-img', {
      rotate: 270,
      scrollTrigger: {
        trigger: '.star-img',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 0%',
        scrub: true,
      },
    });

    // Profile Image Animation
    gsap.from('.profile-img', {
      scale: 0.5,
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: '.profile-img',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });

    // About Section Animation
    gsap.to('.about-intro', {
      opacity: 1,
      y: -50,
      duration: 10,
      ease: 'power1',
      scrollTrigger: {
        trigger: '.about-intro',
        scroller: 'body',
        start: 'top 90%',
        end: 'top 30%',
        // markers:true,
        scrub: true,
      },
    });

    // SplitContent Paragraphs Animation
    const paragraphs = document.querySelectorAll('.about-section');

    paragraphs.forEach((para) => {
      gsap.from(para, {
        y: 50,
        rotateX: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: para,
          start: 'top 100%',
          end: 'top 80%',
          scrub: true,
        },
      });
    });
  });

  return (
    <div className="min-h-[120vh] flex flex-col">
      {/* Star Image */}
      <div className="w-full h-44 flex justify-center items-end smallerTab:items-center p-5">
        <img
          className="star-img h-12 smallerTab:h-10"
          src={Star_Svg}
          alt="star_svg"
        />
      </div>

      {/* About Me Section */}
      <div className="flex-1 flex">
        <div className="w-full flex smallerTab:block justify-center items-center">
          {/* Profile Section */}
          <div className="h-full w-1/2 flex justify-center items-center smallerTab:w-full smallerTab:h-auto relative">
            {/* Ambient Glow behind profile frame */}
            <div className="absolute w-[18em] h-[24em] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d2b99f]/15 via-transparent to-transparent blur-2xl pointer-events-none" />

            <div className="profile-img group relative p-3 rounded-[65px] bg-neutral-900/60 border border-neutral-800/80 shadow-2xl backdrop-blur-md hover:border-[#d2b99f]/50 transition-all duration-500 max-w-[22em] mx-6">
              <img
                className="w-full h-[26em] object-cover rounded-[55px] shadow-inner group-hover:scale-[1.02] transition-transform duration-500"
                alt="profile_image"
                src={Profile_Img}
              />
            </div>
          </div>

          {/* Intro Section */}
          <div className="about-intro opacity-0 font-migraLight w-1/2 h-full text-[clamp(17px,2.2vw,19px)] smallerTab:w-full smallerTab:flex smallerTab:justify-center smallerTab:h-auto">
            <div className="mt-8 lg:mt-12 w-[85%] max-w-xl proTablet:w-[90%] smallerTab:px-5 tracking-wider break-words">
              {/* Eyebrow Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#d2b99f] animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest text-[#d2b99f] font-planeBold">
                  ABOUT & PHILOSOPHY
                </span>
              </div>

              <p className="about-section text-2xl font-grandSlangRoman text-gray-100 mb-4">
                Nice to <span className="font-migraLightItalic text-[#d2b99f]">meet you.</span>
              </p>
              <p className="about-section leading-relaxed text-gray-300">
                Welcome to my corner of the web. I’m Samar Siddiqui, a passionate self-taught full stack developer who builds complete digital experiences from <span className="font-migraLightItalic text-[#d2b99f]">pixel to production</span>. I craft smooth interfaces with <span className="text-white font-medium">React, Next.js, and GSAP</span> while designing scalable backends in <span className="text-white font-medium">Golang or Node.js</span>.
              </p>
              <p className="about-section leading-relaxed mt-4 text-gray-300">
                I hold a{' '}
                <span className="font-migraLightItalic text-[#d2b99f]">B.Tech</span> degree
                from{' '}
                <span className="font-migraLightItalic text-[#d2b99f]">
                  Aligarh Muslim University
                </span>
                , where my journey into tech began. What started as curiosity and problem-solving has grown into a full stack skill set focused on architecting scalable end-to-end solutions.
              </p>
              <p className="about-section leading-relaxed my-4 text-gray-300">
                As a full stack developer, I focus on creating responsive, high-performance applications with clean architecture and maintainable code. My projects emphasize seamless user experiences and systems designed to scale gracefully.
              </p>
              <p className="about-section leading-relaxed mt-4 mb-3 text-gray-300">
                I’d love the opportunity to collaborate and bring your vision to life — from elegant front-end interactions to solid, scalable back-end architecture. Let’s connect and build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
