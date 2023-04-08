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
          'text-white flex flex-col'
        )}
      >
        <div>
          <div className={cn(styles.sectionTitle, 'heading')}>What is TED?</div>
          <div className={cn(styles.AboutContent)}>
            TED is a non-profit organization devoted to Ideas Worth Spreading.
            It started as a four-day conference in California 39 years ago,
            believing passionately in the power of ideas to change attitudes and
            lives and welcoming people from every discipline and culture who
            seek a deeper understanding of the world.
            Today, the two annual TED Conferences invite the world's leading
            thinkers and doers to speak for 18 minutes or less and the total
            number of events conducted till now is more than 6000. Many of these
            talks are then made available, free, at TED.com in more than 100
            languages. All this has led to a global community focused on change
            through the power of ideas, thus forming a trinity of ideas from-
            Technology, Entertainment, and Design, and has recently taken up a
            broader scope ranging from science and business to global issues in
            more than 100 languages.
          </div>
        </div>
        <div>item 2</div>
        <div>item 3</div>
      </div>
    </div>
  )
}
