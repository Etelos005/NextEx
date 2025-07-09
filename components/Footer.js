'use client'
import Link from 'next/link'
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#00D5AE] mt-38 md:mt-42 scroll-smooth">
      <div className="container mx-auto px-12 md:px-8 pb-16">
        <div className="flex justify-center -translate-y-1/2">
          <div className="bg-[#00382A] text-white rounded-2xl w-full md:w-3/4 p-6 md:p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Register your CV now!</h2>
            <p className="text-gray-300 mb-5 text-sm md:text-base leading-snug">
              Send us your CV right now so that we can see where should be put you and to what job you should take and don't forget your cover letter as well!
            </p>
            <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-[#00382A] transition cursor-pointer">
              Register Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-y-6 md:gap-y-0 md:gap-x-55 text-white">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              <span className="text-black">Job</span><span className="text-white">Now</span>
            </h1>
            <p className="text-sm text-gray-100 leading-snug">
              Where jobs are so much easier to find than finding a needle in a haystack!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-15 sm:gap-x-15 md:gap-y-0 md:gap-x-20">
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3">Company</h3>
              <p className="text-sm text-gray-100 leading-snug">Address: 123 Fifth Avenue, New York - 10018, USA</p>
              <p className="text-sm text-gray-100 leading-snug mt-1">Call us: (+100) 456 7890</p>
              <p className="text-sm text-gray-100 leading-snug mt-1">Email: yourjob@example.com</p>
              <p className="text-sm text-gray-100 leading-snug mt-1">Mon-Sat: 9:00 AM - 18:00 PM</p>
            </div>

            <div className="md: pl-14">
              <h3 className="text-base md:text-lg font-bold mb-3">Pages</h3>
              <ul className="space-y-1 text-sm text-gray-100">
                <li><a href="#home" className="hover:text-black transition-colors cursor-pointer">&gt; Home</a></li>
                <li><a href="#booking" className="hover:text-black transition-colors cursor-pointer">&gt; Booking</a></li>
                <li><a href="#facilities" className="hover:text-black transition-colors cursor-pointer">&gt; Facilities</a></li>
                <li><a href="#about" className="hover:text-black transition-colors cursor-pointer">&gt; About Us</a></li>
                <li><a href="#location" className="hover:text-black transition-colors cursor-pointer">&gt; Location</a></li>
                <li><a href="#contact" className="hover:text-black transition-colors cursor-pointer">&gt; Contact</a></li>
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-base md:text-lg font-bold mb-3">Contact Us</h3>
              <div className="flex gap-3">
                <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <FaGoogle className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                </Link>
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
