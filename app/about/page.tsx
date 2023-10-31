import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center items-center bg-[#2E8B57] text-white text-4xl font-semibold h-36 text-opacity-90'>
            About Dojii
        </div>
        <Footer/>
    </div>
  )
}

export default about