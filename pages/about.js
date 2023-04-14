import DesktopAbout from '@/components/About/DesktopAbout'
// import PhoneAbout from "@/components/About/PhoneAbout"

export default function About() {
  return (
    <div
      style={{
        backgroundImage: 'url(/backg/full2.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        //backgroundSize: 'cover',
        width: '100%',
      }}
    >
      <DesktopAbout />
    </div>
  )
}
