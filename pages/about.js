import cn from 'classnames'
import styles from '@/styles/about.module.scss'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <div className="absolute bottom-10 right-10 z-50">
        <Link href="/">
          <div className="bg-[#dd1313] h-12 w-12 md:h-16 md:w-16 rounded-full flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
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
      <div
        className={cn(
          styles.horizontalScrollWrapper,
          styles.squares,
          'text-white'
        )}
      >
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </div>
    </div>
  )
}
