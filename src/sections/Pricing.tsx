"use client";
import CheckIcon from "@/assets/check.svg"
import {twMerge} from "tailwind-merge";
import { motion } from "motion/react"

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return <section className="py-24 bg-white">
    <div className="container">
      <div className="max-w-[540px] mx-auto">
        <h2 className="section-title">
          Pricing
        </h2>
        <p className="section-description mt-5">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 mt-10 lg:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map(({title,monthlyPrice,buttonText,popular,inverse,features})=>(
            <div className={twMerge("card",inverse===true && "border-black bg-black text-white")}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50",inverse===true && "text-white/60")}>{title}</h3>
                {popular === true && (
                    <div className="text-sm inline-flex px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                          animate={{backgroundPositionX:"100%"}}
                          transition={{
                            duration:1.5,
                            repeat:Infinity,
                            repeatType:"loop",
                            ease:"linear",
                          }}
                          className="bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF,#8BCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                        Most Popular
                      </motion.span>
                    </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className={twMerge("text-4xl font-bold text-black tracking-tight leading-none",inverse===true && "text-white")}>${monthlyPrice}</span>
                <span className={twMerge("text-base font-bold text-black/50 tracking-tight",inverse===true && "text-white/50")}>/month</span>
              </div>
              <button className={twMerge("bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full mt-[30px]",inverse===true && "bg-white text-black")}>{buttonText}</button>
              <ul className="flex flex-col mt-8 gap-5">
                {features.map((feature)=>(
                    <li className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6"/>
                      {feature}
                    </li>
                ))}
              </ul>
            </div>
        ))}
      </div>
    </div>
  </section>
};
