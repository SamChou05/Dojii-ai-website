import React from 'react'
import Contactform from '../components/Contactform'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const contact = () => {
  return (
    <div>
        <Navbar/>
        <div className="p-4 max-w-3xl mx-auto">
        
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p>Please fill in the form below</p>

            <Contactform/>
        </div>
        <div className=' absolute inset-x-0 bottom-0'>
            <Footer/>
        </div>

    </div>
  )
}


export default contact