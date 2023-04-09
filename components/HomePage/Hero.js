import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

export default function Hero() {
 /* gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    let Elem = sectionRef.current

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: 'top+=100 top',
      markers:true,
      pin:true
    })

    return () => {
      if (trigger) trigger.kill()
    }
  }, [])*/

  return (
    <div className="w-screen h-[90vh] relative bg-black flex justify-center items-center">
      <video src="hero.mp4" autoPlay muted loop></video>
    </div>
   
  )
}
