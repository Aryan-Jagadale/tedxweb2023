import LookBook from '@/components/LookBook/LookBook'
import Image from 'next/image'
import styles from '../styles/cc.module.scss'
import cn from 'classnames'

const bannerImage = '/ccbanner.png'

export default function CC() {
  let cc = ['cc', 'cc2']
  return (
    <div className="bg-white w-screen">
      <Image
        src={bannerImage}
        width={10000}
        height={10000}
        className="w-full object-cover"
      />
      <div className="w-full flex justify-center items-center relative bottom-6 md:bottom-10">
        <div className="bg-white rounded-full py-1 px-6 md:py-4 md:px-16 flex justify-center items-center shadow-lg w-max">
          <h1 className="text-black heading text-xl md:text-4xl">
            Community Conversations
          </h1>
        </div>
      </div>
      <div className="text-black my-8 md:my-16 max-w-6xl mx-auto pb-1 px-6 xl:px-0">
        <div className="my-16">
          <h2 className="heading text-3xl md:text-4xl">What ?</h2>
          <p className="text-[#484848] text-xl md:text-2xl font-semibold mt-4 tracking-wider">
            Community Conversations” is a platform to share your ideas, get
            yourself collaborating, and become a part of meaningful
            conversations to create memories for a lifetime!
          </p>
        </div>
        <div className="my-16">
          <h2 className="heading text-3xl md:text-4xl">Why ?</h2>
          <p className="text-[#484848] text-xl md:text-2xl font-semibold mt-4 tracking-wider">
            At TEDxVITPune we believe in forging strong and ever-lasting bonds,
            bringing together people from all different walks of life to natter
            and exchange ideas in whole different dimensions.
          </p>
        </div>
        <div className="my-16">
          <h2 className="heading text-3xl md:text-4xl">Who ?</h2>
          <p className="text-[#484848] text-xl md:text-2xl font-semibold mt-4 tracking-wider">
            Anyone at all! Get your friends, interact with the TEDx community
            and look forward to unforgettable colloquies as we smile our way
            through Community Conversations!
          </p>
        </div>
      </div>
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 flex flex-col items-center">
          <h2 className="heading text-4xl py-4 tracking-wider">Seasons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-16 my-12">
            <div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651498829/Website%20Content/Endevaour/Community-conservations/img1_l74eih.jpg)',
              }}
            >
              <div className={cn(styles.outter)}>
                <h3 className={cn(styles.outterTitle, 'heading text-5xl')}>
                  E01: Let's talk music
                </h3>
                <h3 className={cn(styles.outterTitle2, 'heading text-2xl')}>
                  Season 1
                </h3>
                <div className={cn(styles.middle, 'p-10')}>
                  <p className="text-xl mt-3 text-justify">
                    Music has always been close to everyone's heart. For some
                    music heals, and motivates, for others, it is a source of
                    happiness even in the saddest times. Audiences embraced
                    their thoughts, gained perspective and indulged in a soulful
                    dialogue while letting their minds wander.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651487185/Website%20Content/Endevaour/DSC_9658_vhqfk0.jpg)',
              }}
            >
              <div className={cn(styles.outter)}>
                <h3 className={cn(styles.outterTitle, 'heading text-4xl')}>
                  E02: Let's talk humour
                </h3>
                <h3 className={cn(styles.outterTitle2, 'heading text-2xl')}>
                  Season 1
                </h3>
                <div className={cn(styles.middle, 'p-10')}>
                  <p className="text-xl mt-3 text-justify">
                    Chapter 2 was more power-packed than ever! This time, the
                    audiences spoke humour. The attendees came to depart with
                    gleeful smiles, a sense of inner fulfilment, and strangers-
                    turned friends, for a lifetime! Free up your weekends! Join
                    Community Conversations- where we meet, share ideas, let the
                    dialogue flow and build memorable experiences forevermore.
                    Continue being a part of our coterie and engage in Community
                  </p>
                </div>
              </div>
            </div>

            {/*<div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{ backgroundImage: 'url(/cc3.png)' }}
            >
              <div className={cn(styles.outter)}>
                <h3 className={cn(styles.outterTitle, 'heading text-4xl')}>
                  E03: Let’s Talk Learning
                </h3>
                <h3 className={cn(styles.outterTitle2, 'heading text-2xl')}>
                  Season 1
                </h3>
                <div className={cn(styles.middle, 'p-10')}>
                  <p className="text-xl mt-3 text-justify">
                    The concept of gaining knowledge unfurls far beyond learning
                    solely through lines of text. It's the experiences,
                    hardships and victories that teach us the real life lessons.
                    The attendees gained insights and shared with each other
                    their thoughts on 'Learning'.
                  </p>
                </div>
              </div>
              </div>*/}

            <div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dfgz4hsg0/image/upload/v1681458478/Website%20Content%202023/CC/cinema_ar4cix.jpg)',
              }}
            >
              <div className={cn(styles.outter)}>
                <h3 className={cn(styles.outterTitle, 'heading text-4xl')}>
                  E01: Let’s Talk Cinema
                </h3>
                <h3 className={cn(styles.outterTitle2, 'heading text-2xl')}>
                  Season 2
                </h3>
                <div className={cn(styles.middle, 'p-10')}>
                  <p className="text-xl mt-3 text-justify">
                    Cinema, as an art form, holds a unique ability to plumb the
                    depths of the human psyche, stirring emotions, and sparking
                    contemplation that can change our perceptions of the world
                    around us. This episode of Community Conversations, delved
                    deep into the world of cinema, exploring its rich history
                    and significance, and discussing how it has influenced
                    everyone personally and as a society.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dfgz4hsg0/image/upload/v1681458828/Website%20Content%202023/CC/culture_wuwsqu.jpg)',
                filter: 'brightness(80%)',
              }}
            >
              <div className={cn(styles.outter)}>
                <h3 className={cn(styles.outterTitle, 'heading text-4xl')}>
                  E02: Let’s Talk Culture
                </h3>
                <h3 className={cn(styles.outterTitle2, 'heading text-2xl')}>
                  Season 2
                </h3>
                <div className={cn(styles.middle, 'p-10')}>
                  <p className="text-xl mt-3 text-justify">
                    Culture, as we know it, is the epitome of human creativity,
                    a representation of our beliefs and values that are elevated
                    through various forms of art such as music, dance, and
                    folklore. At its core, culture is a testament to our
                    memories, which forms the bedrock of our civilization,
                    society, and ultimately our future. The audience embarked on
                    a quest to uncover the hidden colloquies buried deep within
                    our cultural archives.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dfgz4hsg0/image/upload/v1681458657/Website%20Content%202023/CC/liter_c54hj7.jpg)',
              }}
            >
              <div className={cn(styles.outter)}>
                <h3 className={cn(styles.outterTitle, 'heading text-4xl')}>
                  E03: Let’s Talk Literature
                </h3>
                <h3 className={cn(styles.outterTitle2, 'heading text-2xl')}>
                  Season 2
                </h3>
                <div className={cn(styles.middle, 'p-10')}>
                  <p className="text-xl mt-3 text-justify">
                    The third episode of community conversations, Let’s Talk
                    Literature, was an intuitive event where we celebrated the
                    power of words and the beauty of storytelling with
                    interactive experiences, discussions, and activities.
                    Literature expresses the author's ideas, emotions, and
                    experiences to the reader through words, which can challenge
                    our beliefs and inspire change. We uncovered these stories'
                    grip on our imagination and came together to share our
                    passion for literature.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{ backgroundImage: 'url(/cc3.png)' }}
            >
              <div className={cn(styles.outter)}>
                <h3 className={cn(styles.outterTitle, 'heading text-4xl')}>
                  E04: Let’s Talk Sports
                </h3>
                <h3 className={cn(styles.outterTitle2, 'heading text-2xl')}>
                  Season 2
                </h3>
                <div className={cn(styles.middle, 'p-10')}>
                  <p className="text-xl mt-3 text-justify">
                    Sports are exciting, thrilling, and emotional for many of
                    us. Sports are a passion, a way to unwind from the stress of
                    everyday life, or a way to stay fit. Episode 4 of Community
                    Conversation was fun to witness. Let's talk Sports, was no
                    less than a battlefield, the attendees and the team went toe
                    to toe and learned important lessons in camaraderie,
                    sportsmanship, and brotherhood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <LookBook years={cc} title="BTS"  color="black" />
      </div>
    </div>
  )
}
