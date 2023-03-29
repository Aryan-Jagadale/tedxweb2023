import Link from 'next/link'
import Image from 'next/image'
import navLinkStyle from '../../styles/navbar/navLink.module.scss'

import instagramIcon from '../../assets/icons/Instagram.svg'
import facebookIcon from '../../assets/icons/Facebook.svg'
import twitterIcon from '../../assets/icons/Twitter.svg'
import linkedinIcon from '../../assets/icons/LinkedIn.svg'

export default function navLinks() {
  return (
    <div className={navLinkStyle.navbarContent}>
      <Link className={navLinkStyle.navvvlink} href={'/'}>HOME</Link>
      <Link className={navLinkStyle.navvvlink} href={'/'}>ABOUT</Link>

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
        <a href="/">1.</a>
        <a href="/">2</a>
        <a href="/">3</a>
        <a href="/">4</a>
        <a href="/">5</a>
        <a href="/">6</a>
        <div className={navLinkStyle.socialAccount}>
        <a href="/">
          <Image src={instagramIcon} alt="instagram" />
        </a>
        <a href="/">
          <Image src={twitterIcon} alt="twitter" />
        </a>
        <a href="/">
          <Image src={facebookIcon} alt="facebook" />
        </a>
        <a href="/">
          <Image src={linkedinIcon} alt="twitter" />
        </a>
      </div>
      </nav>
    </div>
  )
}
