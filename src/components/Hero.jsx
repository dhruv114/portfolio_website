import React from 'react';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className = 'text-[#00df9a] font-bold p-2'>COMPUTER SCIENCE STUDENT AT UCSB</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Hire me please. Or else.</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl font-burtons text-xl font-bold py-3 p-2'>
                    Hard work ethic, fast learned
                </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 p-2'>
                Great person and a little freaky
            </p>
            <button className='bg-gradient-to-r from-cyan-500 to-teal-500 w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black'>
                <a href="#00df9a">
                    Resume
                </a>
            </button>
        </div>
    </div>
  )
}

export default Hero
