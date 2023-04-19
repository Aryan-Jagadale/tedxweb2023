import React, { useEffect, useRef } from 'react'

const Form = ({ number,  name, submited, question, placeHolder, contactDetails }) => {
  const inputRef = useRef()

  useEffect(() => {
    if (submited) {
      inputRef.current.value = ''
    }
  }, [submited])

  return (
    <section className="w-full flex flex-col md:flex-row justify-center gap-4">
      <div className="w-full md:w-[70%]">
        <section className="border-t-2 border-[#6A6A6A] py-6 md:py-12">
          <div className="w-full flex">
            <section className="w-[10%] text-[#505050] font-thin  tracking-wide text-xl hidden md:block">
              {number}
            </section>
            <section className="w-[90%]  ">
              <h3 className="font-bold tracking-wide text-2xl">{question}</h3>
              {number === '03' ? (
              <textarea
                type="text"
                ref={inputRef}
                name={name}
                placeholder={placeHolder}
                className="outline-none text-lg tracking-wider text-[#6A6A6A] mt-7 mb-0 md:my-2 w-[90%] md:h-full overflow-hidden"
              />
              ) : (
              <input
                type="text"
                ref={inputRef}
                name={name}
                placeholder={placeHolder}
                className="outline-none text-lg tracking-wider text-[#6A6A6A] mt-7 mb-0 md:my-2 w-[90%] md:h-full"
              />
              )
            }
            </section>
          </div>
        </section>
      </div>

      <div className="w-full md:w-[30%] hidden md:block">
        {contactDetails}
      </div>

    </section>
  )
}

export default Form
