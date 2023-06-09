import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'

gsap.registerPlugin(CustomEase)
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1')

export default function NewFragmentsSection() {
  // countdown to 30th april
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [timeUp, setTimeUp] = useState(false)

  const { days, hours, minutes, seconds } = time

  const startTimer = () => {
    const countDownDate = new Date('April 30, 2023 00:00:00').getTime()

    const x = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(x)
        setTimeUp(true)
      } else {
        setTime({ days, hours, minutes, seconds })
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      setTimeUp(false)
    }
  }, [])

  useEffect(() => {
    const titles = document.querySelectorAll('.h_title')
    const t1 = gsap.timeline({ defaults: { duration: 10 } })

    titles.forEach((title, index) => {
      const e1 = title.querySelectorAll('h1')
      const delay = index * 0.15

      t1.to(e1, {
        y: 0,
        duration: 2,
        ease: 'cubic-text',
      })
    })
  }, [])

  return (
    <div
      className=" text-white bg-no-repeat bg-left-bottom w-full py-28 xl:px-0 px-6"
      style={{
        //backgroundImage: 'url(../backg/1.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
      }}
    >
      {/*<img src="/themelogo.png" className="absolute -left-10 z-20 w-[300px]" />*/}
      <div className="max-w-6xl mx-auto md:flex">
        <div className="h_title xl:w-1/2">
          <div className="flex justify-center items-left flex-col overflow-hidden">
            <h1 className="text-3xl sm:text-4xl text-center md:text-left xl:text-5xl font-bold heading text-white px-4 xl:px-0 p-5 translate-y-full">
              30th April, 2023
            </h1>
            <h1 className="text-[2.50rem] text-center md:text-left text-5xl sm:text-6xl mb-4 xl:mb-0 xl:text-7xl mt-4 font-bold heading text-white pr-0 sm:pr-4 xl:pr-0">
              FRAGMENTS
            </h1>
          </div>
        </div>
        <div className="h_title xl:w-1/2">
          <div>
            <p className="text-lg md:text-xl text-white text-justify tracking-wider">
              We fearlessly embark on a journey of discovery, navigating through
              the unfamiliar paths of a complex problem. Our thirst for
              knowledge leads us to constantly seek fresh insights and
              perspectives that will steer us towards the right path. By
              immersing ourselves in the diverse realities we encounter, we
              strive to reveal the concealed truths that will guide us to a
              place of genuine tranquility and inner peace, even amid chaos and
              uncertainty. The world is brimming with fragments of inspiration,
              ideas, and emotions. Our unique experiences shape us into the
              individuals we are today, each one remarkable in its own way. All
              we need to do is unearth and piece together these fragments,
              unlocking our full potential.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 flex justify-center md:justify-end">
        <button className="bg-[#dd1313] border-none tracking-wider text-white text-xl outline-none heading px-12 py-2">
          <a href="https://forms.gle/6ZHFeHFPqy5T6YPGA">Register Now!</a>
        </button>
      </div>
      <div className="max-w-3xl mx-auto mt-24 flex justify-evenly items-center text-white">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold heading text-white   tracking-wider">
            {('0' + days).slice(-2)}
          </h1>
          <p className="text-xl text-white font-bold mt-2 text-justify">Days</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-7xl font-bold heading text-white mb-10  tracking-wider">
            :
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold heading text-white   tracking-wider">
            {('0' + hours).slice(-2)}
          </h1>
          <p className="text-xl text-white font-bold mt-2 text-justify">
            Hours
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold heading text-white mb-10  tracking-wider">
            :
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold heading text-white   tracking-wider">
            {('0' + minutes).slice(-2)}
          </h1>
          <p className="text-xl text-white font-bold mt-2 text-justify">Mins</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-7xl font-bold heading text-white mb-10  tracking-wider">
            :
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold heading text-white   tracking-wider">
            {('0' + seconds).slice(-2)}
          </h1>
          <p className="text-xl text-white font-bold mt-2 text-justify">Secs</p>
        </div>
      </div>
      {/* <div className="max-w-6xl mx-auto mt-8 flex justify-center">
                <h2 className="text-2xl text-gray-700 font-bold">Left</h2>
            </div> */}
    </div>
  )
}
