import FragmentsSection from '@/components/HomePage/fragmentsSection'
import Cards from '@/components/HomePage/Cards'
import Hero from '@/components/HomePage/Hero'
import { useEffect, useState } from 'react'
import Transition from '@/components/TransitionEffect'
import TimeLineSection from '@/components/HomePage/TimeLineSection'
import StellarLineup from '@/components/HomePage/StellarLineup'
import Acquainted from '@/components/HomePage/Acquainted'

export default function Home() {
  const [onlyYear, setOnlyYear] = useState(false)

  useEffect(() => {
    let ele = document.getElementsByClassName('dot-label')
    console.log(ele)
    for (let i = 0; i < ele.length; i++) {
      let text = ele[i].innerHTML
      console.log(text)
      let textArr = text.slice(6)
      ele[i].innerHTML = textArr
    }
  }, [])

  return (
    <>
      <main
        className="bg-black bg-cover bg-repeat"
        style={{ backgroundImage: 'url(/bg.png)' }}
      >
        <Hero />
        <FragmentsSection />
        {/* <StellarLineup /> */}
        <TimeLineSection/>
        <Cards />
        <Acquainted />
      </main>
    </>
  )
}
