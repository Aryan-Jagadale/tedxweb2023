import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from '../../styles/mobile-menu.module.scss';

export default function MobileMenu() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const router = useRouter();

  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  }, [router.asPath]);



  return (
    <>
      <button
        className={cn(styles.burger, 'z-50 visible')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
        className={cn(
          styles.menu,
          'flex flex-col justify-between absolute right-0 top-[4.35rem] w-screen md:w-[30%] h-screen bg-black backdrop-blur-xl ease-in duration-300',
          isMenuRendered && styles.menuRendered
        )}>
          <div>
            <li className="md:hidden border-b-4 border-[#161616] text-white text-md font-bold"
            style={{ transitionDelay: '200ms' }}>
              <Link href="/" className="flex justify-end hover:underline p-4 px-8 ">
                HOME
              </Link>
            </li>
            <li
              className="md:border-t-4 border-b-4 border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '250ms' }}
            >
              <Link href="/about" className="flex justify-end hover:underline p-4 px-8">
                ABOUT
              </Link>
            </li>
            <li
              className="border-b-4 border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '300ms' }}
            >
              <Link href="/lookbook" className="flex justify-end hover:underline p-4 px-8">
                LOOKBOOK
              </Link>
            </li>
            <li
              className=" border-b-4 border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '350ms' }}
            >
              <Link href="/blog" className="flex justify-end hover:underline p-4 px-8">
                BLOG
              </Link>
            </li>
            <li
              className="border-b-4 border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '400ms' }}
            >
              <Link href="/cc" className="flex justify-end hover:underline p-4 px-8">
                COMMUNITY CONVERSATIONS
              </Link>
            </li>

            <li
              className=" border-b-4 border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '450ms' }}
            >
              <Link href="/edition7" className="flex justify-end hover:underline p-4 px-8">
                EDITION 7
              </Link>
            </li>
            <li
              className=" border-b-4 border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '500ms' }}
            >
              <Link href="/edition6" className="flex justify-end hover:underline p-4 px-8">
                EDITION 6
              </Link>
            </li>
           
          

          </div>
          <div className='flex flex-row md:hidden justify-evenly mb-24'>
            <a href="https://instagram.com/tedxvitpune" className='w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full'>
              <img src='/icons/instagram.svg' className='w-12 h-12' alt="instagram" />
            </a>
            <a href="https://twitter.com/tedxvitpune" className='w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full'>
              <img src='/icons/twitter.svg' className='w-12 h-12' alt="twitter" />
            </a>
            <a href="https://facebook.com/tedxvitpune" className='w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full'>
              <img src='/icons/facebook.svg' className='w-12 h-12' alt="facebook" />
            </a>
            <a href="https://www.linkedin.com/company/tedxvitpune/mycompany/" className='w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full'>
              <img src='/icons/linkedin.svg' className='w-12 h-12' alt="linkedin" />
            </a>
          </div>
        </ul>
      )}
    </>
  );
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
  );
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
  );
}
