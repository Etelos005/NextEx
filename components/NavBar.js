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
    <nav className="w-full z-50">
      <div className="hidden md:block w-full h-[72px] bg-[linear-gradient(to_right,white_50.01%,#00D5AE_50%)]" />

      <div className="md:hidden w-full h-[72px] bg-white" />

      <div className="container mx-auto px-10 h-[72px] -mt-[72px] relative z-10 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <h1 className="text-2xl font-bold cursor-pointer">
            Job<span className="text-[#00D5AE]">Now</span>
          </h1>
          <ul className="hidden md:flex space-x-6 text-sm">
            <li><Link href="/" className={linkClass('/')}>Home</Link></li>
            <li><Link href="/job" className={linkClass('/job')}>Job</Link></li>
            <li><Link href="/about" className={linkClass('/about')}>About Us</Link></li>
            <li><Link href="/contact" className={linkClass('/contact')}>Contact</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-4">
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

      <div className="md:hidden flex justify-center items-center fixed top-0 left-0 right-0 px-6 py-4 bg-white z-50 shadow">
        <h1 className="text-2xl font-bold text-center w-full">
          Job<span className="text-[#00D5AE]">Now</span>
        </h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute right-6 z-50 focus:outline-none"
        >
          <div className="w-10 h-10 rounded bg-[#00D5AE] flex items-center justify-center transition-all duration-300">
            <div className="relative w-5 h-5 flex flex-col justify-between items-center">
              <span className={`block h-[2px] w-full bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`} />
              <span className={`block h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-[2px] w-full bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`} />
            </div>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-4 right-4 z-[9999] bg-[#00D5AE] rounded-xl shadow-xl px-6 py-6 space-y-4 text-white text-left">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link href="/job" onClick={() => setMenuOpen(false)} className="block">Job</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block">About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block">Contact</Link>
          <hr className="border-white/30" />
          <Link href="/signin" onClick={() => setMenuOpen(false)} className="block">Sign In</Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 bg-white text-black border border-white rounded-md px-4 py-2 hover:bg-gray-100 transition text-sm"
          >
            <FiLogIn className="text-sm" />
            Create Account
          </Link>
        </div>
      )}
    </nav>
  )
}
