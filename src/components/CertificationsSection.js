import React from "react";
import { certificationData } from "../utils/constant";

const CertificationsSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 max-w-7xl mx-auto relative text-custom-vanila">
      {/* 2-Column Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Sticky Column */}
        <div className="lg:w-5/12 lg:sticky lg:top-28 self-start">
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
        <div className="lg:w-7/12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {certificationData.map((cert, index) => {
            const isOddCard = index % 2 === 0;
            const tiltClass = isOddCard
              ? "-rotate-2 md:-rotate-6"
              : "rotate-2 md:rotate-6";

            return (
              <div
                key={cert.id}
                className={`cert-card-container group relative p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 ease-out origin-center hover:rotate-0 hover:scale-[1.04] hover:z-20 hover:border-[#d2b99f]/40 hover:shadow-[0_20px_50px_rgba(210,185,159,0.12)] ${tiltClass}`}
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
