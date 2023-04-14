import React, { useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import styles from '../../../styles/edition7.module.scss'

export const Desc = ({ info, hiddenInfo }) => {
  return (
    <div>
      <p className="text-lg tracking-wide text-justify">{info}</p>
      <br />
      <p className="text-lg tracking-wide text-justify">{hiddenInfo}</p>
    </div>
  )
}

export default function Edition7() {
  const [showMore, setShowMore] = useState(false)

  let info =
    'Amidst the tumultuous strum and drag of our thoughts, we find ourselves engulfed by turmoil, wrestling with raging uproars and basking in cheerful celebrations. Yet through the chaos, we continue to thrive, spiraling through the unknown and the unexpected. Through balance that comes from within, we can triumph in our trials and emerge stronger. Let us embrace the chaos and the unknown with open hearts, for it is through these experiences that we grow and discover the depths of our strength and resilience.'
  let hiddenInfo =
    'Edition 7 of TedxVITPune imbued everyone with an infectious sense of elation. The event was composed of a myriad of activities, such as The Boomwackers, which created an electric atmosphere. Attendees also had the opportunity to participate in a workshop of their selection that was informative and engaging, including perfume-making, pasta-making, and terrarium-making, including The Invisible Accessory (perfume-making), Pasta-la-Vista (pasta-making), Jungle In a Jar (terrarium-making) and Make Some Noise (voiceover and dubbing). The organizers had gone above and beyond to ensure that attendees were not only intellectually stimulated but also physically satisfied with an array of delicious snacks and drinks, as well as eye-catching merchandise and added a touch of luxury to the already memorable event. The audience left the event content and with memories to cherish.'

  return (
    <div className={styles.container6}>
      <div className={styles.imgBackground}>
        <img
          className={styles.imgUp}
          src="/hero-section.png"
          alt="background"
        />
        <div className={styles.heading}>
          <h2>Embracing The Pandemonium | 2022</h2>
        </div>
      </div>

      <div className={styles.information}>
        {showMore ? <Desc info={info} hiddenInfo={hiddenInfo} /> : info}

        <span
          className="cursor-pointer text-[#eb0028] hover:underline"
          onClick={() => setShowMore(!showMore)}
        >
          &nbsp;
          {showMore ? ' Show less' : ' Read More'}
        </span>
      </div>

      <div className={styles.speakersClass}>
        <h2>Speakers and Performers:</h2>

        <div className={styles.edition6Wrapper}>
          <div className={styles.edition6WrapperLeft}>
            <div className={styles.performers}>
              <h3>Samar Nakhate</h3>
              <p>Cinema.Culture.Connection</p>
              <p>
                Samar Nakhate is a filmmaker, media academic, consultant, and
                founder of the theatre group Theatre Academy, Pune. He is the
                creative director of the Pune International Film Festival and
                has directed numerous one-act and full-length plays and
                documentaries for Doordarshan. Mr Samar is dedicated to bringing
                media to the common people. In his talk, he discusses the role
                of regional cinema in bridging diverse cultures and fostering a
                sense of community among people, highlighting its significance
                in promoting regional identities and fostering cultural
                understanding.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Suchita Champak</h3>
              <p>Science.Outreach.Education</p>
              <p>
                Suchita Champak, the founder of SciRio, aims to change society's
                perception of science. She has been featured in various digital
                media outlets for her journey as a
                scientist-turned-entrepreneur. Her vision is to create an
                accessible and equitable space for science and society to
                co-evolve and empower everyone. "Taking Science Beyond the
                Academic Walls" by Suchitha Champak discusses the importance of
                making science accessible and engaging beyond traditional
                academic settings, emphasizing the need to bring science to the
                masses, promote scientific literacy, and inspire curiosity
                worldwide around us.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Abhinav Kafare</h3>
              <p>Graffiti.Language.Contemporary</p>
              <p>
                Abhinav Kafare is a multidisciplinary artist, photographer ,and
                founder of the art collective Bade Moochwale. His work is driven
                by a quest for novelty, and he has a mastery of various fine
                arts. His art reflects his openness to unpredictability and his
                belief that the creative process is a journey of discovery. This
                talk explores the significance and impact of graffiti as a form
                of modern expression, discussing its cultural, social, and
                artistic relevance in today's society.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Deepak Krishnan</h3>
              <p>Synergy.Sustainability.Responsibility</p>
              <p>
                Deepak Krishnan is the Associate Director for WRI India’s Energy
                Program, leading clean energy initiatives. He's an activist and
                a dedicated global citizen who has published multiple research
                papers and provided valuable insights in various fields. He's
                guiding us toward a new age of eco-living. In his very
                insightful talk, Deepak Krishnan delves into the importance of
                transitioning from renewable energy sources to responsible
                energy practices, highlighting the need for sustainable and
                mindful energy consumption for a better future.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Karan Arjun Singh</h3>
              <p>Foley, Movies, Life </p>
              <p>
                Karan Arjun Singh is a highly skilled Foley artist with over 35
                years of Bollywood experience, credited with over 3000 films.
                Karan's expertise in creating all types of sounds, from mundane
                to dramatic, makes him a true master of his craft. Karan Arjun
                Singh's intriguing talk explores the art of Foley, which
                involves creating sound effects for films, and how it
                contributes to the immersive and emotional experience of
                watching movies, showcasing the behind-the-scenes magic of sound
                design in filmmaking.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Sonal Barmecha</h3>
              <p>Experience.Innovation.Revolution</p>
              <p>
                Sonal Barmecha, Founder and Managing Director of Sante Spa and
                Hospitality, La Magia and Yumma Swami, is an accomplished
                entrepreneur and licensed Chartered Accountant. With a passion
                for fitness and holistic nutrition, Sonal's vision centres on
                nourishing the body and soul. The TEDx talk "Innovating the
                Restaurant Industry: The Power of Experiences" by Sonal Barmecha
                discusses how creating innovative and immersive dining
                experiences can transform the restaurant industry, going beyond
                traditional food offerings to create memorable and meaningful
                moments for customers.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Sandeep Godbole</h3>
              <p>History, Heritage, Reflection</p>
              <p>
                Sandeep Godbole is a cybersecurity expert and Vice President at
                Atos Syntel, passionate about documenting ancient temples to
                better understand Pune's history and people. He has organized
                several Heritage Walks in Pune to share his knowledge of the
                city's rich history and various historical structures. Sandeep
                Godbole says that heritage walks can provide a unique and
                insightful glimpse into a city's rich history and culture,
                allowing us to appreciate and preserve its heritage for future
                generations.
              </p>
            </div>

            <div className={styles.performers}>
              <h3>Swanandi Tikekar</h3>
              <p>Artistic.Introspective.Inspirational </p>
              <p>
                Swanandi Tikekar is a versatile actor, artist, and singer who
                debuted in the serial Abhalmaya as a child actor and has since
                captivated audiences with her performances in Dil Dosti
                Duniyadari. She also won the first season of the reality show
                Singing Star, showcasing her soulful voice. Swanandi's
                versatility shines through in her work on and off the screen. In
                her TEDx talk "Exploring Life - Epiphanies of an Artist",
                Swanandi Tikekar shares insights and reflections on the artist's
                journey, showcasing how art can serve as a medium for
                self-expression, self-discovery, and deeper understanding of
                life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.titleee}>
        <h2>The stage where it unfolded!</h2>
      </div>

      <div className={styles.edition6Img}>
        <img src={'https://res.cloudinary.com/dfgz4hsg0/image/upload/v1681462885/Website%20Content%202023/tedxstage_atswps.jpg'} alt={'Stage'} />  

      </div>
    </div>
  )
}
