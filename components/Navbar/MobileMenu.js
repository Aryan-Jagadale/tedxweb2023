import Link from 'next/link'
import navLinkStyle from '../../styles/mobile-menu.module.scss'

export default function MobileMenu() {
  return (
    <>
      <div className={navLinkStyle.navbarContent}>
        <input
          className={navLinkStyle.navbarInput}
          type="checkbox"
          id="navcheck"
          role="button"
          title="menu"
        />
        <label
          className={navLinkStyle.navbarLabel}
          htmlFor="navcheck"
          aria-hidden="true"
          title="menu"
        >
          <span className={navLinkStyle.burger}>
            <span className={navLinkStyle.bar}>
              <span className={navLinkStyle.visuallyhidden}> </span>
            </span>
          </span>
        </label>

        <nav className={navLinkStyle.mainNav} id="menu">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/lbv2">LOOKBOOK</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/edition6">EDITION 6</Link>
          <div className={navLinkStyle.socialAccount}>
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
        </nav>
      </div>
    </>
  )
}
