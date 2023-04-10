import FragmentsSection from '@/components/HomePage/fragmentsSection'
import Cards from '@/components/HomePage/Cards'
import Hero from '@/components/HomePage/Hero'
import Transition from '@/components/TransitionEffect'
import TimeLineSection from '@/components/HomePage/TimeLineSection'
import StellarLineup from '@/components/HomePage/StellarLineup'

export default function Home() {
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
      </main>
    </>
  )
}
