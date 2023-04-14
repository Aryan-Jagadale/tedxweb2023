import NewFragmentsSection from '@/components/HomePage/newFragmentsSection'
import Cards from '@/components/HomePage/Cards'
import Hero from '@/components/HomePage/Hero'
import NewTimeLine from '@/components/HomePage/newTimeLine'
import SwiperSliderComponenet from '@/components/HomePage/SwiperSlider'

export default function Home() {
  return (
    <>
      <main
        style={{
          backgroundImage: 'url(/finalbg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <Hero />
        <NewFragmentsSection />
        <NewTimeLine />
        <SwiperSliderComponenet />
        <Cards />
      </main>
    </>
  )
}
