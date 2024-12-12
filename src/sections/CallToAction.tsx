"use client";
import React, {useRef} from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png"
import { motion,useScroll,useTransform } from "motion/react"

export const CallToAction = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target:sectionRef,
        offset: [ 'start end','end start']
    })
    const translateY = useTransform(scrollYProgress, [0,1],[150,-150])
  return <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
              src={starImage.src}
              style={{translateY}}
              alt={starImage}
              width={360}
              height={360}
              className="absolute -top-[137px] -left-[350px]"/>
          <motion.img
              src={springImage.src}
              alt={springImage}
              style={{translateY}}
              width={363}
              height={363}
              className="absolute -right-[331px] -top-[19px]"/>
        </div>
        <div className="flex justify-center mt-10 gap-2">
          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Get for free</button>
          <button className="bg-transparent px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-black gap-1">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5"/>
          </button>
        </div>
    </div>
  </section>
};
