import React from 'react'
import Form from './Form'
import PhoneNumberDet from './PhoneNumberDet'
import QueryDet from './QueryDet'
import AddressDet from './AddressDet'
import { useRef, useState } from 'react'

const SHEETS_APP_URL = 'https://script.google.com/macros/s/AKfycbzMG6ZALZXKPU3kl1mAkq0N4ZtDDFoLn7bcEtvW2TaYDYm7zeDONKqVN-OmBxUkoCgV/exec'

const ContactForm = () => {
  const formRef = useRef()

  const [ submited, setSubmited ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // get email from input field
    let form = formRef.current
    let data = new FormData(form)

    // send email to google script
    fetch(SHEETS_APP_URL, {
      crossDomain: true,
      method: 'POST',
      body: data,
    }).then(() => {
      // show success message
      // nameRef.current.value = ''
      // emailRef.current.value = ''
      // messageRef.current.value = ''
      console.log('success')
      setSubmited(true)
      // sleep for 5 seconds
      setTimeout(() => {
        setSubmited(false)
      }, 5000)
      setLoading(false)
    })
  }

  return (
    <div className="bg-white px-7 md:px-[5.25rem] py-12 md:py-[7.5rem]">
      <form ref={formRef}>
      <Form
        name={'Name'}
        submited={submited}
        number={'01'}
        question={'What’s your name?'}
        placeHolder={'John Doe'}
        contactDetails={<QueryDet />}
      />
      <Form
        name={'Email'}
        submited={submited}
        number={'02'}
        question={'What’s your email?'}
        placeHolder={'johndoe@gmail.com'}
        contactDetails={<PhoneNumberDet />}
      />
      <Form
        name={'Message'}
        submited={submited}
        number={'03'}
        question={'What’s your message?'}
        placeHolder={
          'What would you like to know...'
        }
        contactDetails={<AddressDet />}
      />
      <div className="md:ml-[5rem]">
      {submited && <p className="mb-8 text-green-800">
        Thank you for your message. We will get back to you as soon as possible.
      </p>}
        {
          !loading && (
          <button className="bg-black text-white tracking-wider uppercase px-10 py-2 text-lg font-semibold" onClick={(e) => { handleSubmit(e) }}>
          Submit
        </button>)
        }
        {
          loading && (
          <button className="bg-black text-white tracking-wider uppercase px-10 py-2 text-lg font-semibold" disabled>
          Submitting...
        </button>
          )
        }
      </div>
      
      </form>

      <div className="my-[3rem] block md:hidden">
        <div className='flex gap-2 flex-col'>
        <QueryDet />
        <PhoneNumberDet />
        
        <AddressDet />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
