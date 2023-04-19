import { FiSend } from 'react-icons/fi'
import { useRef, useState } from 'react'

const SHEETS_APP_URL = 'https://script.google.com/macros/s/AKfycbzqdva_JLkCIm3iKWOF3PruOoI92fv7DJEKqbETKE9f0TEMmdaJjQulDOf9VTH9vq40nw/exec'

export default function Newsletter() {
  const emailRef = useRef()
  const formRef = useRef()
  let [ loading, setLoading ] = useState(false)
  let [ subscribe, setSubscribe ] = useState(false)
  let [ isInvalid, setIsInvalid ] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // get email from input field
    let form = formRef.current
    let data = new FormData(form)

    let email = data.get('Email')

    
    // check if email is valid
    if (!email) {
      emailRef.current.value = ''
      setIsInvalid(true)
      setTimeout(() => {
        setIsInvalid(false)
      }, 5000)
      setLoading(false)
      return
    }

    if (!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) ) {
      emailRef.current.value = ''
      setIsInvalid(true)
      setTimeout(() => {
        setIsInvalid(false)
      }, 5000)
      setLoading(false)
      return
    }

    // send email to google script
    fetch(SHEETS_APP_URL, {
      crossDomain: true,
      method: 'POST',
      body: data,
    }).then(() => {
      // show success message
      emailRef.current.value = ''
      console.log('success')
      setSubscribe(true)
      // sleep for 5 seconds
      setTimeout(() => {
        setSubscribe(false)
      }, 5000)
    })
    setLoading(false)
  }

  return (
    <>
      <h3 className="text-3xl font-bold mb-4 mt-8 lg:mt-0">
        Join our Newsletter
      </h3>
      <form className="flex flex-col lg:flex-row w-9/12" ref={formRef}>
        <input
          type="text"
          name='Email'
          ref={emailRef}
          className="w-full lg:w-3/4 px-4 py-2 rounded-lg bg-[#161616] text-white mb-4 lg:mb-0 md:mr-4 outline-none focus:border-1 focus:border-[#dd1313]"
          placeholder="Enter your email"
        />
        {
          !loading && (
            <button className="w-full lg:w-1/4 px-4 py-2 rounded-lg bg-[#dd1313]" onClick={(e) => { handleSubmit(e) }}>
              <FiSend className="text-white w-6 h-6 mx-auto" />
            </button>
          )
        }
        {loading && <button className="w-full lg:w-1/4 px-4 py-2 rounded-lg bg-[#dd1313]" disabled={true} >
          <FiSend className="text-white w-6 h-6 mx-auto" />
        </button>}
      </form>
      {subscribe && <p className="py-2 w-3/4 text-[#dd1313]">
        Thank you for subscribing to our newsletter!
      </p>}
      {isInvalid && <p className="py-2 w-3/4 text-[#dd1313]">
        Enter a valid email address!
      </p>}
      <p className="py-4 w-3/4">
        Be the first one to hear from us! You can unsubscribe our update
        any time you want.
      </p>
    </>
  )
}