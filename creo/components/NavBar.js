import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiLogIn } from 'react-icons/fi'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const currentPath = router.pathname

  const linkClass = (path) =>
    `transition ${
      currentPath === path
        ? 'text-[#00D5AE] font-semibold'
        : 'text-black hover:text-[#00D5AE]'
    }`

  return (
    <nav className="w-full grid grid-cols-1 md:grid-cols-[58%_42%] min-h-[72px]">
      <div className="hidden md:flex items-center bg-white">
        <div className="w-full">
          <div className="max-w-[1320px] mx-auto w-full flex justify-between items-center px-6 py-4">
            <div className="flex items-center space-x-10">
              <h1 className="text-2xl font-bold cursor-pointer">
                Job<span className="text-[#00D5AE]">Now</span>
              </h1>
              <ul className="flex space-x-6 text-sm">
                <li><Link href="/" className={linkClass('/')}>Home</Link></li>
                <li><Link href="/job" className={linkClass('/job')}>Job</Link></li>
                <li><Link href="/about" className={linkClass('/about')}>About Us</Link></li>
                <li><Link href="/contact" className={linkClass('/contact')}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-end items-center bg-[#00D5AE] px-6">
        <div className="w-full">
          <div className="max-w-[1320px] mx-auto w-full flex justify-end items-center gap-4">
            <Link href="/signin" className="text-white text-sm hover:underline">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="flex items-center gap-2 bg-white text-black border border-white rounded-md px-4 py-1 hover:bg-gray-100 transition text-sm"
            >
              <FiLogIn className="text-sm" />
              Create Account
            </Link>
          </div>
        </div>
      </div>

      <div className="flex md:hidden justify-center items-center relative px-6 py-4 bg-white w-full">
        <h1 className="text-2xl font-bold text-center w-full">
          Job<span className="text-[#00D5AE]">Now</span>
        </h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute right-6 z-50 focus:outline-none"
        >
          <div className="w-10 h-10 rounded bg-[#00D5AE] flex items-center justify-center transition-all duration-300">
            <div className="relative w-5 h-5 flex flex-col justify-between items-center">
              <span
                className={`block h-[2px] w-full bg-white transform transition duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-white transform transition duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </div>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#00D5AE] w-full px-6 py-6 space-y-4 text-white text-left">
          <Link href="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/job" className="block" onClick={() => setMenuOpen(false)}>Job</Link>
          <Link href="/about" className="block" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link>
          <hr className="border-white/30" />
          <Link href="/signin" className="block" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-black border border-white rounded-md px-4 py-1 hover:bg-gray-100 transition text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <FiLogIn className="text-sm" />
            Create Account
          </Link>
        </div>
      )}
    </nav>
  )
}
