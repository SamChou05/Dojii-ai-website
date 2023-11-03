"use client"
import React from 'react'
import { useState } from 'react';

import Carousel from './Carousel';

const Introduction = () => {
    const slides = [
      "/images/dojiiintro.png",
      "/images/page2.jpeg",
      "/images/stock-placeholder.jpeg",
    ];
    const [activeSlide, setActiveSlide] = useState(0);
  
    const textContent = [
      "Dojii utilizes AI and ML for a new and improved way to predict stock prices",
      "Slide 2 text goes here",
      "text area 3 goes here",
    ];
  
    return (
      <div className='w-full h-full pt-28'>
        <div className=" bg-[url('/images/introbackground.png')] grid grid-cols-2 gap-4 h-[600px]">
          <div className="col-span-1 w-full h-full">
            <p className='text-4xl font-semibold pl-44 pt-10'>
              {textContent[activeSlide]}
            </p>
            <p className='pl-44 pt-6 font-mono text-xl'>
              {textContent[activeSlide]}
            </p>
          </div>
  
          <div className="col-span-1 h-full">
            <div className='flex justify-center items-center'>
              <Carousel slides={slides} setActiveSlide={setActiveSlide} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

export default Introduction