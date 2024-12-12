"use client";
import React, {useRef} from "react";
import ArrowRight from "@/assets/arrow-right.svg"
import cogImage from '@/assets/cog.png'
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import {motion, useScroll, useTransform} from "motion/react"

export const Hero = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target:sectionRef,
        offset: [ 'start end','end start']
    })
    const translateY = useTransform(scrollYProgress, [0,1],[150,-150])

  return(
   <section ref={sectionRef} className="pt-8 pb-8 md:pt-5 md:pb-12 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
     <div className="container">
       <div className="md:flex items-center">
         <div className="md:w-[478px]">
           <div className="tag">
             Version 2.0 is here
           </div>
           <h1 className=" text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to Productivity</h1>
           <p className="text-xl text-[#010D3E] tracking-tight mt-6">
             Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
           </p>
           <div className="flex items-center mt-[30px] gap-1">
             <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Get for free</button>
             <button className="bg-transparent px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-black gap-1">
               <div>
                 Learn More
               </div>
               <div className="h-5 w-5">
                 <ArrowRight/>
               </div>
             </button>
           </div>
         </div>
         <div className="mt-20 md:mt-0 md:flex-1 md:h-[648px] relative">
           <motion.img
               src={cogImage.src}
               alt="Cog Image"
               className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
               animate={{translateY: [-30,30]}}
               transition={{
                 repeat:Infinity,
                 repeatType:"mirror",
                 duration:3,
                 ease:"easeInOut"
               }}
           />
           <motion.img
               src={cylinderImage.src}
               width={220}
               height={220}
               alt={"cylinderImage"}
               style={{
                   translateY
               }}
               className="hidden md:block -top-8 -left-32 md:absolute"/>
           <motion.img
               src={noodleImage.src}
               width={220}
               height={220}
               alt={"noodleImage"}
               style={{translateY}}
               className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"/>
         </div>

       </div>
     </div>
   </section>
  )
}