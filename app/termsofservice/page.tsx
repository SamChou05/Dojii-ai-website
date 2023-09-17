import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const termsofservice = () => {
  return (
    <div>
        <Navbar/>
        <div className="max-w-screen-md mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
            <h1 className="font-semibold mb-4">Last Updated: 6/20/2022</h1>

            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By accessing or using AI Tech's services, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold mb-2">2. Description of Services</h2>
            <p className="mb-4">
                AI Tech provides AI-powered services for [briefly describe the nature of your services].
            </p>

            <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
            <p className="mb-4">
                Users are responsible for [describe user responsibilities, such as compliance with applicable laws and regulations].
            </p>

            <h2 className="text-xl font-semibold mb-2">4. Privacy Policy</h2>
            <p className="mb-4">
                Use of our services is also governed by our Privacy Policy. Please review our Privacy Policy [provide a link to the Privacy Policy].
            </p>

            <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
            <p className="mb-4">
                AI Tech reserves the right to terminate or suspend your access to the services at any time for any reason.
            </p>

            <h2 className="text-xl font-semibold mb-2">6. Disclaimer</h2>
            <p className="mb-4">
                The use of our services is at your own risk. AI Tech makes no warranties or representations regarding the accuracy or reliability of the services.
            </p>

            <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
            <p className="mb-4">
                For questions or concerns about these Terms of Service, please contact us at {' '}
                <a href="mailto:contact@aitech.com" className="text-blue-500 hover:underline">
                contact@aitech.com
                </a>
                .
            </p>
            </div>
        <Footer/>
    </div>
  )
}

export default termsofservice