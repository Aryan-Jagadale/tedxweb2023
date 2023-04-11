import Link from 'next/link'

export default function Cards() {
  return (
    <div className="mt-12">
      <div className="max-w-6xl mx-auto py-12 lg:py-16 lg:flex lg:items-center lg:justify-between px-6">
        <div className="w-full lg:w-1/2 px-8 lg:px-12 py-8 lg:py-12 lg:mr-4 bg-[#161616]/70 backdrop-blur-xl rounded-cc shadow-md">
          <h2 className="text-2xl heading text-center font-extrabold tracking-tight text-white md:text-4xl">
            About Us
          </h2>
          <p className="mt-12 text-xl md:text-2xl text-white text-justify">
            In the spirit of Ideas Worth Spreading, we, at TEDxVITPune, solely
            believe in the power of ideas to change attitudes, lives, and
            ultimately, the world at large. We're bringing together people from
            all different walks of life to come, confer and confabulate ideas in
            whole different dimensions.
          </p>
          <div className="mt-8 lg:mt-12 flex justify-end">
            <Link href="/about">
              <div className="bg-[#dd1313] h-12 w-12 rounded-full flex justify-center items-center cursor-pointer">
                <img className="w-6 h-6" src="/rc.svg" alt="chevron-right" />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-4">
          <div className="w-full px-8 lg:px-12 py-12 my-8 bg-[#161616]/70 backdrop-blur-xl  rounded-[40px] shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl heading font-extrabold tracking-tight text-white md:text-4xl">
                Lookbook
              </h2>
              <Link href="/lookbook">
              <div className="bg-[#dd1313] h-12 w-12 rounded-full flex justify-center items-center cursor-pointer">
                <img className="w-6 h-6" src="/rc.svg" alt="chevron-right" />
              </div>
              </Link>
            </div>
          </div>
          <div className="w-full px-8 lg:px-12 py-12 my-8 bg-[#161616]/70 backdrop-blur-xl  rounded-[40px] shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl heading font-extrabold tracking-tight text-white md:text-4xl">
                Endeavours
              </h2>
              <div className="bg-[#dd1313] h-12 w-12 rounded-full flex justify-center items-center cursor-pointer">
                <img className="w-6 h-6" src="/rc.svg" alt="chevron-right" />
              </div>
            </div>
          </div>
          <div className="w-full px-8 lg:px-12 py-12 my-8 bg-[#161616]/70 backdrop-blur-xl  rounded-[40px] shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl heading font-extrabold tracking-tight text-white md:text-4xl">
                NewsLetter
              </h2>
              <div className="bg-[#dd1313] h-12 w-12 rounded-full flex justify-center items-center cursor-pointer">
                <img className="w-6 h-6" src="/rc.svg" alt="chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
