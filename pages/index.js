import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import FragmentsSection from '@/components/HomePage/fragmentsSection'
import Cards from '@/components/HomePage/Cards'
import Hero from '@/components/HomePage/Hero'
import TimeLineSection from '@/components/HomePage/TimeLineSection'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)

  return (
    <>
      <main >
        <Hero />

        <FragmentsSection />
        <TimeLineSection />

        <Cards />
      </main>
    </>
  )
}
