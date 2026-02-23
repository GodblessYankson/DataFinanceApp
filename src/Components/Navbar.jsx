import React from 'react'
import {  NavbarLinks } from '../Constant'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='py-2'>
      <div className=' flex justify-between items-center'>
        <h1 className='text-3xl text-green-500'>REACT.</h1>
        <ul className={`flex items-center `}>
            {
               NavbarLinks.slice(0, 3).map((nav, index) => (
                <li key={nav.id} className={`tracking-wide ${index === NavbarLinks.length - 1 || index === 3 ? 'mr-0 bg-amber-500' : 'mr-10'} `}>
                  <a href={nav.link}>{nav.title}</a>
                </li>
               )) 
               
           }
           <Button />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
