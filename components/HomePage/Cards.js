export default function Cards() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto py-12 lg:py-16 lg:flex lg:items-center lg:justify-between">
        <div className="w-full md:w-1/2 px-4 md:px-8 py-8 md:py-12 my-4 bg-[#161616] rounded-[40px] shadow-md">
          <h2 className="text-3xl heading text-center font-extrabold tracking-tight text-white sm:text-5xl">
            About Us
          </h2>
          <p className="mt-8 text-[28px] text-white text-justify">
            In the spirit of Ideas Worth Spreading, we, at TEDxVITPune, solely
            believe in the power of ideas to change attitudes, lives, and
            ultimately, the world at large. We're bringing together people from
            all different walks of life to come, confer and confabulate ideas in
            whole different dimensions.
          </p>
          <div className="mt-24 flex justify-end">
            <div className="bg-[#dd1313] h-16 w-16 rounded-full flex justify-center items-center">
              <img className="w-12 h-12" src="/rc.svg" alt="chevron-right" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:mx-8 my-4">
          <div className="w-full px-8 md:px-12 py-12 md:py-16 my-8 bg-[#161616] rounded-[40px] shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl heading font-extrabold tracking-tight text-white sm:text-5xl">
                Lookbook
              </h2>
              <div className="bg-[#dd1313] h-16 w-16 rounded-full flex justify-center items-center">
                <img className="w-12 h-12" src="/rc.svg" alt="chevron-right" />
              </div>
            </div>
          </div>
          <div className="w-full px-8 md:px-12 py-12 md:py-16 my-8 bg-[#161616] rounded-[40px] shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl heading font-extrabold tracking-tight text-white sm:text-5xl">
                Endeavours
              </h2>
              <div className="bg-[#dd1313] h-16 w-16 rounded-full flex justify-center items-center">
                <img className="w-12 h-12" src="/rc.svg" alt="chevron-right" />
              </div>
            </div>
          </div>
          <div className="w-full px-8 md:px-12 py-12 md:py-16 my-8 bg-[#161616] rounded-[40px] shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl heading font-extrabold tracking-tight text-white sm:text-5xl">
                NewsLetter
              </h2>
              <div className="bg-[#dd1313] h-16 w-16 rounded-full flex justify-center items-center">
                <img className="w-12 h-12" src="/rc.svg" alt="chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
