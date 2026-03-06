import React from 'react'
import { ReactTyped } from "react-typed";


const HeroSection = () => {
  return (
    <div className='text-white  mx-auto'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>

        <h1 className='text-xl sm:text-2xl font-semibold tracking-wider text-green-500 md:py-6'>GROWING WITH DATA ANALYTICS</h1>

        <p className='md:text-5xl sm:text-3xl text-2xl font-bold md:py-6'>Grow with data.</p>
        
        <div className='flex items-center justify-center'>

          <p className='md:text-xl sm:text-xl text-xl font-bold col-span-2 pl-2'>Fast, flexible, financing, for
          
           <ReactTyped 
            strings={["BTC", "BTB", "CTB", "CTC"]}
            typeSpeed={40}
            backSpeed={50}
            attr='placeholder'
            loop
            className='text-xl font-bold pl-2 col-span-1'
         >
            <input type="text" />
        </ReactTyped>   
        </p>
        </div>
        <p className='text-gray-600 font-semibold tracking-wider'>Monitor your data analytics to increase revenue for BTC, BTB, CTB, CTC,<br className='hidden md:block' /> <span>platform</span></p>
      </div>
      
    </div>
  )
}

export default HeroSection
