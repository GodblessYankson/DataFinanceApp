import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Data from './Components/Data'
import DataDown from './Components/DataDown'
import Card from './Components/Card'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='w-full bg-[rgb(26,26,26)] text-white overflow-hidden'>
      <div className=''>
        <Navbar />
        <HeroSection />
        <Data />
        <DataDown />
        <Card />
        <Footer />
        
      </div>
      
    </div>
  )
}

export default App
