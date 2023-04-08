'use client'
import React from 'react'
import HorizontalTimeline from 'react-horizontal-timeline'
import '../../styles/timeline.module.scss'

const EXAMPLE = [
  {
    date: '2015',
    year: '2015',
    title: 'Growth | The Pilot',
    paragraph: ` The "Growth" of TEDxVITPune began in April 2015, as we aspired to put forth the best of all events with a mission to bring together brilliant minds competent in "Spreading Ideas". With a 9 speaker line-up, the pilot event garnered attention all across Pune and was set to embark on a journey to seek inspiration from revolutionary ideas.`,
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/15_fqiof1.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PL0687I2dEWcksr9RextzeIRFms8yjaKQi`,
    bgColor:"bg-[#FF6575]"
  },
  {
    date: '2016-04-09',
    year: '2016',
    title: 'Let’s Crossover | Traversing All Hurdles',
    paragraph: ` After "Growth" came the moment to "Crossover". The moment to foster the fire within us and fight all barriers for seeking answers to challenging existing norms. With an exceptional lineup of speakers and an elevated event experience, the second edition of TEDxVITPune carried the legacy forward with an intent to put together a marvellous experience.`,
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/16_l6ewrv.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PL0687I2dEWclNQ5LLwulDH20FUvGDsSlG`,
    bgColor:"bg-[#FFD02F]"

  },
  {
    date: '2017-03-15',
    year: '2017',
    title: 'Connecting the Dots | Pause & Take a Step Back',
    paragraph:
      'From an award-winning national singer to numerous eminent speakers, the third edition witnessed the unification of ingenious minds, be it innovators, filmmakers, or entertainers. Our alumni graced the event by sharing their motivational life stories and helping us “Connect the Dots” to find the magic in our mundane lives. Speakers like Aniruddha Sen, Sachin Sanghe, Ramesh Botaljee, and several others, enhanced the experience by truly exhibiting the power of ideas.',
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/17_vas4kn.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PL0687I2dEWcm2PSEaGCYzm_mok3pfVVkT`,
    bgColor:"bg-[#3F53D9]"

  },
  {
    date: '2018-03-22',
    year: '2018',
    title: 'Walking the Wire | To Countless Risks And No What-ifs',
    paragraph: `"Courage is what drives us, and you never know what is waiting until you complete your journey and reach the destination."  The fourth edition of TEDxVITPune was not simply an event, but an exquisite experience altogether. Powerful speakers, unprecedented ideas, and melodious musicians helped raise the bar to showcase what a TEDx experience truly feels like. The offline event took place in October 2018, with remarkable orators like Girish Narayandass, Sameer Agashe, Anusree Raha, Stefano Pele, and many others.`,
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/18_gjf3ro.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PLsRNoUx8w3rNNKU261Gx7oEemGRuY_kFB`,
    bgColor:"bg-[#C131C3]"

  },
  {
    date: '2019-11-16',
    year: '2019',

    title: 'Unravelling The Parallax | Looking At The Bigger Picture',
    paragraph:
      'Discovering the endless realm of possibilities, the 5th Edition of TEDxVITPune trod on a path of exciting revelations. From a never-before-seen amalgamation of science and art to understanding the importance of psychological well-being, the event witnessed notable narrations and brainstormed splendid ideas. The attendees spent the evening rejoicing as they engaged in engrossing activities through coffee brewing, decoupage & miniature art, and many other workshops!',
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/19_zfvvop.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PLsRNoUx8w3rPXX5LlzJQQNYrvIvz5nhOz`,
    bgColor:"bg-[#34A770]"

  },
  {
    date: '2021-05-29',
    year: '2021',
    title: 'Reemergence | Resurfacing Amidst Turmoil',
    paragraph:
      'Delineating the perseverance to re-emerge stronger despite times of turmoil, the 6th edition of TEDxVITPune aimed at inciting social impact and endowed guidance to help resurface as the finest version of yourself. The online event unravelled as the remarkable lineup of speakers including Amira Gill, Debanshu Roy, Jishnu Chatterjee, Mark Hannant, and Avinash Ramanathan, put forth their striking ideas.',
    imgURL: `https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/21_wpmxtr.svg`,
    videoLink: `https://www.youtube.com/playlist?list=PL0687I2dEWckuZn6AEuZF8FOnr7T1QcVV`,
    bgColor:"bg-[#DA4848]"

  },
]

export default class TimelineSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curIdx: 0,
      prevIdx: -1,
    }
  }

  render() {
    const { curIdx } = this.state
    const year = EXAMPLE[curIdx].year
    const title = EXAMPLE[curIdx].title
    const paragraph = EXAMPLE[curIdx].paragraph
    const imgURL = EXAMPLE[curIdx].imgURL
    const videoLink = EXAMPLE[curIdx].videoLink
    const bgColor = EXAMPLE[curIdx].bgColor


    return (
      <div className="time-container bg-black" data-scroll-section>
        <h2 className="heading text-white text-5xl font-bold tracking-wide px-[5rem] pt-[5rem]">
          Past Editions: Our Journey{' '}
        </h2>
        <div className="time-inner-container">
          <div
            className="timeline-inner"
            style={{
              width: '90%',
              height: '100px',
              margin: 'auto auto',
              marginTop: '5rem',
              fontSize: '15px',
              color: 'white',
            }}
          >
            <HorizontalTimeline
              styles={{
                background: '#f8f8f8',
                foreground: '#E62B1E',
                outline: '#dfdfdf',
              }}
              fillingMotion={{ stiffness: 150, damping: 25 }}
              slidingMotion={{ stiffness: 150, damping: 25 }}
              labelWidth={200}
              linePadding={150}
              index={this.state.curIdx}
              indexClick={(index) => {
                const curIdx = this.state.curIdx
                this.setState({ curIdx: index, prevIdx: curIdx })
              }}
              values={EXAMPLE.map((x) => x.date)}
            />
          </div>

          <div className="bg-gray p-10">
            <section className={`${bgColor} rounded-3xl border-2 rounded-[35px] border-black  lg:h-[80vh]`}>
              <section className="flex items-center justify-center flex-col md:flex-row w-full h-full p-5 gap-5">

                <div className="w-full md:w-[35%] md:border-r-2 md:border-black h-full flex flex-col">
                  <section className="my-5">
                    <h2 className="text-2xl text-center md:text-left font-bold text-black">{year}</h2>
                  </section>
                  <section className="flex items-center justify-center h-[50vh] md:h-[75%] p-5">
                    <img src={imgURL} alt={imgURL} className="h-full w-full" />
                  </section>
                </div>

                <div className="w-full md:w-[65%] h-full">
                  <section className="relative h-full mx-3">
                    <div className="my-5">
                      <h2 className="heading text-3xl font-bold tracking-wide">
                        {title}
                      </h2>
                    </div>

                    <div>
                      <p className="tracking-wide text-base leading-loose">
                        {paragraph}
                      </p>
                    </div>

                    <div className=" my-4 block lg:absolute lg:bottom-5">
                      <button className="bg-transparent border-2 border-black text-black tracking-wider uppercase px-10 py-2 text-lg font-semibold duration-100 ease-in-out hover:text-white hover:bg-black">
                        <a href={videoLink} alt={videoLink}
                        target="_blank"
                        rel="noreferrer">Watch</a>
                      </button>
                    </div>
                  </section>
                </div>
              </section>
            </section>
          </div>
          
        </div>
      </div>
    )
  }
}
