import Logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return <section className="bg-black text-[#BCBCBC]">
    <div className="container py-10">
      <div className="flex flex-col items-center">

        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:absolute before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
          <Image src={Logo} alt={"Saas Logo"} height={"40"} className="relative"/>
        </div>

        <nav className="flex flex-col md:flex-row gap-6 items-center mt-6">
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Customers</a>
          <a href='#'>Pricing</a>
          <a href='#'>Help</a>
          <a href='#'>Careers</a>
        </nav>

        <div className="mt-6 flex flex-row justify-center gap-4">
          <SocialX/>
          <SocialInsta/>
          <SocialLinkedIn/>
          <SocialPin/>
          <SocialYoutube/>
        </div>

        <div className="mt-6 text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </div>

      </div>
    </div>
  </section>
};
