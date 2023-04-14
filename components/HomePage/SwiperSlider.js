import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { AiOutlineArrowRight, AiOutlineArrowLeft  } from 'react-icons/ai'
import 'swiper/css'
import Image from 'next/image'
import '../../styles/cursorReplace.module.scss'

import imageSlider1 from '../../public/swiperImg/imageSlider1.webp'
import imageSlider2 from '../../public/swiperImg/imageSlider2.webp'
import imageSlider3 from '../../public/swiperImg/imageSlider3.webp'
import imageSlider4 from '../../public/swiperImg/imageSlider4.webp'
import imageSlider5 from '../../public/swiperImg/imageSlider5.png'
import imageSlider6 from '../../public/swiperImg/imageSlider6.png'
import imageSlider7 from '../../public/swiperImg/imageSlider7.png'
import imageSlider8 from '../../public/swiperImg/imageSlider8.png'

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
          Our Past Speaker Lineup
        </h2>
        <div className="border border-white px-4 py-3 hidden md:block rounded-full">
          <p className="text-white text-base font-normal flex items-center justify-center gap-2 heading tracking-wider ">
          <AiOutlineArrowLeft />  Drag <AiOutlineArrowRight />
          </p>
        </div>
      </div>

      <div className="cursorReplace"
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide
            className="flex justify-start flex-col w-fit h-[65vh] p-5 md:p-4 "
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
                    src={imageSlider1}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-xl">
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
            <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
              <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                {/*<p className="tracking-wide text-base md:text-xl">
                  Artists, Composer,Dancer
          </p>*/}
              </div>
              <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                Swanandi Tikekar
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-fit bg-transparent h-[65vh] p-5 md:p-4 bg-clip-padding"
            // style={{
            //   backgroundImage: 'url(/backg/2.png)',
            //   //backdropFilter: blur(30),
            //   backgroundSize: 'cover',
            //   backgroundRepeat: 'no-repeat',
            // }}
          >
            <section className="flex justify-start flex-col md:flex-col-reverse">
              <div className="h-[100%] flex items-end self-end">
                <div className="w-[100%] h-full flex items-center justify-center flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                    <Image
                      src={imageSlider2}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-xl">
                    The Founder and Managing Director of Sante Spa and
                    Hospitality, La Magia and Yumma Swami. Sonal has curated an
                    impressive resume ranging from being a licensed Chartered
                    Accountant, an entrepreneur, a founder of a national chain
                    of restaurants and a food connoisseur among a whole plethora
                    of other things. As an avid fitness freak, her vision is
                    centered around a holistic diet, food which feeds the
                    stomach and the soul.
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
                  Sonal Barmecha
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide className="flex justify-start flex-col w-fit  h-[65vh] p-5 md:p-4 bg-clip-padding"
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
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-xl">
                  A renowned Foley Artist, having worked in Bollywood for more
                  than 35 yers and having more than 3000 films to his credit. He
                  owns Just Foley, a Mumbai based sound production studio with a
                  team comprising of he most talented foley artists, sound
                  engineers and editors. A man who has perfected his skill,
                  Karan is behind all types of sounds, from setting down coffee
                  mugs to a sword being drawn from its sheath.
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
                Karan Arjun Singh
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-fit bg-transparent h-[65vh] p-5 md:p-4"
          // style={{
          //   backgroundImage: 'url(/backg/2.png)',
          //   //backdropFilter: blur(30),
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          // }}
          >
            <section className="flex justify-start flex-col md:flex-col-reverse">
              <div className="h-[100%] flex items-end self-end">
                <div className="w-[100%] h-full flex items-center justify-center flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                    <Image
                      src={imageSlider4}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-xl">
                    Sandeep Godbole is a cybersecurity expert and the vice
                    president for Atos Syntel. He documents old temples for
                    truly understanding the history of Pune, and its people.
                    Sandeep has organized numerous Heritage Walks in Pune, in a
                    pursuit to familiarize and enlighten participants of the
                    history and various historical structures in the city.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
                <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                  {/*<p className="tracking-wide text-base md:text-xl">
                    Artists, Composer,Dancer
    </p>*/}
                  {/*<p className="text-base md:text-lg">(02)</p>*/}
                </div>
                <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                  Sandeep Godbole
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide className="flex justify-start flex-col w-fit h-[65vh] p-5 md:p-4 "
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
                    src={imageSlider5}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-xl">
                  As the founder of SciRio, she is on a mission to transform how
                  society perceives science. Her journey as a scientist turned
                  entrepreneur has been featured in digital media outlets like
                  The Assam Tribune and BioPatrika. She has a strong vision for
                  a future where science and society co-evolve to build an
                  equitable and accessible space for everyone to empower
                  themselves.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
              <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                {/*<p className="tracking-wide text-base md:text-xl">
                  Artists, Composer,Dancer
  </p>*/}
              </div>
              <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                Swanandi Tikekar
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-fit bg-transparent h-[65vh] p-5 md:p-4 "
          // style={{
          //   backgroundImage: 'url(/backg/2.png)',
          //   //backdropFilter: blur(30),
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          // }}
          >
            <section className="flex justify-start flex-col md:flex-col-reverse">
              <div className="h-[100%] flex items-end self-end">
                <div className="w-[100%] h-full flex items-center justify-center flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                    <Image
                      src={imageSlider6}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-xl">
                    Samar is a filmmaker, media academic and a media consultant.
                    He is a founder member of the theatre group, Theatre
                    Academy, Pune. Samar is also the creative director of the
                    Pune International Film Festival. Having directed various
                    one-act plays and full- length plays and having made several
                    documentaries for Doordarshan, Mr. Samar works ardently on
                    bringing media to the common people.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
                <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                  {/*<p className="tracking-wide text-base md:text-xl">
                    Artists, Composer,Dancer
</p>*/}
                  {/*<p className="text-base md:text-lg">(02)</p>*/}
                </div>
                <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                  Samar Nakhate
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide className="flex justify-start flex-col w-fit bg-transparent h-[65vh] p-5 md:p-4 "
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
                    src={imageSlider7}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-xl">
                  Labelling him as an artist and a photographer is an
                  understatement. A visionary who seeks newness in the process
                  of creating art and finds life in not knowing how his art will
                  be perceived. The former advertisement designer runs an art
                  collective called Bade Moochwale. He has also mastered the
                  fields of painting and visual arts, among other fine arts.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
              <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                {/*<p className="tracking-wide text-base md:text-xl">
                  Artists, Composer,Dancer
</p>*/}
              </div>
              <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                Abhinav Kafare
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-fit bg-transparent h-[65vh] p-5 md:p-4"
          // style={{
          //   backgroundImage: 'url(/backg/2.png)',
          //   //backdropFilter: blur(30),
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          // }}
          >
            <section className="flex justify-start flex-col md:flex-col-reverse">
              <div className="h-[100%] flex items-end self-end">
                <div className="w-[100%] h-full flex items-center justify-center flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/3 h-[40vh] md:h-full">
                    <Image
                      src={imageSlider8}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="w-full md:w-2/3 text-justify md:text-justify transition ease-in-out text-white tracking-wide text-base md:text-xl">
                    Being at a chaired position, as the Associate Director for
                    WRI India’s Energy Program, he leads work on Clean Energy
                    Initiatives. As an activist and a dedicated global citizen,
                    Deepak has published multiple research papers and has
                    provided valuable insights in various fields under the clean
                    energy movement. Our planet needs us now more than ever, and
                    visionaries like Deepak are the ones guiding us into the new
                    age of eco-living.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center md:items-end gap-5 md:gap-0 flex-col md:flex-row h-[100%] p-4">
                <div className="flex flex-row md:flex-col justify-between gap-4 md:gap-0 h-full py-1 px-2 text-white">
                  {/*<p className="tracking-wide text-base md:text-xl">
                    Artists, Composer,Dancer
</p>*/}
                  {/*<p className="text-base md:text-lg">(02)</p>*/}
                </div>
                <div className="uppercase text-3xl text-center md:text-5xl font-bold leading-none heading text-white">
                  Deepak Krishnan
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
        <div className="border border-white w-1/2 mx-auto px-4 py-3 block md:hidden rounded-full">
          <p className="text-white text-base font-normal flex items-center justify-center gap-2 heading tracking-wider ">
          <AiOutlineArrowLeft />  Drag <AiOutlineArrowRight />
          </p>
        </div>
      </div>
    </div>
  )
}

export default SwiperSliderComponenet
