import { useState, useEffect } from 'react'
import Image from 'next/image'
import navStyle from '../../styles/navbarNew.module.scss'

import SocialAccount from './socialAccount'
import NavLinks from './navLinks'

import tedxlogo from '../../assets/icons/logo-white.png'

export default function Navbar() {

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${navStyle['scroll-div']} ${showDiv ? navStyle.show : ''}`} id={navStyle.navbar}>
      <SocialAccount />

      <div className={navStyle.logo}>
        <Image src={tedxlogo} alt="tedxlogo" />
      </div>

      <NavLinks />
    </div>
  )
}
