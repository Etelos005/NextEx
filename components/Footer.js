'use client'
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#00D5AE] mt-20 md:mt-28">
      <div className="container px-6 mx-auto">
        {/* Register CTA */}
        <div className="flex justify-center -translate-y-1/2">
          <div className="bg-[#00382A] text-white rounded-md w-full md:w-3/4 p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Register your CV now!</h2>
            <p className="text-gray-300 mb-6 text-base md:text-lg">
              Send us your CV right now so that we can see where should be put you and to waht job you should take!
            </p>
            <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-[#00382A] transition cursor-pointer">
              Register Now
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="px-6 pt-0 pb-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* JobNow Logo */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="text-black">Job</span><span className="text-white">Now</span>
            </h1>
            <p className="text-sm text-gray-100">
              Where jobs are so much easier to find than picking a needle in a haystack!
            </p>
          </div>

          <div className="md:col-span-3 md:pl-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Company</h3>
              <p className="text-sm text-gray-100">Address: 123 Fifth Avenue, New York - 10018, USA</p>
              <p className="text-sm text-gray-100 mt-2">Call us: (+100) 456 7890</p>
              <p className="text-sm text-gray-100 mt-2">Email: yourjob@example.com</p>
              <p className="text-sm text-gray-100 mt-2">Mon-Sat: 9:00 AM - 18:00 PM</p>
            </div>

            <div className="pl-18">
              <h3 className="text-lg md:text-xl font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="hover:text-black transition-colors cursor-pointer">&gt; Home</li>
                <li className="hover:text-black transition-colors cursor-pointer">&gt; Booking</li>
                <li className="hover:text-black transition-colors cursor-pointer">&gt; Facilities</li>
                <li className="hover:text-black transition-colors cursor-pointer">&gt; About Us</li>
                <li className="hover:text-black transition-colors cursor-pointer">&gt; Location</li>
                <li className="hover:text-black transition-colors cursor-pointer">&gt; Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
              <div className="flex gap-4">
                <FaGoogle className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                <FaFacebookF className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                <FaTwitter className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                <FaLinkedinIn className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-200 pt-4 pb-2">
          &copy; 2025 JobNow. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
