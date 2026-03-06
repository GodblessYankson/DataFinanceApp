import React from 'react'
import laptop from '../assets/laptop.jpg'

const Data = () => {
  return (
    <div className='  bg-white text-[#1a1a1a] px-2 py-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[1040px] mx-auto'>
        <div>
      <img src={laptop} alt="img" />
     </div>
      <div className='flex flex-col justify-center '>
        <p className='text-green-500 font-light text-xl '>DATA ANALYTICS DASHBOARD</p>

        <p className='my-1 font-bold text-2xl'>Manage Data Analytics Centrally</p>

        <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita quis ut repudiandae, fugiat magnam nobis laborum dolorum distinctio autem labore dicta voluptate molestias.</p>

        <button className='w-full sm:max-w-[200px] bg-black text-green-500 rounded-xl px-6 py-2'>Get Started</button>

      </div>
      </div>
      
    </div>
  )
}

export default Data
