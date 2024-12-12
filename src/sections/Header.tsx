"use client";

import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"
import React, { useState } from 'react';

export const Header = () => {
  return <header className="sticky top-0 backdrop-blur-sm z-20">
    <div className="w-full bg-black flex justify-center items-center space-x-[12px] h-[44px]">
      <div className="hidden md:block text-white text-opacity-60 text-[14px] font-normal font-dm-sans">
        Streamline your workflow and boost your productivity.
      </div>
      <div className="flex px-2 items-center space-x-[4px]">
        <div className="text-white text-[14px] font-normal font-dm-sans">
          Get started for free
        </div>
        <div className="text-white h-4 w-4">
          <ArrowRight/>
        </div>
      </div>
    </div>

    <div className="py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt={"Saas Logo"} height={"40"} width={"40"}/>
          <MenuIcon className="w-5 h-5 md:hidden"/>
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href='#'>About</a>
            <a href='#'>Features</a>
            <a href='#'>Customers</a>
            <a href='#'>Updates</a>
            <a href='#'>Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  </header>
};