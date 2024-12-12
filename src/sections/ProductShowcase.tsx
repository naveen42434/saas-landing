"use client";
import React, {useRef} from "react";
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
import {motion, useScroll, useTransform} from "motion/react"

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target:sectionRef,
    offset: [ 'start end','end start']
  })
  const translateY = useTransform(scrollYProgress, [0,1],[150,-150])

  return <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="max-w-[540px] mx-auto">
        <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>
        </div>
        <h2 className="section-title mt-5">
          A more effective way to track progress
        </h2>
        <p className="section-description mt-5">
          Effortlessly turn your ideas into a fully functional, responsive, SaaS
          website in just minutes with this template.
        </p>
      </div>
      <div className="relative">
        <Image src={productImage} alt={productImage} className="mt-10"/>
        <motion.img
            src={pyramidImage.src}
            alt={pyramidImage}
            width={262}
            height={262}
            style={{translateY}}
            className="hidden md:block absolute -top-32 -right-36"/>
        <motion.img
            src={tubeImage.src}
            alt={tubeImage}
            width={248}
            height={248}
            style={{translateY}}
            className="hidden md:block absolute bottom-24 -left-36"/>
      </div>
    </div>
  </section>
};
