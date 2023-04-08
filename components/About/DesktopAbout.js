import React from 'react'
import cn from 'classnames'
import DesktopAboutBTN from './DesktopAboutBTN'
import styles from '../../styles/about.module.scss'

function DesktopAbout() {
  return (
    <>
     <DesktopAboutBTN />
      <div
        className={cn(
          styles.horizontalScrollWrapper,
          styles.squares,
          'text-white flex flex-col'
        )}
      >
        <div className={cn(styles.infromationBox)}>
          <div className={cn(styles.sectionTitle, 'heading')}>What is TED?</div>
          <div className={cn(styles.AboutContent)}>
            TED is a non-profit organization devoted to Ideas Worth Spreading.
            It started as a four-day conference in California 39 years ago,
            believing passionately in the power of ideas to change attitudes and
            lives and welcoming people from every discipline and culture who
            seek a deeper understanding of the world. Today, the two annual TED
            Conferences invite the world's leading thinkers and doers to speak
            for 18 minutes or less and the total number of events conducted till
            now is more than 6000. Many of these talks are then made available,
            free, at TED.com in more than 100 languages. All this has led to a
            global community focused on change through the power of ideas, thus
            forming a trinity of ideas from- Technology, Entertainment, and
            Design, and has recently taken up a broader scope ranging from
            science and business to global issues in more than 100 languages.
          </div>
        </div>
        <div className={cn(styles.infromationBox2)}>
          <div className={cn(styles.sectionTitle, 'heading')}>
            What is TEDx?
          </div>
          <div className={cn(styles.AboutContent)}>
            TED is a non-profit organization devoted to Ideas Worth Spreading.
            It started as a four-day conference in California 39 years ago,
            believing passionately in the power of ideas to change attitudes and
            lives and welcoming people from every discipline and culture who
            seek a deeper understanding of the world. Today, the two annual TED
            Conferences invite the world's leading thinkers and doers to speak
            for 18 minutes or less and the total number of events conducted till
            now is more than 6000. Many of these talks are then made available,
            free, at TED.com in more than 100 languages. All this has led to a
            global community focused on change through the power of ideas, thus
            forming a trinity of ideas from- Technology, Entertainment, and
            Design, and has recently taken up a broader scope ranging from
            science and business to global issues in more than 100 languages.
          </div>
        </div>
        {/* <div>item 3</div> */}
      </div>
    </>
  )
}

export default DesktopAbout
