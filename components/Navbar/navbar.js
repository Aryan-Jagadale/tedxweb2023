import Image from 'next/image'
import navStyle from '../../styles/navbarNew.module.scss'

import SocialAccount from './socialAccount'
import NavLinks from './navLinks'

import tedxlogo from '../../assets/icons/logo-white.png'


export default function Navbar() {
  return (
    <div className={navStyle.navbar}>

      <SocialAccount />

      <div className={navStyle.logo}>
        <Image src={tedxlogo} alt="tedxlogo" />
      </div>

      <NavLinks />
    </div>
  )
}
