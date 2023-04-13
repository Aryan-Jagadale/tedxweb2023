import React from 'react'

const ContactHeader = () => {
  return (
    <div className="bg-black md:h-[60vh] flex items-center justify-center">
      <section className="p-9 md:p-[4.25rem]">
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide my-5 heading">
            Contact us
          </h1>
          <p className="text-[#767676] font-semibold tracking-wider text-lg md:text-xl w-full md:w-2/3 ">
            Get in touch with us to know more about TEDxVITPune! Fill your
            details and queries and a member of our team will get back to you.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ContactHeader
