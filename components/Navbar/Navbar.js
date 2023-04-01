import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center w-full sticky top-0 z-50 bg-black border-0 border-b-4 border-[#161616]">
      <nav className="flex items-center justify-between w-full relative md:max-w-8xl mx-auto py-2 px-6">
        <div className='hidden md:flex md:flex-row'>
          <a href="https://instagram.com/tedxvitpune">
            <img src='/icons/instagram.svg' className='w-12 h-12' alt="instagram" />
          </a>
          <a href="https://twitter.com/tedxvitpune">
            <img src='/icons/twitter.svg' className='w-12 h-12' alt="twitter" />
          </a>
          <a href="https://facebook.com/tedxvitpune">
            <img src='/icons/facebook.svg' className='w-12 h-12' alt="facebook" />
          </a>
          <a href="https://linkedin.com/in/tedxvitpune">
            <img src='/icons/linkedin.svg' className='w-12 h-12' alt="linkedin" />
          </a>
        </div>
        <div>
        <Link href="/">   
          <img src='/logo.svg' className="w-3/5 md:ml-24" alt="tedxlogo" />
          </Link>
        </div>
        <div className="flex flex-row justify-end items-center text-md font-bold">
          <Link href="/about" className="text-white mr-8 hidden hover:underline md:block z-50">
            ABOUT
          </Link>
          <Link href="/lbv2" className="text-white mr-8 hidden hover:underline md:block z-50">
            LOOKBOOK
          </Link>
        <MobileMenu />
        </div>
      </nav>
    </div>
  )
}
