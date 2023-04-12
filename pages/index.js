import FragmentsSection from '@/components/HomePage/fragmentsSection'
import NewFragmentsSection from '@/components/HomePage/newFragmentsSection'
import Cards from '@/components/HomePage/Cards'
import Hero from '@/components/HomePage/Hero'
import { useEffect, useState } from 'react'
import NewTimeLine from '@/components/HomePage/newTimeLine'
import Transition from '@/components/TransitionEffect'
import TimeLineSection from '@/components/HomePage/TimeLineSection'
import StellarLineup from '@/components/HomePage/StellarLineup'
import Acquainted from '@/components/HomePage/Acquainted'
import SwiperSliderComponenet from '@/components/HomePage/SwiperSlider'
import PhoneAcquainted from '@/components/HomePage/PhoneAcquainted'
import SwiperSlider from '../components/HomePage/SwiperSlider'

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
        
        // style={{ backgroundImage: 'url(/bg.png)' }}
      >
        <Hero />
        {/* <FragmentsSection /> */}
        <NewFragmentsSection />
        {/* <StellarLineup /> */}
        {/* <TimeLineSection/> */}
        <NewTimeLine />
  <Cards />
        {/* <SwiperSliderComponenet/> */}
        {/* <Acquainted /> */}
        {/* <PhoneAcquainted /> */}
      </main>
    </>
  )
}