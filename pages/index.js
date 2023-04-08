import FragmentsSection from '@/components/HomePage/fragmentsSection'
import Cards from '@/components/HomePage/Cards'
import Hero from '@/components/HomePage/Hero'
import TimeLineSection from '@/components/HomePage/TimeLineSection'

export default function Home() {
  return (
    <>
      <main
        className="bg-black bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/bg.png)' }}
      >
        <Hero />

        <FragmentsSection />
        <Cards />
        <TimeLineSection />
      </main>
    </>
  )
}
