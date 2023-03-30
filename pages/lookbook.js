import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'
import Column from '@/components/LookBook/Column'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function LookBook() {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
    >
      <main
        className="w-full relative bottom-20 px-12 flex justify-center bg-black"
        data-scroll-container
        ref={containerRef}
      >
        <div className="relative z-10 flex pt-[5vh] pb-[15vh] mx-2 h-screen flex-col-reverse ">
          <Column num={1} year={2016} />
        </div>
        <div
          className="relative z-10 flex pt-[5vh] pb-[15vh] mx-2 "
          data-scroll-section
        >
          <Column isCenter={true} num={2} year={2017} />
        </div>
        <div className="relative z-10 flex pt-[5vh] pb-[15vh] mx-2  h-screen flex-col-reverse ">
          <Column num={3} year={2018} />
        </div>
        <div
          className="relative z-10 flex pt-[5vh] pb-[15vh] mx-2 "
          data-scroll-section
        >
          <Column isCenter={true} num={5} year={2019} />
        </div>
        {/* <div
                    className="relative z-10 flex pt-[5vh] pb-[15vh] mx-2 h-screen flex-col-reverse"
                >
                    <Column num={5} year={2021} />
                </div> */}
      </main>
    </LocomotiveScrollProvider>
  )
}
