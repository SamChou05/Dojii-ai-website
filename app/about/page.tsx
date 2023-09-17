import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center items-center bg-gradient-to-b from-purple-200 to-white text-black text-3xl font-semibold h-36'>
            About Dojii
        </div>
        <Footer/>
    </div>
  )
}

export default about