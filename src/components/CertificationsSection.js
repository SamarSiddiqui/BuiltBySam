import React, { useState, useRef } from "react";
import { certificationData } from "../utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

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
      gsap.fromTo(
        ".cert-left-heading",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cert-left-heading",
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Tilted Cards Entrance Physics
      gsap.fromTo(
        ".cert-card-container",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cert-cards-grid",
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 relative text-custom-vanila overflow-hidden w-full"
    >
      {/* Background Parallax Marquee Text */}
      <div className="absolute top-1/4 left-0 w-full pointer-events-none opacity-[0.04] z-0 select-none overflow-hidden">
        <h1 className="cert-bg-marquee font-grandSlangItalic text-[clamp(100px,22vw,320px)] whitespace-nowrap leading-none uppercase">
          CERTIFICATIONS &nbsp;&bull;&nbsp; RECOGNITION &nbsp;&bull;&nbsp; CERTIFICATIONS &nbsp;&bull;&nbsp; RECOGNITION &nbsp;&bull;&nbsp;
        </h1>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Sticky Column */}
        <div className="cert-left-heading lg:w-5/12 lg:sticky lg:top-28 self-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#d2b99f] animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-planeBold">
              03 // RECOGNITION & CREDENTIALS
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-grandSlangRoman leading-[1.05] mb-6">
            Continuous <br />
            <span className="font-migraLightItalic text-custom-vanila/90">Growth &</span> <br />
            Excellence.
          </h2>
          <p className="text-gray-400 font-planeItalic text-sm lg:text-base leading-relaxed max-w-md">
            A curated showcase of verified certifications, specialized tracks, and engineering milestones shaping my technical foundation.
          </p>
        </div>

        {/* Right Column Grid - Pure Certificate Images */}
        <div className="cert-cards-grid lg:w-7/12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {certificationData.map((cert, index) => {
            const isOddCard = index % 2 === 0;
            const tiltClass = isOddCard
              ? "-rotate-2 md:-rotate-6"
              : "rotate-2 md:rotate-6";

            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className={`cert-card-container group/img relative rounded-2xl overflow-hidden cursor-pointer border border-neutral-800/80 shadow-2xl transition-all duration-500 ease-out origin-center hover:rotate-0 hover:scale-[1.05] hover:z-20 hover:border-[#d2b99f]/60 hover:shadow-[0_25px_60px_-15px_rgba(210,185,159,0.25)] ${tiltClass}`}
              >
                <img
                  src={cert.certImg}
                  alt={cert.title || "Certificate"}
                  className="w-full h-full object-cover block group-hover/img:scale-105 transition-transform duration-500 rounded-2xl"
                />

                {/* Subtle Hover Inspection Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-black/80 border border-[#d2b99f]/40 text-custom-vanila text-xs font-planeBold flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <span>Inspect Certificate</span>
                    <span className="text-sm">🔍</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden p-6 shadow-2xl flex flex-col gap-4"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs uppercase font-planeBold text-[#d2b99f] block">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-xl font-grandSlangRoman text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center text-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Certificate Image View */}
            <div className="max-h-[65vh] overflow-auto rounded-xl border border-neutral-800 bg-black flex items-center justify-center">
              <img
                src={selectedCert.certImg}
                alt={selectedCert.title}
                className="w-full h-auto object-contain max-h-[60vh]"
              />
            </div>

            {/* Modal Footer Link */}
            {selectedCert.credentialUrl && (
              <div className="pt-2 flex justify-between items-center border-t border-neutral-800/80">
                <span className="text-xs font-mono text-gray-400">
                  ISSUED {selectedCert.date}
                </span>
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-[#d2b99f] text-black text-xs font-planeBold hover:bg-white transition-colors flex items-center gap-1.5"
                >
                  <span>Verify Official Credential</span>
                  <span>↗</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;


