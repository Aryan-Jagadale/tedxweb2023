import FragmentsSection from '@/components/HomePage/fragmentsSection'
import Cards from '@/components/HomePage/Cards'
import Hero from '@/components/HomePage/Hero'
import TimeLineSection from '@/components/HomePage/TimeLineSection'

export default function Home() {
  return (
    <>
      <main>
      
        <Hero />

        <FragmentsSection />
        <TimeLineSection/>
        <Cards />
      </main>
    </>
  )
}
