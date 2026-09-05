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
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });

    // About Section Animation
    gsap.fromTo(
      '.about-intro',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.about-intro',
          start: 'top 90%',
          end: 'top 40%',
          scrub: true,
        },
      }
    );

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
          <div className="h-full w-1/2 flex justify-center smallerTab:w-full smallerTab:h-auto smallerTab:mb-8">
            <div className="w-[16em] sm:w-[20em] h-[20em] sm:h-[24em] mx-6">
              <img
                className="profile-img w-full h-full object-cover rounded-[45px] sm:rounded-[70px]"
                alt="profile_image"
                src={Profile_Img}
              />
            </div>
          </div>

          {/* Intro Section */}
          <div className="about-intro opacity-0 font-migraLight w-1/2 h-full text-[clamp(17px,2.2vw,19px)] smallerTab:w-full smallerTab:flex smallerTab:justify-center smallerTab:h-auto">
            <div className="mt-2 sm:mt-8 lg:mt-12 w-[85%] max-w-xl proTablet:w-[90%] smallerTab:px-5 tracking-wider break-words">
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
                Welcome to my corner of the web. I’m Samar Siddiqui, a passionate self-taught full stack developer who builds complete digital experiences from <span className="font-migraLightItalic text-[#d2b99f]">pixel to production</span>. I craft smooth interfaces with <span className="text-white font-medium">React, Next.js, and GSAP</span> while designing scalable backends in <span className="text-white font-medium">Golang or Node.js</span>, continuously expanding into <span className="text-white font-medium">AI & intelligent systems</span>.
              </p>
              <p className="about-section leading-relaxed mt-4 text-gray-300">
                I hold a{' '}
                <span className="font-migraLightItalic text-[#d2b99f]">B.Tech</span> degree
                from{' '}
                <span className="font-migraLightItalic text-[#d2b99f]">
                  Aligarh Muslim University
                </span>
                , where my journey into tech began. What started as curiosity and problem-solving has grown into a full stack skill set focused on architecting scalable end-to-end solutions and leveraging modern AI workflows.
              </p>
              <p className="about-section leading-relaxed mt-4 mb-3 text-gray-300">
                As a full stack developer, I focus on creating responsive, high-performance applications with clean architecture and maintainable code. I’d love the opportunity to collaborate and bring your vision to life — from elegant front-end interactions to solid, scalable back-end architecture and AI-enhanced features. Let’s connect and build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
