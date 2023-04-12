import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/edition7.module.scss'

export default function Edition7() {
  return (
    <div className={styles.container6}>
      <div className={styles.imgBackground}>
        <img
          className={styles.imgUp}
          src="/edition7banner.png"
          alt="background"
        />
        <div className={styles.heading}>
          <h2>Embracing The Pandemonium | 2022</h2>
        </div>
      </div>

      <p>
        All the strum and drag in our heads draws down to introspecting-
        engulfed by turmoil. From raging uproars to cheerful celebrations,
        spiralling times to exciting unknowns, we've been thriving amidst the
        chaos. We often wonder, will we ever seek answers? Will the chaos make
        sense? Now is the time we inch closer to our reality by being grateful
        for the minute moments, and not losing a sense of empathy, triumphing in
        our trials- through the balance that comes from within.
      </p>
      <div className={styles.speakersClass}>
        <h2>Speakers and Performers:</h2>

        <div className={styles.edition6Wrapper}>
          <div className={styles.edition6WrapperLeft}>
            <div className={styles.performers}>
              <h3>Samar Nakhate</h3>
              <p>Filmmaker.Media Academic and Consultant.</p>
            </div>

            <div className={styles.performers}>
              <h3>Suchita Champak</h3>
              <p>Filmmaker.Media Academic and Consultant.</p>
            </div>

            <div className={styles.performers}>
              <h3>Abhinav Kafare</h3>
              <p>Artist. Photographer</p>
            </div>

            <div className={styles.performers}>
              <h3>Deepak Krishnan</h3>
              <p>Filmmaker.Media Academic and Consultant.</p>
            </div>

            <div className={styles.performers}>
              <h3>Karan Arjun Singh</h3>
              <p>Artist. Photographer</p>
            </div>

            <div className={styles.performers}>
              <h3>Sonal Barmecha</h3>
              <p>Artist. Photographer</p>
            </div>

            <div className={styles.performers}>
              <h3>Sandeep Godbole</h3>
              <p>Cybersecurity expert</p>
            </div>

            <div className={styles.performers}>
              <h3>Swanandi Tikekar</h3>
              <p>Eminent actor. Artist.Singer</p>
            </div>
          </div>
        </div>

        <div className={styles.performers_title}>
          <h2>Team</h2>
        </div>

        <div className={styles.performersFlex}>
          <div className={styles.performersFlexLeft}>
            <h3>Organiser</h3>
            <p>Harshadha Belgi</p>
          </div>
          <div className={styles.performersFlexRight}>
            <h3>Co-Organiser</h3>
            <p>Athrav Kulkarni</p>
          </div>
        </div>
      </div>

      <div className={styles.titleee}>
        <h2>The stage where it unfolded!</h2>
      </div>

      <div className={styles.edition6Img}>
        <img src="/comingsoon.png" alt="imgggg" />
      </div>
    </div>
  )
}
