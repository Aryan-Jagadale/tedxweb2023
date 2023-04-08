/*import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'*/

export default function Hero() {
  /*gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    let Elem = sectionRef.current

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    })

    return () => {
      if (trigger) trigger.kill()
    }
  }, [])*/

  return (
    <section>
      {/*<div className="w-screen h-screen absolute top-0 left-0 z-50 bg-black flex justify-center items-center">
        <img
          src="/4.png"
          className="invisible md:visible absolute right-20 w-[200px]"
        />
        <img
          src="/5.png"
          className="invisible md:visible absolute left-20 w-[200px]"
        />
        <img
          src="/5.png"
          className="invisible md:visible absolute bottom-0 right-32 rotate-45 w-[100px]"
        />
        <img
          src="/4.png"
          className="invisible md:visible absolute top-0 w-[150px]"
        />
        <img
          src="/5.png"
          className="invisible md:visible absolute top-0 right-16 w-[150px] rotate-90"
        />
        <img
          src="/4.png"
          className="invisible md:visible absolute bottom-10 left-72 w-[100px] rotate-90"
        />
        <img
          src="/5.png"
          className="invisible md:visible absolute top-10 left-32 -rotate-45 w-[100px]"
        />
        <img
          src="/4.png"
          className="invisible md:visible absolute w-[150px] rotate-90"
        />

        <h1 className="text-4xl sm:text-7xl md:text-9xl text-white heading">
          FRAGMENTS
        </h1>
  </div>*/}
    <div className="h-[90vh] w-screen bg-red-300 relative">
    <h1 className="text-white text-5xl font-bold">Fragments</h1>
    
    </div>
    </section>
  )
}
