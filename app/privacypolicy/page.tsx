import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const privacypolicy = () => {
  return (
    <div>
        <Navbar/>
        <div className="max-w-screen-md mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-4">Privacy Policy for Dojii</h1>
          <h1 className="font-semibold mb-4">Last Updated: 6/15/2022</h1>

          <p className="mb-4">
            This Privacy Policy outlines our practices concerning the
            collection, use, and protection of your personal information.
          </p>

          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information that you provide directly to us when signing up for our services or
            communicating with us. This information may include, but is not limited to, your name, email address, and any
            other information you choose to provide.
          </p>

          <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
          <p className="mb-4">
            We may use the information we collect for various purposes, including but not limited to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Responding to your inquiries and requests.</li>
            <li>Improving our services and user experience.</li>
            <li>Sending periodic updates and newsletters.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Protection of Your Information</h2>
          <p className="mb-4">
            We take reasonable measures to protect your personal information from unauthorized access or disclosure.
            However, please be aware that no method of transmission over the internet or electronic storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold mb-2">Disclosure to Third Parties</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with
            trusted service providers who assist us in operating our website or conducting our business, as long as they
            agree to keep this information confidential.
          </p>

          <h2 className="text-xl font-semibold mb-2">Changes to this Privacy Policy</h2>
          <p className="mb-4">
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this
            page, and the date of the last update will be indicated.
          </p>

          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@dojii.com" className="text-blue-500 hover:underline">
              contact@dojii.com
            </a>
            .
          </p>
        </div>
        <Footer/>
    </div>
  );
};

export default privacypolicy;