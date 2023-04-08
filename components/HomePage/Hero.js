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
    <div className="w-screen xl:h-screen xl:absolute top-0 left-0 z-50 bg-black flex justify-center items-center">
      <video src="hero.mp4" autoPlay muted loop></video>
    </div>
   
  )
}
