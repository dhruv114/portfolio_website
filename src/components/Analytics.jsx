import React from 'react'

const Analytics = () => {
  return (
    <div className = 'w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-[#00df9a] text-4xl font-bold'>Relevant Coursework:</h1>
                <p className = 'text-black text-2xl '>coursework</p>
                <button className='bg-black w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics