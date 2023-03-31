import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center w-full sticky px-6 top-0 z-50 bg-black">
      <nav className="flex items-center justify-between w-full relative md:max-w-6xl mx-auto py-4">
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
          <img src='/icons/tedxlogo.svg' className="w-11/12" alt="tedxlogo" />
          </Link>
        </div>
        <div className="hidden md:flex md:flex-row">
          <a href="/about" className="text-white mx-4">
            About
          </a>
          <a href="/about" className="text-white ml-4">
            About
          </a>
        </div>
      </nav>
    </div>
  )
}
