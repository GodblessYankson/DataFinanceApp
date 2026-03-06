import React from 'react'

const DataDown = () => {
  return (
    <div className='max-w-[1040px] mx-auto py-16 px-2'>
     <div className='grid grid-cols-1 sm:grid-cols-2'>
         <div className='flex flex-col space-y-1'>
        <p className='text-2xl font-bold'>Want tips & tricks to optimize your flow?</p>
        <p className='text-md font-medium'>Sign up to remenber your data daily</p>
      </div>
      <div className='space-y-2'>
        <form action="">
            <div className='grid grid-cols-3 gap-2'>


                <div className='bg-white px-4 py-2 rounded-lg col-span-2'>
                <input type="text" placeholder='Enter your name' className='text-gray-700 border-none focus:outline-none '/>
              
                </div> 
                <button className='bg-green-500 px-4 py-2 rounded-lg text-[#1a1a1a] col-span-1'>Notify me</button>
            </div>
        </form>
        <p>We care about the protection of your data</p>
      </div>
     </div>
    </div>
  )
}

export default DataDown
