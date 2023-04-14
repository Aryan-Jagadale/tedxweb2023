import Link from 'next/link'
// import { useRouter } from 'next/router';
import cn from 'classnames'
import useDelayedRender from 'use-delayed-render'
import styles from '../../styles/mobile-menu.module.scss'
import { GrYoutube } from 'react-icons/gr'
import Image from 'next/image'

export default function MobileMenu({ isMenuOpen }) {
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  )

  return (
    <>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col justify-between absolute right-0 top-[4.35rem] w-screen md:w-[50%] lg:w-[33%] h-screen bg-black/50  ease-in duration-300',
            isMenuRendered && styles.menuRendered
          )}
        >
          <div>
            <li
              className="md:hidden border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '200ms' }}
            >
              <Link
                href="/"
                className="flex justify-end hover:underline p-4 px-8 "
              >
                HOME
              </Link>
            </li>

            <li
              className="border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '250ms' }}
            >
              <Link
                href="/about"
                className="flex justify-end hover:underline p-4 px-8 "
              >
                ABOUT
              </Link>
            </li>

            <li
              className="border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '300ms' }}
            >
              <Link
                href="/blog"
                className="flex justify-end hover:underline p-4 px-8"
              >
                BLOG
              </Link>
            </li>

            <li
              className="border-[#161616] text-white text-md font-bold"
              style={{ transitionDelay: '350ms' }}
            >
              <Link
                href="/lookbook"
                className="flex justify-end hover:underline p-4 px-8"
              >
                LOOKBOOK
              </Link>
            </li>

            <li
              className=" text-white text-md font-bold"
              style={{ transitionDelay: '400ms' }}
            >
              <Link
                href="/contact"
                className="flex justify-end hover:underline p-4 px-8"
              >
                CONTACT US
              </Link>
            </li>

            <li
              className=" text-white text-md font-bold"
              style={{ transitionDelay: '450ms' }}
            >
              <Link
                href="/edition6"
                className="flex justify-end hover:underline p-4 px-8"
              >
                EDITION 6
              </Link>
            </li>

            <li
              className=" text-white text-md font-bold"
              style={{ transitionDelay: '500ms' }}
            >
              <Link
                href="/edition7"
                className="flex justify-end hover:underline p-4 px-8"
              >
                EDITION 7
              </Link>
            </li>

            <li
              className=" text-white text-md font-bold"
              style={{ transitionDelay: '550ms' }}
            >
              <Link
                href="/community-conversations"
                className="flex justify-end hover:underline p-4 px-8"
              >
                COMMUNITY CONVERSATIONS
              </Link>
            </li>
          </div>
          <div className="flex flex-row md:hidden justify-evenly mb-24">
            <a
              href="https://instagram.com/tedxvitpune"
              className="w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full"
            >
              <Image
                src="/icons/instagram.svg"
                className="w-12 h-12"
                alt="instagram"
                width={48}
                height={48}
              />
            </a>
            <a
              href="https://twitter.com/tedxvitpune"
              className="w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full"
            >
              <Image
                src="/icons/twitter.svg"
                className="w-12 h-12"
                alt="twitter"
                width={48}
                height={48}
              />
            </a>
            <a
              href="https://facebook.com/tedxvitpune"
              className="w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full"
            >
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
              className="w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full"
            >
              <Image
                src="/icons/linkedin.svg"
                className="w-12 h-12"
                alt="linkedin"
                width={48}
                height={48}
              />
            </a>
            <a
              href="https://www.youtube.com/c/TEDxVITPune"
              className="w-20 h-20 bg-[#161616] flex justify-center items-center rounded-full"
            >
              <GrYoutube className="w-8 h-8 text-white" />
              {/* <img src='/icons/youtube.svg' className='w-12 h-12' alt="youtube" /> */}
            </a>
          </div>
        </ul>
      )}
    </>
  )
}
