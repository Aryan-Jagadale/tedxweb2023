import React from 'react'
import styles from '../../../styles/edition6.module.scss'

const Edition6 = (dark) => {
  const pageStyle = {
    backgroundColor: dark ? 'black' : 'white',
  }
  return (
    <div className={styles.container6}>
      <div className={styles.imgBackground}>
        <img
          className={styles.imgUp}
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651488361/Website%20Content/Endevaour/Edition6/edition_6_c3iltc.png"
          alt="background"
        />
        <div className={styles.heading}>
          <h2>Reemergence | 2021</h2>
        </div>
      </div>

      <p>
        Shift the perspective. Reemerge in a better, stronger, and altogether
        different way, keeping in mind the roots that helped us get to where we
        are today. Reemergence is about celebrating the human spirit that rises
        through darkness and disseminates hope. The celebrity with which the
        modern world is moving and evolving is unprecedented and change seems to
        be the sole option. And accepting change is accepting a new beginning.
        There's a desire to rise and start again with a new perspective, a
        stronger will and an arsenal of ideas. That's how we leave behind these
        prevalent dark times because hope gives way to change.
      </p>
      

      <div className={styles.speakersClass}>
        <h2>Speakers and Performers:</h2>
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651520019/Website%20Content/Endevaour/Edition6/underline_jmvs1l.png"
          alt="underline"
        />

        <div className={styles.edition6Wrapper}>
          <div className={styles.edition6WrapperLeft}>
            <div className={styles.performers}>
              <h3>Jishnu Chatterjee</h3>
              <p className='text-left'>Animator. Motion Designer. Visual Artist.</p>
              <p className='z-20'>
                Jishnu Chatterjee is a motion director with notable works in
                “Scam 1992: The Harshad Mehta Story”. A forethoughtful talk
                dives us through some of the most cherished title sequences,
                from James Bond montages to a few cartoon series. He aspires to
                combine his love for films & design to tell evocative stories
                that inspire a sense of wonder for years to come.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Mark Hannant</h3>
              <p className='text-left'>Adventurer. Author. Entrepreneur.</p>
              <p className='z-20'>
                Mark Hannat is a creative service entrepreneur and a business
                communicator. He gave a discerning talk on Work: A thing you do,
                not a place you go. He has made his presence felt in diverse
                fields, and his curiosity always complements him in delving into
                new things.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Amira Gill</h3>
              <p className='text-left'>Music Therapist. Songwriter. Vocalist.</p>
              <p className='z-20'>
                Abounding with compassion, Amira Gill is a Delhi-based vocalist
                and a music therapist. Through this intuitive talk, she
                expressed that even if things seem random or directionless at
                first, it all makes sense eventually. Everything comes together
                in the end to serve a greater purpose.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Debanshu Roy</h3>
              <p className='text-left'>Health Economist. Health-Tech Consultant. Ideator.</p>
              <p className='z-20'>
                Dr. Debanshu Roy is a clinician and health economist and has
                worked extensively in the health domain across policy and
                strategy projects. According to Dr. Debanshu’s talk, a Health ID
                could be utilized to identify and categorize individuals based
                on their health status.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Avinash Ramanathan</h3>
              <p className='text-left'>Venture Capitalist. Strategist. Associate.</p>
              <p className='z-20'>
                Avinash Ramanathan is Vice President at Kalaari Capital, an
                early-stage, technology-focused venture capital firm. He firmly
                believes that a certain degree of life is increasingly revolving
                around products and services shaped by Venture Capital. He gave
                a compelling talk, which offered detailed insights into what a
                VC does, how a VC works and when a company should or should not
                raise VC money.
              </p>
            </div>
          </div>
        </div>

       
      </div>

      <div className='text-center w-full text-5xl font-bold mt-12 mb-6'>
        <h2>The stage where it unfolded!</h2>
      </div>

      <div className={styles.edition6Img}>
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651516314/Website%20Content/Endevaour/Edition6/51372637914_9b27346304_o_ycwwtr.jpg"
          alt="imgggg"
        />
      </div>
    </div>
  )
}

export default Edition6
