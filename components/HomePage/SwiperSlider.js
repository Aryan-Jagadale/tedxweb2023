import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import 'swiper/css'
import Image from 'next/image'
import '../../styles/cursorReplace.module.scss'

import imageSlider1 from '../../public/swiperImg/imageSlider1new.webp'
import imageSlider2 from '../../public/swiperImg/imageSlider2.webp'
import imageSlider3 from '../../public/swiperImg/madhuri.webp'
import imageSlider4 from '../../public/swiperImg/bhaskhar.webp'
import imageSlider5 from '../../public/swiperImg/hrut.webp'

import pivotal from '../../public/swiperImg/pivotal.webp'

const SwiperSliderComponenet = () => {
  const [slides, setSlides] = useState(0)
  useEffect(() => {
    let w = window.innerWidth
    w < 768 ? setSlides(1) : setSlides(1.5)
  }, [])

  return (
    <div
      className="relative py-5 mt-16"
      style={{
        // backgroundImage: "url('../backg/7.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        //height: '100vh',
      }}
    >
      <div className=" py-5 md:py-[3.75rem] px-12 md:px-[8rem] flex items-center justify-between">
        <h2 className="heading text-white text-center text-3xl md:text-5xl">
          Our Speaker Lineup
        </h2>
        <div className="border border-white px-4 py-3 hidden md:block rounded-full">
          <p className="text-white text-base font-normal flex items-center justify-center gap-2 heading tracking-wider ">
            <AiOutlineArrowLeft /> Drag <AiOutlineArrowRight />
          </p>
        </div>
      </div>

      <div
        className="cursorReplace"
        // style={{
        //   backgroundImage: 'url(/backg/2.png)',
        //   //backdropFilter: blur(30),
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        // }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={slides}
          grabCursor={true}
          className="w-full relative"
          /*autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}*/
          //loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide className="flex justify-start flex-col w-fit h-[65vh] p-5 md:p-4 select-none">
            <div className="h-[100%] w-full flex items-end">
              <div className="w-[100%] h-full flex items-center justify-center flex-col lg:flex-row gap-5">
                <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                  <Image
                    src={imageSlider1}
                    className="w-full h-full object-contain rounded-[3rem]"
                    alt="Ameera Patankar"
                  />
                </div>

                <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-lg">
                  Ameera began Kathak training at a young age under Smt. Shama
                  Bhate at Nadroop, Pune. After completing her advanced diploma
                  in French, she decided to pursue dance. She won the 1st first
                  prize at Lalit Kala Kendra, Pune University, where she earned
                  her MA in Kathak and a National scholarship from the Ministry
                  of Culture. As a dynamic soloist, she has performed not only
                  in India but internationally in Austria, France, Israel, and
                  South Korea and was recently awarded the renowned RangaSetu
                  Fellowship from the Maharashtra Cultural Centre, Pune for her
                  outstanding performances.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
              <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white"></div>
              <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                Ameera Patankar
                <p className="tracking-wider text-base md:text-xl heading capitalize">
                  Dancer . Artiste . Polymath
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="w-fit bg-transparent h-[65vh] p-5 md:p-4 bg-clip-padding select-none"
            
          >
            <section className="flex justify-start flex-col md:flex-col-reverse">
              <div className="h-[100%] flex items-end self-end">
                <div className="w-[100%] h-full flex items-center justify-center flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                    <Image
                      src={imageSlider2}
                      className="w-full h-full object-contain rounded-[3rem]"
                      alt="Aneesha Nayak"
                    />
                  </div>

                  <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-lg">
                    Aneesha Nayak, an exceptional individual who has made
                    remarkable strides in both science and sports. She is an
                    expert surfer and has participated in various national and
                    international surfing competitions. Her journey has been
                    highlighted by documentaries by MTV. She has also
                    represented India internationally in science competitions,
                    winning a bronze medal at the prestigious I-SWEEEP in Texas,
                    and gold medals at I-Fest in Tunisia. She has also worked
                    with charitable projects in France and Sri Lanka, empowering
                    women.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
                <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                  {/*<p className="tracking-wide text-base md:text-xl">
                    Artists, Composer,Dancer
        </p>*/}
                  <p className="text-base md:text-lg"></p>
                </div>
                <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                  Aneesha Nayak
                  <p className="tracking-wider text-base md:text-xl heading capitalize">
                    Dauntless .Surfer .Athlete
                  </p>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide
            className="flex justify-start flex-col w-fit  h-[65vh] p-5 md:p-4 bg-clip-padding select-none"
            // style={{
            //   backgroundImage: 'url(/backg/2.png)',
            //   //backdropFilter: blur(30),
            //   backgroundSize: 'cover',
            //   backgroundRepeat: 'no-repeat',
            // }}
          >
            <div className="h-[100%] w-full flex items-end">
              <div className="w-[100%] h-full flex items-center justify-center flex-col lg:flex-row gap-5">
                <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                  <Image
                    src={imageSlider3}
                    className="w-full h-full object-contain rounded-[3rem]"
                    alt='Madhuri Badhuri'
                  />
                </div>

                <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-lg">
                  Madhuri started as a painter in the 1970s. Her work has been
                  featured in over 50 solo and 100 group exhibitions across the
                  globe. Oil paintings are her forte. She has also experimented
                  with creating unique sculptures and murals out of scrap metal.
                  Madhuri's extraordinary work has been recognised with
                  prominent accolades such as the Times of India Femina Pune Art
                  award for 2019-20, Women's Economic Forum (WEF) at the Hague's
                  Exceptional Woman of Excellence in Art award, Sarojini Naidu
                  National Award for Women and the Amrita Shergill RashtriyaKala
                  Puraskar.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
              <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                {/*<p className="tracking-wide text-base md:text-xl">
                  Artists, Composer,Dancer
      </p>*/}
                {/*<p className="text-base md:text-lg">(03)</p>*/}
              </div>
              <div className="uppercase text-3xl text-center md:text-4xl font-bold leading-none heading text-white">
                Madhuri Badhuri
                <p className="tracking-wider text-base md:text-xl heading capitalize">
                  Painter .Luminary .Aesthete
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/*Bhaskhar Shejwal */}
          <SwiperSlide className="w-fit bg-transparent h-[65vh] p-5 md:p-4 bg-clip-padding select-none">
            <section className="flex justify-start flex-col md:flex-col-reverse">
              <div className="h-[100%] flex items-end self-end">
                <div className="w-[100%] h-full flex items-center justify-center flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                    <Image
                      src={imageSlider4}
                      className="w-full h-full object-contain rounded-[3rem]"
                      alt='Bhaskar Shejwal'
                    />
                  </div>

                  <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-lg">
                    Prof Bhaskar is currently the Professor Emeritus in the
                    Department of Psychology at S.P. Pune University. His
                    extensive expertise and research in the disciplines of
                    personality and stress have led to the publication of more
                    than 50 research papers at national and international
                    conferences. Prof. Bhaskar, who specialises in Industrial
                    Psychology, has provided consulting services to numerous
                    corporate and state organisations, including established
                    corporations such as Mahindra & Mahindra Nasik and the
                    Reserve Bank of India.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
                <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                  <p className="text-base md:text-lg"></p>
                </div>
                <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                  Bhaskar Shejwal
                  <p className="tracking-wider text-base md:text-xl heading capitalize">
                    Adept .Mentor .Psychologist
                  </p>
                </div>
              </div>
            </section>
          </SwiperSlide>
          {/*Hrutvik*/}
          <SwiperSlide className="flex justify-start flex-col w-fit  h-[65vh] p-5 md:p-4 bg-clip-padding select-none">
            <div className="h-[100%] w-full flex items-end">
              <div className="w-[100%] h-full flex items-center justify-center flex-col lg:flex-row gap-5">
                <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                  <Image
                    src={imageSlider5}
                    className="w-full h-full object-contain rounded-[3rem]"
                    alt='Hruitvik Ambekar'
                  />
                </div>

                <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-lg">
                  Hruitvik is an International Badminton Player having formerly
                  Ranked in the Top 140 in the World Tour Rankings and has
                  represented India in World Tour Superseries Tour 500 level
                  tournaments all across the globe. He is the founder of two
                  organizations, both, serving at the PAN India level. Tribus
                  Organization which is an NGO works for the upliftment and the
                  betterment of the Adivasis across Maharashtra and The Tug Of
                  Words is a virtual debating forum. Hruitvik was Shortlisted in
                  the "20 Most Brilliant Indian's Across the World" for his
                  accomplishments in various walks of life.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
              <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white"></div>
              <div className="uppercase text-3xl text-center md:text-4xl font-bold leading-none heading text-white">
                Hruitvik Ambekar
                <p className="tracking-wider text-base md:text-xl heading capitalize">
                  Shuttler .Prodigy .Intellectual
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/*Coming soon */}
          <SwiperSlide
            className="w-fit bg-transparent h-[80vh] p-5 md:p-4 bg-clip-padding select-none"
            // style={{
            //   backgroundImage: 'url(/backg/2.png)',
            //   //backdropFilter: blur(30),
            //   backgroundSize: 'cover',
            //   backgroundRepeat: 'no-repeat',
            // }}
          >
            <section className="flex justify-start flex-col md:flex-col-reverse">
              <div className="h-[100%] flex items-center md:items-end self-center md:self-end">
                <div className="w-[100%] h-full flex items-center justify-center flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/3 h-[50vh] flex items-center justify-center">
                    <Image
                      src={pivotal}
                      className="w-full h-full object-contain rounded-[3rem]"
                    />
                  </div>

                  <p className="w-full md:w-2/3 text-center text-justify md:text-justify transition ease-in-out  heading text-white tracking-wide text-2xl md:text-5xl">
                    COMING SOON
                  </p>
                </div>
              </div>

              <div className="justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4 hidden md:invisible">
                <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                  {/*<p className="tracking-wide text-base md:text-xl">
                    Artists, Composer,Dancer
        </p>*/}
                  <p className="text-base md:text-lg"></p>
                </div>
                <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                  Aneesha Nayak
                  <p className="tracking-wider text-base md:text-xl heading capitalize">
                    Dauntless .Surfer .Athlete
                  </p>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>

        <div className="border border-white w-1/2 mx-auto px-4 py-3 block md:hidden rounded-full">
          <p className="text-white text-base font-normal flex items-center justify-center gap-2 heading tracking-wider ">
            <AiOutlineArrowLeft /> Swipe <AiOutlineArrowRight />
          </p>
        </div>
      </div>
    </div>
  )
}

export default SwiperSliderComponenet
