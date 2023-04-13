import LookBook from '@/components/LookBook/LookBook'
import Image from 'next/image'
import styles from '../styles/cc.module.scss'
import cn from 'classnames'

const bannerImage = '/ccbanner.png'

export default function CC() {
  let cc = ['cc']
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
            “Community Conversations” is a platform to share your ideas, get
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
              style={{ backgroundImage: 'url(/cc1.png)' }}
            >
              <div className={cn(styles.outter)}>
                <h3 className={cn(styles.outterTitle, "heading text-4xl")}>“Let's talk music”</h3>
              <div className={cn(styles.middle, 'p-10')}>
                <h3 className="heading text-4xl">“Let's talk music”</h3>
                <p className="text-xl mt-3">
                  Music has always been close to everyone's heart. For some
                  music heals, and motivates, for others, it is a source of
                  happiness even in the saddest times. Audiences embraced their
                  thoughts, gained perspective and indulged in a soulful
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
              style={{ backgroundImage: 'url(/cc2.png)' }}
            >
              <div className={cn(styles.middle, 'p-10')}>
                <h3 className="heading text-4xl">“Let's talk music”</h3>
                <p className="text-2xl mt-3">
                  Music has always been close to everyone's heart. For some
                  music heals, and motivates, for others, it is a source of
                  happiness even in the saddest times. Audiences embraced their
                  thoughts, gained perspective and indulged in a soulful
                  dialogue while letting their minds wander.
                </p>
              </div>
            </div>
            <div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{ backgroundImage: 'url(/cc3.png)' }}
            >
              <div className={cn(styles.middle, 'p-10')}>
                <h3 className="heading text-4xl">“Let's talk music”</h3>
                <p className="text-2xl mt-3">
                  Music has always been close to everyone's heart. For some
                  music heals, and motivates, for others, it is a source of
                  happiness even in the saddest times. Audiences embraced their
                  thoughts, gained perspective and indulged in a soulful
                  dialogue while letting their minds wander.
                </p>
              </div>
            </div>
            <div
              className={cn(
                styles.container,
                'bg-no-repeat bg-center bg-cover rounded-cc'
              )}
              style={{ backgroundImage: 'url(/cc4.png)' }}
            >
              <div className={cn(styles.middle, 'p-10')}>
                <h3 className="heading text-4xl">“Let's talk music”</h3>
                <p className="text-2xl mt-3">
                  Music has always been close to everyone's heart. For some
                  music heals, and motivates, for others, it is a source of
                  happiness even in the saddest times. Audiences embraced their
                  thoughts, gained perspective and indulged in a soulful
                  dialogue while letting their minds wander.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <LookBook years={cc} color="black" />
      </div>
    </div>
  )
}
