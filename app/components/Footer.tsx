import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dojii.ai. All Rights Reserved.
        </p>
        <div className="mt-2">
          <a href="/privacypolicy" className="text-gray-400 hover:text-white mr-4">
            Privacy Policy
          </a>
          <a href="/termsofservice" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer