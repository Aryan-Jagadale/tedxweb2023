import React from 'react'

const ContactHeader = () => {
  return (
    <div className='bg-black md:h-[70vh] flex items-center justify-center'>
      <section className='p-9 md:p-[4.25rem]'>
        <div className='text-white'>
          <h1 className='text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-wide my-5 heading'>Contact us</h1>
          <p className='text-[#767676] font-semibold tracking-wider text-lg md:text-2xl w-full md:w-2/3 '>
            Get in touch with the right people at Squarespace. Email a member of
            our customer care team, marketing team, technical team or HR team.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ContactHeader
