import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisualImpact = () => {
  const visualHeadings = useRef();

  useGSAP(
    () => {
      gsap.from(".heading-right", {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".heading-right",
          start: "top 80%",
          scrub: true,
        },
      });
      gsap.from(".heading-left", {
        opacity: 0,
        x: -100,
        scrollTrigger: {
          trigger: ".heading-left",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });

      gsap.from(".spinning-star", {
        opacity: 0,
        rotate: 360,
        transformOrigin: "center 60%",
        scrollTrigger: {
          trigger: ".spinning-star",
          start: "top 80%",
          scrub: true,
        },
      });
      gsap.from(".down-arrow", {
        opacity: 0,
        rotate: 90,
        transformOrigin: "10% 20% ",
        scrollTrigger: {
          trigger: ".down-arrow",
          start: "top 75%",
          end: "top 50%",
          scrub: true,
        },
      });

      const lastHeading = document.querySelector(".last-heading");
      const words = lastHeading.textContent.split(" ");
      lastHeading.innerHTML = words
        .map(
          (word) =>
            `<span  style="display:inline-block" class="word">${word}</span>`
        )
        .join(" ");

      gsap.from(".word", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".word",
          start: "top 90%",
          end: "top 55%",
          scrub: true,
        },
      });
    },
    { scope: visualHeadings }
  );

  return (
    <div
      ref={visualHeadings}
      className="visual-headings flex items-center min-h-[100vh] justify-center leading-[1.4] font-grandSlangItalic"
    >
      <div>
        <h1 className="heading-right text-[clamp(52px,12vw,200px)] flex items-center justify-evenly uppercase largerMobile:py-1">
          Designing{" "}
          <span className="">
            <i className="fa-solid fa-asterisk spinning-star text-[clamp(15px,5vw,80px)]"></i>
          </span>
        </h1>

        <h1 className="heading-left text-[clamp(45px,8vw,130px)] pl-20 largerMobile:pl-2 largerMobile:py-3 largerMobile:mx-1">
          Digital{" "}
          <span className="largerMobile:pl-10 largerMobile:block largerMobile:text-center largerMobile:pb-0">
            Landscapes
          </span>{" "}
        </h1>

        <div className="flex justify-evenly text-[clamp(45px,8vw,100px)] largerMobile:leading-[1.5] largerMobile:py-0">
          <h1 className="lowercase">Inspired by</h1>
          <span className="down-arrow">↓</span>
        </div>

        <h1 className="last-heading text-[clamp(60px,10vw,200px)] pl-10 text-center largerMobile:pl-5 largerMobile:text-start ">
          Logic{" "}
          <span className="font-migraLight largerMobile:block largerMobile:text-center largerMobile:pr-10 ">
            &
          </span>{" "}
          <span className="largerMobile:text-center largerMobile:block largerMobile:pl-16 largerMobile:-mt-7">
            Beauty
          </span>
        </h1>
      </div>
    </div>
  );
};

export default VisualImpact;
