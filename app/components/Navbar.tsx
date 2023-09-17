import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center'>
        <a href='/'>
            <Image className='py-5'
                src="/images/doji.png" 
                alt="Example Image"
                width={200} 
                height={30} 
            />
        </a>
        <ul className="flex space-x-4">
          <li>
              <a href = "/about" className="hover:text-gray-600">About</a>
          </li>
          <li>
              <a href="/contact" className="hover:text-gray-600">Contact</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar