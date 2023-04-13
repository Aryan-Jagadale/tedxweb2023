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
        Amidst the tumultuous strum and drag of our thoughts, we find ourselves
        engulfed by turmoil, wrestling with raging uproars and basking in
        cheerful celebrations. Yet through the chaos, we continue to thrive,
        spiraling through the unknown and the unexpected. Through balance that
        comes from within, we can triumph in our trials and emerge stronger. Let
        us embrace the chaos and the unknown with open hearts, for it is through
        these experiences that we grow and discover the depths of our strength
        and resilience.
      </p>
      <br />

      <p>
        Edition 7 of TedxVITPune imbued everyone with an infectious sense of
        elation. The event was composed of a myriad of activities, such as The
        Boomwackers, which created an electric atmosphere. Attendees also had
        the opportunity to participate in a workshop of their selection that was
        informative and engaging, including perfume-making, pasta-making, and
        terrarium-making, including The Invisible Accessory (perfume-making),
        Pasta-la-Vista (pasta-making), Jungle In a Jar (terrarium-making) and
        Make Some Noise (voiceover and dubbing). The organizers had gone above
        and beyond to ensure that attendees were not only intellectually
        stimulated but also physically satisfied with an array of delicious
        snacks and drinks, as well as eye-catching merchandise and added a touch
        of luxury to the already memorable event. The audience left the event
        content and with memories to cherish.
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

        {/*<div className={styles.performers_title}>
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
  </div>*/}

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
