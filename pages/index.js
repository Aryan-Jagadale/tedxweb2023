import FragmentsSection from '@/components/HomePage/fragmentsSection'
import Cards from '@/components/HomePage/Cards'

export default function Home() {
  return (
    <main
      className="bg-black bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(/bg.png)' }}
    >
      <FragmentsSection />
      <Cards />
    </main>
  )
}
