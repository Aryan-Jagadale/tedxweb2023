import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
//import { Autoplay, Pagination, Navigation } from 'swiper'
import { AiOutlineArrowRight } from 'react-icons/ai'
import 'swiper/css'
import Image from 'next/image'
import '../../styles/cursorReplace.module.scss'

import imageSlider1 from '../../public/swiperImg/imageSlider1.png'
import imageSlider2 from '../../public/swiperImg/imageSlider2.png'
import imageSlider3 from '../../public/swiperImg/imageSlider3.png'
import imageSlider4 from '../../public/swiperImg/imageSlider4.png'
import imageSlider5 from '../../public/swiperImg/imageSlider5.png'
import imageSlider6 from '../../public/swiperImg/imageSlider6.png'

const SwiperSliderComponenet = () => {
  const [slides, setSlides] = useState(0)
  useEffect(() => {
    let w = window.innerWidth
    w < 768 ? setSlides(1.2) : setSlides(1.5)
  }, [])

  return (
    <div className="bg-black relative py-5">
      <div className="my-[3.75rem] mx-[8rem] flex items-center justify-between">
        <h2 className="heading text-white text-5xl">Our Speaker Lineup</h2>
        <div className="border border-[#dd1313] px-4 py-3">
          <p className="text-[#dd1313] text-base font-normal flex items-center justify-center gap-2 heading tracking-wider">
            Scroll Right <AiOutlineArrowRight />
          </p>
        </div>
      </div>

      <div className="cursorReplace">
        <Swiper
          spaceBetween={50}
          slidesPerView={slides}
          grabCursor={true}
          className="w-full relative"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="flex justify-start flex-col w-fit bg-black h-[65vh] p-4">
            <div className="h-[100%] w-full flex items-end">
              {/*<Image
                alt=""
                src={imageSlider1}
                className="w-full md:w-[80%] h-full object-contain"
        />*/}
              <div className="w-[100%] h-full flex items-center justify-center gap-5">
                <div className="w-1/3 h-full">
                  <Image
                    src={imageSlider1}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="w-2/3 text-justify transition ease-in-out text-gray-500 hover:text-white tracking-wide text-xl">
                  Swanandi is an eminent actor, artist and singer. She debuted
                  in acting with serial Abhalmaya as a child actor and continued
                  to put forth captivating performances for the famous sitcom,
                  Dil Dosti Duniyadari. Owing to her constant soulful
                  performances, Swanandi has also won the first season of the
                  famous reality show, Singing Star. From creating magic behind
                  the big screen to charming all and sundry with her euphonious
                  voice- her versatility remains sublime.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-end h-[100%]">
              <div className="flex flex-col justify-between gap-0 h-full py-1 px-2 text-white">
                <p className="tracking-wide text-base md:text-xl">
                  Artists, Composer,Dancer
                </p>
                <p className="text-base md:text-lg">(01)</p>
              </div>
              <div className="uppercase text-3xl md:text-5xl font-bold leading-none heading text-white">
                Swanandi Tikekar
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-fit bg-black h-[65vh]">
            <section className="flex justify-start flex-col-reverse">
              <div className="h-[100%] flex items-end self-end">
                {/*<Image
                  alt=""
                  src={imageSlider2}
                  className="w-full md:w-[80%] h-full object-contain"
      />*/}
                <div className="w-[100%] h-full flex items-center justify-center gap-5">
                  <div className="w-1/3 h-full">
                    <Image
                      src={imageSlider2}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="w-2/3 text-justify transition ease-in-out text-gray-500 hover:text-white  tracking-wide text-xl">
                    Swanandi is an eminent actor, artist and singer. She debuted
                    in acting with serial Abhalmaya as a child actor and
                    continued to put forth captivating performances for the
                    famous sitcom, Dil Dosti Duniyadari. Owing to her constant
                    soulful performances, Swanandi has also won the first season
                    of the famous reality show, Singing Star. From creating
                    magic behind the big screen to charming all and sundry with
                    her euphonious voice- her versatility remains sublime.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-end h-[100%]">
                <div className="flex flex-col justify-between gap-0 h-full py-1 px-2 text-white">
                  <p className="tracking-wide text-xl">
                    Forever, Together, Selmon
                  </p>
                  <p className="text-lg">(02)</p>
                </div>
                <div className="text-5xl font-bold md:text-6xl leading-none heading text-white">
                  Sonal Barmecha
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide className="flex justify-start flex-col w-fit bg-black h-[65vh] p-4">
          <div className="h-[100%] w-full flex items-end">
            {/*<Image
              alt=""
              src={imageSlider1}
              className="w-full md:w-[80%] h-full object-contain"
      />*/}
            <div className="w-[100%] h-full flex items-center justify-center gap-5">
              <div className="w-1/3 h-full">
                <Image
                  src={imageSlider3}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="w-2/3 text-justify transition ease-in-out text-gray-500 hover:text-white  tracking-wide text-xl">
                Swanandi is an eminent actor, artist and singer. She debuted
                in acting with serial Abhalmaya as a child actor and continued
                to put forth captivating performances for the famous sitcom,
                Dil Dosti Duniyadari. Owing to her constant soulful
                performances, Swanandi has also won the first season of the
                famous reality show, Singing Star. From creating magic behind
                the big screen to charming all and sundry with her euphonious
                voice- her versatility remains sublime.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between gap-0 h-full py-1 px-2 text-white">
              <p className="tracking-wide text-base md:text-xl">
                Artists, Composer,Dancer
              </p>
              <p className="text-base md:text-lg">(03)</p>
            </div>
            <div className="uppercase text-3xl md:text-5xl font-bold leading-none heading text-white">
            Karan Arjun Singh
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-fit bg-black h-[65vh]">
          <section className="flex justify-start flex-col-reverse">
            <div className="h-[100%] flex items-end self-end">
              {/*<Image
                alt=""
                src={imageSlider2}
                className="w-full md:w-[80%] h-full object-contain"
    />*/}
              <div className="w-[100%] h-full flex items-center justify-center gap-5">
                <div className="w-1/3 h-full">
                  <Image
                    src={imageSlider4}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="w-2/3 text-justify transition ease-in-out text-gray-500 hover:text-white  tracking-wide text-xl">
                  Swanandi is an eminent actor, artist and singer. She debuted
                  in acting with serial Abhalmaya as a child actor and
                  continued to put forth captivating performances for the
                  famous sitcom, Dil Dosti Duniyadari. Owing to her constant
                  soulful performances, Swanandi has also won the first season
                  of the famous reality show, Singing Star. From creating
                  magic behind the big screen to charming all and sundry with
                  her euphonious voice- her versatility remains sublime.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-end h-[100%]">
              <div className="flex flex-col justify-between gap-0 h-full py-1 px-2 text-white">
                <p className="tracking-wide text-xl">
                  Forever, Together, Selmon
                </p>
                <p className="text-lg">(04)</p>
              </div>
              <div className="text-5xl font-bold md:text-6xl leading-none heading text-white">
              Sandeep Godbole
              </div>
            </div>
          </section>
        </SwiperSlide>

          
        </Swiper>
      </div>
    </div>
  )
}

export default SwiperSliderComponenet
