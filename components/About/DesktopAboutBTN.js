import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Style from '../../styles/about.module.scss'

function DesktopAboutBTN() {
  return (
    <div>
      <div className={cn(Style.aboutBTN, "absolute bottom-10 right-10 z-50")}>
        <Link href="/">
          <div className="bg-[#dd1313] h-12 w-12 rounded-full flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x w-6 h-6"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DesktopAboutBTN
