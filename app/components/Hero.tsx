import React from 'react'
import Navbar from './Navbar'
import { PiSelectionBackgroundBold } from 'react-icons/pi'
const Hero = () => {
  return (
    <div id= "hero" className=' min-h-screen bg-no-repeat bg-[url(/456112537_2478889049168129_267067275152437632_n.png)] bg-cover'
     style={{backgroundSize:"20%",backgroundPosition:"35%"}}
    >
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
            <div> 
            <p data-aos="zoom-in-down" >I'am</p>
            <p data-aos="zoom-in-down">Syed</p>
            <p data-aos="zoom-in-down">Faiq</p>
            <p data-aos="zoom-in-down">Hussain</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
