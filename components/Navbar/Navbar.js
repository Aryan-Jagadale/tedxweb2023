import Link from 'next/link'
import MobileMenu from './MobileMenu'
import cn from 'classnames'
import styles from '../../styles/mobile-menu.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GrYoutube } from "react-icons/gr";
import Image from 'next/image'

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
      <div className="flex flex-col justify-center w-full bg-black/50 backdrop-blur-xl">
        <nav className="flex items-center justify-between w-full relative md:max-w-8xl mx-auto py-2 px-6">
          <div className="hidden md:flex md:flex-row justify-center items-center">
            <a href="https://instagram.com/tedxvitpune" target="_blank">
              <Image
                src="/icons/instagram.svg"
                className="w-12 h-12"
                alt="instagram"
                width={48}
                height={48}
              />
            </a>
            <a href="https://twitter.com/tedxvitpune" target="_blank">
              <Image
                src="/icons/twitter.svg"
                className="w-12 h-12"
                alt="twitter"
                width={48}
                height={48}
              />
            </a>
            <a href="https://facebook.com/tedxvitpune" target="_blank">
              <Image
                src="/icons/facebook.svg"
                className="w-12 h-12"
                alt="facebook"
                width={48}
                height={48}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/tedxvitpune/mycompany/"
              target="_blank"
            >
              <Image
                src="/icons/linkedin.svg"
                className="w-12 h-12"
                alt="linkedin"
                width={48}
                height={48}
              />
            </a>
            <a href="https://www.youtube.com/c/TEDxVITPune" target="_blank">
              <GrYoutube className='w-6 h-6 ml-3 text-white' />
              {/* <img src='/icons/youtube.svg' className='w-6' alt="youtube" /> */}
            </a>
          </div>
          <div>
            <Link href="/">
              <img src="/logo.svg" className="w-3/5" alt="tedxlogo" />
            </Link>
          </div>
          <div className="flex flex-row justify-end items-center text-md font-bold">
            {/* <Link
              href="/blog"
              className="text-white mr-8 hidden hover:underline md:block z-50"
            >
              BLOG
            </Link> */}
            {/* <Link
              href="/lookbook"
              className="text-white mr-8 hidden hover:underline md:block z-50"
            >
              LOOKBOOK
            </Link> */}
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
