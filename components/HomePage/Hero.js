import { FliesText } from 'react-text-fun'

export default function Hero() {
  return (
    <div className="w-screen xl:h-screen xl:absolute top-0 left-0 z-50 bg-black flex justify-center items-center">
      <video src="hero.mp4" autoPlay muted loop></video>
    </div>
  )
}
