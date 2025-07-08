import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'

const About = () => {
  const profileImage = import.meta.env.VITE_PROFILE_IMAGE1;

  return (
    <section
      id='about'
      className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        {/* Greeting */}
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
          Hi, I am 
        </h1>
        {/* Name */}
        <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
          Geetanjali Sahu
        </h2>
        {/* Skills heading with typing effect */}
        <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
          <span className='text-white'>
            I am a 
          </span>
          <Typewriter  
            words={[
              'Aspiring Software Developer',
              'Full Stack Developer',
              'MCA Graduate',
              'Passionate Coder',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h3>
        {/* About me Paragraph */}
        <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
          MCA graduate passionate about building efficient, user-friendly, and scalable applications.
          I have a solid foundation in full stack development along with Core Java, C, Linux, and SQL.
          These skills help me understand software development and system behavior effectively.
          I'm seeking an entry-level role to grow as a software developer, enhance my skills, and contribute to impactful projects.
        </p>
        {/* Resume Button */}
        <a
        href="https://drive.google.com/file/d/1JsZZ4TOQDznV1Hm-FeamaBxEtHAxHebY/view?usp=sharing"
        target = "_blank"
        rel='noopener noreferrer'
        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
        style={{
          background:'linear-gradient(90deg, #8245ec, #a855f7)',
          boxShadow:'0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
        }}
        >
          DOWNLOAD CV
        </a>
        </div>
        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt
          className='w-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          >
          <img src={import.meta.env.VITE_PROFILE_IMAGE1} alt="Geetanjali Sahu"
          className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,.5)]'
          />
        </Tilt>
        </div>
      </div>
    </section>
  )
}


export default About
