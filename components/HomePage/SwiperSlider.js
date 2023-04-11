import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
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
      <div className="my-[2.75rem] mx-[8rem]">
        <h2 className="heading text-white text-5xl">Our Speaker Lineup</h2>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        grabCursor={true}
        className="w-full relative cursorReplace"
      >
        <SwiperSlide className="flex justify-start flex-col w-fit bg-black h-[65vh]">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider1}
              className="w-full md:w-[80%] h-full object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between gap-10 h-full py-1 px-2 text-white">
              <p className="tracking-wide text-base md:text-xl">
                Artists, Composer,Dancer
              </p>
              <p className="text-base md:text-lg">(01)</p>
            </div>
            <div className="uppercase text-3xl md:text-5xl font-bold leading-none heading text-white">
              Aaryan jagadale
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-fit bg-black h-[65vh]">
          <section className="flex justify-start flex-col-reverse">
            <div className="h-[100%] flex items-end self-end">
              <Image
                alt=""
                src={imageSlider2}
                className="w-full md:w-[80%] h-full object-contain"
              />
            </div>
            <div className="flex justify-between items-end h-[100%]">
              <div className="flex flex-col justify-between gap-10 h-full py-1 px-2 text-white">
                <p className="tracking-wide text-xl">
                  Forever, Together, Selmon
                </p>
                <p className="text-lg">(02)</p>
              </div>
              <div className="text-5xl font-bold md:text-6xl leading-none heading text-white">
                G-STAR RAW
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className="flex justify-start flex-col w-fit bg-black">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider3}
              className="w-full md:w-[80%] h-full object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between gap-10 h-full py-1 px-2 text-white">
              <p className="tracking-wide text-xl">Forever, Together, Selmon</p>
              <p className="text-lg">(03)</p>
            </div>
            <div className=" uppercase text-5xl font-bold leading-none heading text-white">
              SAMARTH NAKATE
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-fit bg-black">
          <section className="flex justify-start flex-col-reverse">
            <div className="h-[100%] flex items-end self-end">
              <Image
                alt=""
                src={imageSlider4}
                className="w-full md:w-[80%] h-full object-contain"
              />
            </div>
            <div className="flex justify-between items-end h-[100%]">
              <div className="flex flex-col justify-between gap-10 h-full py-1 px-2 text-white">
                <p className="tracking-wide text-xl">
                  Forever, Together, Selmon
                </p>
                <p className="text-lg">(02)</p>
              </div>
              <div className="text-5xl font-bold md:text-6xl leading-none heading text-white">
                G-STAR RAW
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className="flex justify-start flex-col w-fit bg-black">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider5}
              className="w-full md:w-[80%] h-full object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between gap-10 h-full py-1 px-2 text-white">
              <p className="tracking-wide text-xl">Artists, Composer,Dancer</p>
              <p className="text-lg">(05)</p>
            </div>
            <div className=" uppercase text-5xl font-bold leading-none heading text-white">
              Sunny Leone
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-fit bg-black">
          <section className="flex justify-start flex-col-reverse">
            <div className="h-[100%] flex items-end self-end">
              <Image
                alt=""
                src={imageSlider6}
                className="w-full md:w-[80%] h-full object-contain"
              />
            </div>
            <div className="flex justify-between items-end h-[100%]">
              <div className="flex flex-col justify-between gap-10 h-full py-1 px-2 text-white">
                <p className="tracking-wide text-xl">
                  Forever, Together, Selmon
                </p>
                <p className="text-lg">(06)</p>
              </div>
              <div className="text-5xl font-bold md:text-6xl leading-none heading text-white">
                Bankaii Senbo
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSliderComponenet
