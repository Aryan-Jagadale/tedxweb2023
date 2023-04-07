import { FliesText } from 'react-text-fun'

export default function Hero() {
  return (
    <div className="can w-screen h-screen absolute top-0 left-0 z-50 bg-black flex justify-center items-center">
      <img
        src="/4.png"
        className="invisible md:visible absolute right-20 w-[200px]"
      />
      <img
        src="/5.png"
        className="invisible md:visible absolute left-20 w-[200px]"
      />
      <img
        src="/5.png"
        className="invisible md:visible absolute bottom-0 right-32 rotate-45 w-[100px]"
      />
      <img
        src="/4.png"
        className="invisible md:visible absolute top-0 w-[150px]"
      />
      <img
        src="/5.png"
        className="invisible md:visible absolute top-0 right-16 w-[150px] rotate-90"
      />
      <img
        src="/4.png"
        className="invisible md:visible absolute bottom-10 left-72 w-[100px] rotate-90"
      />
      <img
        src="/5.png"
        className="invisible md:visible absolute top-10 left-32 -rotate-45 w-[100px]"
      />
      <img
        src="/4.png"
        className="invisible md:visible absolute w-[150px] rotate-90"
      />
      {/*<FliesText
        backgroundColor="gray"
        fontSize={150}
        fontWeight="bold"
        cellWidth={0.015}
        fill="#FFFFFF"
        speed={3}
        text="FRAGMENTS"
        radius={0.5}
        className={"heading"}
        
        
  />*/}
      <h1 className="text-4xl sm:text-7xl md:text-9xl text-white heading">
                FRAGMENTS
  </h1>
    </div>
  )
}
