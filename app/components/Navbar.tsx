"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [bgColor, setBgColor] = useState<string>('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setBgColor('blue');
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center fixed top-0 left-0 right-0 ${bgColor === 'blue' ? 'bg-blue-500' : 'bg-transparent'} z-50`}>
      <a href='/' className='py-5 pl-20'>
        <Image src='/images/doji.png' alt='Example Image' width={200} height={30} />
      </a>
      <ul className='flex space-x-4 pr-16'>
        <li>
          <a href='/about' className= 'hover:text-gray-600'>
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
