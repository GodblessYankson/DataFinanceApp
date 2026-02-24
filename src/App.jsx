import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import { Hero } from '../../../../Spectar-Travels/src/assets'
import HeroSection from './Components/HeroSection'
const App = () => {
  return (
    <div className='w-full bg-[rgb(26,26,26)] text-white overflow-hidden'>
      <div className='max-w-[1040px] mx-auto'>
        <Navbar />
        <HeroSection />
      </div>
      
    </div>
  )
}

export default App
