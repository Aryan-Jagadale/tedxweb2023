import navStyle from '../../styles/navbarNew.module.scss'
import Image from 'next/image'

import instagramIcon from '../../assets/icons/Instagram.svg'
import facebookIcon from '../../assets/icons/Facebook.svg'
import twitterIcon from '../../assets/icons/Twitter.svg'
import linkedinIcon from '../../assets/icons/LinkedIn.svg'

export default function socialAccount() {
    return(
        <div className={navStyle.socialAccount}>
        <a href="#">
          <Image src={instagramIcon} alt="instagram" />
        </a>
        <a href="#">
          <Image src={twitterIcon} alt="twitter" />
        </a>
        <a href="#">
          <Image src={facebookIcon} alt="facebook" />
        </a>
        <a href="#">
          <Image src={linkedinIcon} alt="twitter" />
        </a>
      </div>
    )
}