import React from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();
  const [isSent,setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,//EmailJs Service Id
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,//EmailJs Template Id
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY //EmailJs Public Key
    )
    .then(
      () => {
        setIsSent(true);
        form.current.reset();//Reset form fields after sending
        toast.success("Message Sent SuccessFully! ✅",{
          position:"top-right",
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick: true,
          draggable: true,
          theme:'dark',
        });
      },
      (error)=> {
        toast.error("Error Sending Message.", error)
        toast.error("Failed to send Message. Please Try Again",{
          position:"top-right",
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick: true,
          draggable: true,
          theme:'dark',
        });
      }
    )
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-skills-gradient clip-path-custom-3"
    >
      <ToastContainer/>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Actively seeking full-time roles or internships in Software Engineering, Web Development, or Full Stack Development.
          Let’s connect if you’re hiring or open to collaboration — I’m excited to contribute and grow!
        </p>
      </div>
      {/* Contact Form */}
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border borde-gray-700'>
        <h3 className='text-xl font-smibold text-white text-center'>
          Connect With Me 
        </h3>

        <form ref={form} onSubmit={sendEmail}
          className='mt-4 flex flex-col space-y-4'>
          <input type='email' name='user-email' placeholder='Your Email' required
          className='w-full p-3 bg-[#131025] text-white border border-gray-600 focus:outline-none'
          />
          <input type='text' name='user-name' placeholder='Your Name' required
          className='w-full p-3 bg-[#131025] text-white border border-gray-600 focus:outline-none'
          />
          <input type='text' name='subject' placeholder='Subject' required
          className='w-full p-3 bg-[#131025] text-white border border-gray-600 focus:outline-none'
          />
          <textarea
          name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
          </textarea>
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
