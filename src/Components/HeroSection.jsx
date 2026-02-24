import React from 'react'
import { ReactTyped } from "react-typed";


const HeroSection = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='space-y-5 flex flex-col justify-center items-center'>
        <p className='text-green-500 md:text-xl text-3xl tracking-wider'>GROWING WITH DATA ANALYTICS</p>
        <p className='text-6xl md:text-3xl font-bold tracking-wider'>Grow with data.</p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 text-4xl font-semibold w-full mx-auto border'>
       <div className='flex flex flex-col md:flex-row  '>
          <p>Fast, flexible, financing, for</p>

         <span>
         <ReactTyped 
            strings={["BTC", "BTB", "CTB", "CTC"]}
            typeSpeed={40}
            backSpeed={50}
            attr='placeholder'
            loop
            className='border border-red-800'
         >
            <input type="text" />
        </ReactTyped>   
   
        </span>
       </div>
        </div>
        <p className='text-gray-700 text-md tracking-wide '>Monitor your data analyitics to increase revenue for BTC, BTB, CTB, CTC,<br className='hidden md:block' /> <span>platform</span></p>
        <button className='bg-green-500 py-3 px-6 rounded-2xl tracking-wide font-semibold'>Get Started</button>
      </div>
      
    </div>
  )
}

export default HeroSection
