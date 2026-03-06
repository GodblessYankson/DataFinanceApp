import React from 'react'
import { card } from '../Constant'

const Card = () => {
  return (
    <div className='bg-white  py-10 text-[#1a1a1a] my-5'>
      <div className=' shadow-2xl sm:grid grid-cols-3 gap-3 max-w-[1040px] mx-auto'>
         {
          card.map((item) => (
            <div key={item.id} className='hover:border hover:border-gray-400 hover:bg-[#f0f2f4] hover:transition-all hover:scale-110 translate-3 duration-200 ease-in-out shadow-2xl  rounded-xl  py-3 my-3 mx-6 sm:mx-0 flex flex-col items-center justify-center'>
               <img src={item.icon} alt="img" className='w-[50px] h-[40px] my-3'/> 
              <p className='font-bold text-xl tracking-wide my-3'>{item.title}</p>
              <p className='font-extrabold text-2xl my-3'>{item.price}</p>
              <div className='space-y-2'>
                <p className=''>{item.storage}</p>
              <p>{item.user}</p>
              <p>{item.sendUp}</p>
              <button className='hover:bg-[#1a1a1a] hover:text-white bg-green-500  py-2 px-6 rounded-md  font-semibold '>Start Trial</button>
              </div>
            </div>
          ))
         }
      </div>
      </div>
  )
}

export default Card
