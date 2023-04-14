import { useState } from 'react'
import cn from 'classnames'
import styles from '../../styles/newtimeline.module.scss'
import Image from 'next/image'

export default function newTimeLine() {
  const [pane0, setPane0] = useState(true)
  const [pane1, setPane1] = useState(false)
  const [pane2, setPane2] = useState(false)
  const [pane3, setPane3] = useState(false)
  const [pane4, setPane4] = useState(false)
  const [pane5, setPane5] = useState(false)
  const [pane6, setPane6] = useState(false)

  const paneClassName = cn(
    styles.pane,
    'cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 md:min-h-[60vh] min-w-14 overflow-hidden relative rounded-cc transition-all'
  )
  const activePaneClassName = cn(
    styles.pane,
    styles.active,
    'cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 md:min-h-[60vh] min-w-14 overflow-hidden relative rounded-cc transition-all'
  )

  function handleClick(idx) {
    switch (idx) {
      case 0:
        setPane0(true)
        setPane1(false)
        setPane2(false)
        setPane3(false)
        setPane4(false)
        setPane5(false)
        setPane6(false)
        break
      case 1:
        setPane0(false)
        setPane1(true)
        setPane2(false)
        setPane3(false)
        setPane4(false)
        setPane5(false)
        setPane6(false)
        break
      case 2:
        setPane0(false)
        setPane1(false)
        setPane2(true)
        setPane3(false)
        setPane4(false)
        setPane5(false)
        setPane6(false)
        break
      case 3:
        setPane0(false)
        setPane1(false)
        setPane2(false)
        setPane3(true)
        setPane4(false)
        setPane5(false)
        setPane6(false)
        break
      case 4:
        setPane0(false)
        setPane1(false)
        setPane2(false)
        setPane3(false)
        setPane4(true)
        setPane5(false)
        setPane6(false)
        break
      case 5:
        setPane0(false)
        setPane1(false)
        setPane2(false)
        setPane3(false)
        setPane4(false)
        setPane5(true)
        setPane6(false)
        break
      case 6:
        setPane0(false)
        setPane1(false)
        setPane2(false)
        setPane3(false)
        setPane4(false)
        setPane5(false)
        setPane6(true)
        break
    }
  }

  return (
    <>
      <section
        className=""
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <h2 className="heading text-5xl text-white py-5 md:py-[3.75rem] mx-12 md:mx-[8rem] ">
          Our Journey
        </h2>
        <div className="antialiased bg-transparent flex flex-col font-sans items-stretch justify-center md:flex-row md:items-center">
          <div className="flex flex-col flex-grow items-stretch max-w-6xl min-w-md w-full md:flex-row md:overflow-hidden my-8">
            <div
              className={pane0 ? activePaneClassName : paneClassName}
              onClick={(e) => handleClick(0)}
            >
              <div
                className={cn(
                  styles.background,
                  'absolute  bg-center bg-cover bg-red-500  bg-red-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 p-20'
                )}
                style={{
                  backgroundImage: 'url(/timeline/1.png)',
                }}
              >
                <p className="md:text-base text-white text-justify">
                  The "Growth" of TEDxVITPune began in April 2015, as we aspired
                  to put forth the best of all events with a mission to bring
                  together brilliant minds competent in "Spreading Ideas". With
                  a 9 speaker line-up, the pilot event garnered attention all
                  across Pune and was set to embark on a journey to seek
                  inspiration from revolutionary ideas.
                </p>
              </div>

              <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
              <div
                className={cn(
                  styles.label,
                  'absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 md:mb-3 md:ml-2 transition-all z-20'
                )}
              >
                <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-red-500 w-10">
                  <Image
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/15_fqiof1.svg"
                    width={25}
                    height={25}
                  />
                </div>
                {!pane0 && (
                  <div className="-rotate-90 absolute  heading uppercase text-2xl text-center bottom-36 -left-2">2015</div>
                )}
                <div
                  className={cn(
                    styles.content,
                    'flex flex-col justify-center leading-tight text-white whitespace-pre'
                  )}
                >
                  <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                    Growth
                  </div>
                  <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">
                  The Pilot | Edition 1
                  </div>
                </div>
              </div>
            </div>

            <div
              className={pane1 ? activePaneClassName : paneClassName}
              onClick={(e) => handleClick(1)}
            >
              <div
                className={cn(
                  styles.background,
                  'absolute  bg-center bg-cover bg-yellow-500   bg-yellow-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 p-20'
                )}
                style={{
                  backgroundImage: 'url(/timeline/2.png)',
                }}
              >
                <p className="md:text-base text-white text-justify">
                  After "Growth" came the moment to "Crossover". The moment to
                  foster the fire within us and fight all barriers for seeking
                  answers to challenging existing norms. With an exceptional
                  lineup of speakers and an elevated event experience, the
                  second edition of TEDxVITPune carried the legacy forward with
                  an intent to put together a marvellous experience.
                </p>
              </div>

              <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
              <div
                className={cn(
                  styles.label,
                  'absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 md:mb-3 md:ml-2 transition-all z-20'
                )}
              >
                <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-yellow-500 w-10">
                  <Image
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/16_l6ewrv.svg"
                    width={25}
                    height={25}
                  />
                  {!pane1 && (
                    <div className="-rotate-90 absolute  heading uppercase text-2xl text-center bottom-36 -left-2 text-black">2016</div>
                  )}
                </div>
                <div
                  className={cn(
                    styles.content,
                    ' flex flex-col justify-center leading-tight text-white whitespace-pre'
                  )}
                >
                  <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                  Let's Crossover
                  </div>
                  <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">
                  Traversing All Hurdles | Edition 2
                  </div>
                </div>
              </div>
            </div>

            <div
              className={pane2 ? activePaneClassName : paneClassName}
              onClick={(e) => handleClick(2)}
            >
              <div
                className={cn(
                  styles.background,
                  'absolute  bg-center bg-green-500 bg-green-img bg-cover  bg-red-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 p-20'
                )}
                style={{
                  backgroundImage: 'url(/timeline/3.png)',
                }}
              >
                <p className="md:text-base text-white text-justify">
                  From an award-winning national singer to numerous eminent
                  speakers, the third edition witnessed the unification of
                  ingenious minds, be it innovators, filmmakers, or
                  entertainers. Our alumni graced the event by sharing their
                  motivational life stories and helping us “Connect the Dots” to
                  find the magic in our mundane lives. Speakers like Aniruddha
                  Sen, Sachin Sanghe, Ramesh Botaljee, and several others,
                  enhanced the experience by truly exhibiting the power of
                  ideas.
                </p>
              </div>
              <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
              <div
                className={cn(
                  styles.label,
                  'absolute bottom-0 duration-700 ease-in-out flex  left-0 mb-2 ml-3 md:mb-3 md:ml-2 transition-all z-20'
                )}
              >
                <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-green-500 w-10">
                  <Image
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/17_vas4kn.svg"
                    width={25}
                    height={25}
                  />
                  {!pane2 && (
                    <div className="-rotate-90 absolute  heading uppercase text-2xl text-center bottom-36 -left-2 text-black">2017</div>
                  )}
                </div>
                <div
                  className={cn(
                    styles.content,
                    'flex flex-col justify-center leading-tight text-white whitespace-pre'
                  )}
                >
                  <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                  Connecting the Dots
                  </div>
                  <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">
                  Pause & Take a Step Back | Edition 3
                  </div>
                </div>
              </div>
            </div>

            <div
              className={pane3 ? activePaneClassName : paneClassName}
              onClick={(e) => handleClick(3)}
            >
              <div
                className={cn(
                  styles.background,
                  'absolute  bg-center bg-cover bg-blue-500 bg-blue-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 p-20'
                )}
                style={{
                  backgroundImage: 'url(/timeline/1.png)',
                }}
              >
                <p className="md:text-base text-white text-justify">
                  "Courage is what drives us, and you never know what is waiting
                  until you complete your journey and reach the destination."
                  The fourth edition of TEDxVITPune was not simply an event, but
                  an exquisite experience altogether. Powerful speakers,
                  unprecedented ideas, and melodious musicians helped raise the
                  bar to showcase what a TEDx experience truly feels like. The
                  offline event took place in October 2018, with remarkable
                  orators like Girish Narayandass, Sameer Agashe, Anusree Raha,
                  Stefano Pele, and many others.
                </p>
              </div>

              <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
              <div
                className={cn(
                  styles.label,
                  'absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 md:mb-3 md:ml-2 transition-all z-20'
                )}
              >
                <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-blue-500 w-10">
                  <Image
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/18_gjf3ro.svg"
                    width={25}
                    height={25}
                  />
                  {!pane3 && (
                    <div className="-rotate-90 absolute  heading uppercase text-2xl text-center bottom-36 -left-2 text-black">2018</div>
                  )}
                </div>
                <div
                  className={cn(
                    styles.content,
                    'flex flex-col justify-center leading-tight text-white whitespace-pre'
                  )}
                >
                  <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                  Walking the Wire 
                  </div>
                  <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">
                  To Countless Risks And No What-ifs | Edition 4
                  </div>
                </div>
              </div>
            </div>

            <div
              className={pane4 ? activePaneClassName : paneClassName}
              onClick={(e) => handleClick(4)}
            >
              <div
                className={cn(
                  styles.background,
                  'absolute  bg-center bg-cover bg-violet-500 bg-violet-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 p-20'
                )}
                style={{
                  backgroundImage: 'url(/timeline/2.png)',
                }}
              >
                <p className="md:text-base text-white text-justify">
                  Discovering the endless realm of possibilities, the 5th
                  Edition of TEDxVITPune trod on a path of exciting revelations.
                  From a never-before-seen amalgamation of science and art to
                  understanding the importance of psychological well-being, the
                  event witnessed notable narrations and brainstormed splendid
                  ideas. The attendees spent the evening rejoicing as they
                  engaged in engrossing activities through coffee brewing,
                  decoupage & miniature art, and many other workshops!
                </p>
              </div>

              <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
              <div
                className={cn(
                  styles.label,
                  'absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 md:mb-3 md:ml-2 transition-all z-20'
                )}
              >
                <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10">
                  <Image
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/19_zfvvop.svg"
                    width={20}
                    height={20}
                  />
                  {!pane4 && (
                    <div className="-rotate-90 absolute  heading uppercase text-2xl text-center bottom-36 -left-2 text-black">2019</div>
                  )}
                </div>
                <div
                  className={cn(
                    styles.content,
                    'flex flex-col justify-center leading-tight text-white whitespace-pre'
                  )}
                >
                  <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                  Unravelling The Parallax
                  </div>
                  <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">
                  Looking At The Bigger Picture | Edition 5
                  </div>
                </div>
              </div>
            </div>

            <div
              className={pane5 ? activePaneClassName : paneClassName}
              onClick={(e) => handleClick(5)}
            >
              <div
                className={cn(
                  styles.background,
                  'absolute  bg-center bg-cover bg-orange-500 bg-orange-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 p-20'
                )}
                style={{
                  backgroundImage: 'url(/timeline/3.png)',
                }}
              >
                <p className="md:text-base text-white text-justify">
                  Delineating the perseverance to re-emerge stronger despite
                  times of turmoil, the 6th edition of TEDxVITPune aimed at
                  inciting social impact and endowed guidance to help resurface
                  as the finest version of yourself. The online event unravelled
                  as the remarkable lineup of speakers including Amira Gill,
                  Debanshu Roy, Jishnu Chatterjee, Mark Hannant, and Avinash
                  Ramanathan, put forth their striking ideas.
                </p>
              </div>

              <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
              <div
                className={cn(
                  styles.label,
                  'absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 md:mb-3 md:ml-2 transition-all z-20'
                )}
              >
                <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10">
                  <Image
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/21_wpmxtr.svg"
                    width={20}
                    height={20}
                  />
                  {!pane5 && (
                    <div className="-rotate-90 absolute  heading uppercase text-2xl text-center bottom-36 -left-2 text-black">2021</div>
                  )}
                </div>
                <div
                  className={cn(
                    styles.content,
                    'flex flex-col justify-center leading-tight text-white whitespace-pre'
                  )}
                >
                  <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                  Reemergence
                  </div>
                  <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">
                  Resurfacing Amidst Turmoil | Edition 6
                  </div>
                </div>
              </div>
            </div>

            <div
              className={pane6 ? activePaneClassName : paneClassName}
              onClick={(e) => handleClick(6)}
            >
              <div
                className={cn(
                  styles.background,
                  'absolute  bg-center bg-cover bg-indigo-500  bg-indigo-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 p-20'
                )}
                style={{
                  backgroundImage: 'url(/timeline/1.png)',
                }}
              >
                <p className="md:text-base text-white text-justify">
                Embracing the chaos and the unknown with open hearts, for it is through these experiences that we grow and discover the depths of our strength and resilience. The 7th edition of TEDxVITPune saw a phenomenal speaker lineup, including Swanandi Tikekar, Sandeep Godbole, Samar Nakhate, Suchitha Champak, Abhinav Kafare, Deepak Krishnan, Karan Arjun Singh, and Sonal Barmecha, spread their ideas on diverse topics.
                </p>
              </div>

              <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
              <div
                className={cn(
                  styles.label,
                  'absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 md:mb-3 md:ml-2 transition-all z-20'
                )}
              >
                <div className="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10">
                  <Image
                    src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/19_zfvvop.svg"
                    width={25}
                    height={25}
                  />
                  {!pane6 && (
                    <div className="-rotate-90 absolute  heading uppercase text-2xl text-center bottom-36 -left-2 text-black">2022</div>
                  )}
                </div>
                <div
                  className={cn(
                    styles.content,
                    'flex flex-col justify-center leading-tight text-white whitespace-pre'
                  )}
                >
                  <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                  Embracing the Pandemonium
                  </div>
                  <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">
                    Share your potential | Edition 7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
