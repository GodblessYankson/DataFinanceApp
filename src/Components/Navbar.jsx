import React, { useState } from 'react'
import {  NavbarLinks } from '../Constant'
import Button from './Button'
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
  

   const [Toggle, setToggle] = useState(true)

   const handleToogle = () => {
    setToggle(!Toggle)
   }
  return (
    <nav className='px-2 py-4   relative'>
      <div className=' flex justify-between items-center'>
        <h1 className='text-3xl text-green-500 tracking-wider'>REACT.</h1>

        <ul className='items-center hidden md:flex '>
            {
               NavbarLinks.slice(0, 3).map((nav, index) => (
                <li key={nav.id} className={`tracking-wide ${index === 3 ? 'mr-0' : 'mr-10'} `}>
                  <a href={nav.link}>{nav.title}</a>
                </li>
               ))               
           }
           <Button />
        </ul>

       <div className='flex md:hidden ' >
          <div onClick={handleToogle}>
            {Toggle ? <FiMenu size={40} /> : <FiX size={40} />}
          </div>
        <div className={`${Toggle ? 'hidden' : 'flex flex-col'}  absolute py-3 px-3 z-10 top-15 left-0 border-r outline-none 
         w-full md:w-[50%]  transition-all ease-in-out duration-300`}>
           <ul className='space-y- hover:bg-[#1a1a1a]'>
          
          {
            NavbarLinks.slice(3, 8).map((nav, index) => (
              <li key={nav.id} className={`tracking-wide bg-green-500  ${index === NavbarLinks.length - 1 ? 'mr-0 bg-red-700' : 'py-4 px-2 border-b '} hover:text-white hover:bg-[#1a1a1a]`}>
                <a href={nav.link}>{nav.title}</a>
              </li>
            ))
          }
        </ul>
        </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar
