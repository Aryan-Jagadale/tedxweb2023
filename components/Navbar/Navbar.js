import Link from 'next/link'
import MobileMenu from './MobileMenu'
import cn from 'classnames'
import styles from '../../styles/mobile-menu.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
    }
  }, [router.asPath])

  return (
    <div className="w-full sticky top-0 z-30">
      <div className="flex flex-col justify-center w-full bg-black/30 backdrop-blur-xl border-0 border-b-4 border-[#161616]">
        <nav className="flex items-center justify-between w-full relative md:max-w-8xl mx-auto py-2 px-6">
          <div className="hidden md:flex md:flex-row">
            <a href="https://instagram.com/tedxvitpune" target="_blank">
              <img
                src="/icons/instagram.svg"
                className="w-12 h-12"
                alt="instagram"
              />
            </a>
            <a href="https://twitter.com/tedxvitpune" target="_blank">
              <img
                src="/icons/twitter.svg"
                className="w-12 h-12"
                alt="twitter"
              />
            </a>
            <a href="https://facebook.com/tedxvitpune" target="_blank">
              <img
                src="/icons/facebook.svg"
                className="w-12 h-12"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/tedxvitpune/mycompany/"
              target="_blank"
            >
              <img
                src="/icons/linkedin.svg"
                className="w-12 h-12"
                alt="linkedin"
              />
            </a>
          </div>
          <div>
            <Link href="/">
              <img src="/logo.svg" className="w-3/5 md:ml-24" alt="tedxlogo" />
            </Link>
          </div>
          <div className="flex flex-row justify-end items-center text-md font-bold">
            <Link
              href="/about"
              className="text-white mr-8 hidden hover:underline md:block z-50"
            >
              ABOUT
            </Link>
            <Link
              href="/lookbook"
              className="text-white mr-8 hidden hover:underline md:block z-50"
            >
              LOOKBOOK
            </Link>
            <button
              className={cn(styles.burger, 'z-50 visible')}
              aria-label="Toggle menu"
              type="button"
              onClick={toggleMenu}
            >
              <MenuIcon data-hide={isMenuOpen} />
              <CrossIcon data-hide={!isMenuOpen} />
            </button>
          </div>
        </nav>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      className="h-8 w-8 absolute text-white"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon(props) {
  return (
    <svg
      className="h-8 w-8 absolute text-white"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}
