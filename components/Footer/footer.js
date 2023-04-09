import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { HiMail } from 'react-icons/hi'
import { GrSend } from 'react-icons/gr'

export default function Footer() {
  return (
    <>
      <footer className="pt-12 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 lg:flex">
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <img
                src="/icons/logo-white.png"
                className="w-1/2 mx-auto lg:mx-0 p-0"
              />
              <p className="p-4 w-full lg:w-3/4 text-center lg:text-left">
                TEDxVITPune, solely believe in the power of ideas to change
                attitudes, lives, and ultimately, the world at large.
              </p>
            </div>
            <div className="hidden lg:flex flex-col w-9/12 my-12 px-4">
              <h4 className="text-lg w-full font-bold pt-4">Organizers</h4>
              <div className="flex items-center">
                <div className="flex justify-center items-center">
                  Niharika Rathi
                </div>
                <Link href="tel:+91xxxxxxxxxx" className="p-2">
                  +91 (xxx) xxx-xxxx
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center items-center">
                  Asawari Bapat
                </div>
                <Link href="tel:+91xxxxxxxxxx" className="p-2">
                  +91 (xxx) xxx-xxxx
                </Link>
              </div>
              <div className="flex items-center pt-2">
                <Link
                  href="mailto:tedx@vit.edu"
                  className="hover:text-[#dd1313] flex"
                >
                  <div className="flex justify-center items-center pr-2">
                    <HiMail className="w-6 h-6" />
                  </div>
                  tedx@vit.edu
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center flex-col justify-between">
            <h3 className="text-3xl font-bold mb-4 mt-8 lg:mt-0">
              Join our Newsletter
            </h3>
            <div className="flex flex-col lg:flex-row w-9/12">
              <input
                type="text"
                className="w-full lg:w-3/4 px-4 py-2 rounded-lg bg-[#161616] text-white mb-4 lg:mb-0 md:mr-4 outline-none"
                placeholder="Enter your email"
              />
              <button className="w-full lg:w-1/4 px-4 py-2 rounded-lg bg-[#dd1313] text-white">
                <GrSend className="text-white w-6 h-6 mx-auto" />
              </button>
            </div>
            <p className="py-4 w-3/4">
              Be the first one to hear from us! You can unsubscribe our update
              any time you want.
            </p>

            <div className="flex flex-row justify-evenly w-8/12 mt-8">
              <a
                href="https://instagram.com/tedxvitpune"
                className="w-16 h-16 bg-[#161616] flex justify-center items-center rounded-full"
              >
                <img
                  src="/icons/instagram.svg"
                  className="w-10 h-10 hover:scale-110 transition-all"
                  alt="instagram"
                />
              </a>
              <a
                href="https://twitter.com/tedxvitpune"
                className="w-16 h-16 bg-[#161616] flex justify-center items-center rounded-full"
              >
                <img
                  src="/icons/twitter.svg"
                  className="w-10 h-10 hover:scale-110 transition-all"
                  alt="twitter"
                />
              </a>
              <a
                href="https://facebook.com/tedxvitpune"
                className="w-16 h-16 bg-[#161616] flex justify-center items-center rounded-full"
              >
                <img
                  src="/icons/facebook.svg"
                  className="w-10 h-10 hover:scale-110 transition-all"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/tedxvitpune/mycompany/"
                className="w-16 h-16 bg-[#161616] flex justify-center items-center rounded-full"
              >
                <img
                  src="/icons/linkedin.svg"
                  className="w-10 h-10 hover:scale-110 transition-all"
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="flex justify-evenly my-12 w-3/4 mx-auto">
              <Link
                href="/contact"
                className="text-lg text-white hover:underline"
              >
                Contact
              </Link>
              <Link href="/faqs" className="text-lg text-white hover:underline">
                FAQs
              </Link>
              <Link
                href="/terms"
                className="text-lg text-white hover:underline"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-lg text-white hover:underline"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3 bg-black">
        <div className=" px-5 w-full mx-auto py-4 font-bold text-lg bg-black text-white">
          <Marquee speed={100} gradient={false} pauseOnHover={true}>
            <p className="mx-2 md:w-[25%]text-center">&nbsp;&copy;2023 TEDxVITPune</p>

            <p className="md:w-[75%] tracking-wide text-center">
            &nbsp;&nbsp;This independent TEDx event is operated under license from TED.
            </p>
          </Marquee>
        </div>
      </footer>
    </>
  )
}
