import React, { useRef } from "react";
import { certificationData } from "../utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // 1. Horizontal Marquee Parallax Text
      gsap.to(".cert-bg-marquee", {
        xPercent: -35,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // 2. Left Heading Reveal
      gsap.from(".cert-left-heading", {
        x: -60,
        opacity: 0,
        scrollTrigger: {
          trigger: ".cert-left-heading",
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
        },
      });

      // 3. Tilted Cards Bottom-Left Entrance Physics
      gsap.from(".cert-card-container", {
        x: -80,
        y: 120,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".cert-cards-grid",
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 px-6 max-w-7xl mx-auto relative text-custom-vanila overflow-hidden"
    >
      {/* Background Parallax Marquee Text */}
      <div className="absolute top-1/4 left-0 w-full pointer-events-none opacity-5 z-0 select-none overflow-hidden">
        <h1 className="cert-bg-marquee font-grandSlangItalic text-[clamp(100px,22vw,320px)] whitespace-nowrap leading-none uppercase">
          CERTIFICATIONS &nbsp;&bull;&nbsp; RECOGNITION &nbsp;&bull;&nbsp; CERTIFICATIONS &nbsp;&bull;&nbsp;
        </h1>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Sticky Column */}
        <div className="cert-left-heading lg:w-5/12 lg:sticky lg:top-28 self-start">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold block mb-3">
            03 // RECOGNITION & CREDENTIALS
          </span>
          <h2 className="text-[clamp(32px,5vw,64px)] font-grandSlangRoman leading-[1.05] mb-6">
            Continuous <br />
            <span className="font-migraLightItalic text-custom-vanila/90">Growth &</span> <br />
            Excellence.
          </h2>
          <p className="text-gray-400 font-planeItalic text-sm lg:text-base leading-relaxed max-w-md">
            A curated showcase of verified certifications, specialized tracks, and engineering milestones shaping my technical foundation.
          </p>
        </div>

        {/* Right Column Grid */}
        <div className="cert-cards-grid lg:w-7/12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {certificationData.map((cert, index) => {
            const isOddCard = index % 2 === 0;
            const tiltClass = isOddCard
              ? "-rotate-2 md:-rotate-6"
              : "rotate-2 md:rotate-6";

            return (
              <div
                key={cert.id}
                className={`cert-card-container group relative p-6 rounded-2xl bg-neutral-900/75 border border-neutral-800/80 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 ease-out origin-center hover:rotate-0 hover:scale-[1.04] hover:z-20 hover:border-[#d2b99f]/40 hover:shadow-[0_20px_50px_rgba(210,185,159,0.12)] ${tiltClass}`}
              >
                {/* Top Section: Issuer, Date, & Badge */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative p-1 rounded-xl bg-black/50 border border-neutral-800/80 group-hover:border-[#d2b99f]/40 transition-colors">
                        <img
                          src={cert.badgeImg}
                          alt={cert.issuer}
                          className="w-10 h-10 rounded-lg object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-planeBold text-gray-400 block uppercase tracking-wider group-hover:text-custom-vanila transition-colors">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono">
                          ISSUED {cert.date}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-400 bg-neutral-800/60 px-2.5 py-1 rounded-full border border-neutral-800/80 group-hover:border-[#d2b99f]/30 transition-colors">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-grandSlangRoman mb-3 text-gray-100 group-hover:text-custom-vanila transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Bottom Tags & Verification Link */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-planeLight px-2.5 py-0.5 rounded-md bg-neutral-800/40 text-gray-400 border border-neutral-800/60 group-hover:border-neutral-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-custom-vanila/80 hover:text-white font-planeBold mt-2 transition-colors self-start group/link"
                    >
                      <span>Verify Credential</span>
                      <span className="text-sm transform group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;

