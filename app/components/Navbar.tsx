"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [bgColor, setBgColor] = useState<string>('transparent');
  const [textColor, setTextColor] = useState<string>('black'); // New state for text color
  const [imageSrc, setImageSrc] = useState<string>('/images/doji.png'); // New state for image source

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setBgColor('blue');
        setTextColor('white'); // Change text color on scroll
        setImageSrc(''); // Change image on scroll
      } else {
        setBgColor('transparent');
        setTextColor('black'); // Revert text color when not scrolling
        setImageSrc('/images/doji.png'); // Revert image when not scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center fixed top-0 left-0 right-0 transition-colors duration-150 ${bgColor === 'blue' ? 'bg-blue-500' : 'bg-transparent'} z-50`}>
      <a href='/' className='py-5 pl-20'>
        <Image src={imageSrc} alt='Example Image' width={200} height={30} />
      </a>
      <ul className={`flex space-x-4 pr-16 text-${textColor}`}> {/* Use dynamic text color */}
        <li>
          <a href='/about' className='hover:text-gray-600'>
            About
          </a>
        </li>
        <li>
          <a href='/contact' className='hover:text-gray-600'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
