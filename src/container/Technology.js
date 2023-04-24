import React, { useState } from 'react'
import "../App.css"
import data from "../data/data"
import NavTech from '../components/NavTech'







export default function Technology() {
  const [step,setStep]= useState(0)
  const {technology} = data
  const item = technology
  const{name,images,description} = item[step]
  return (
    <div className='flex flex-col lg:flex-row md:px-2  justify-between lg:px-24 gap-20 pt-40 technology min-h-screen'>
            <article className='lg:w-[45%]  flex flex-col text-white px-10 md:px-20 lg:px-0'>
              <div> <h1 className=' text-white text-center  lg:text-left  lg:text-4xl text-3xl uppercase font-serif'>Space launch <span className='text-5xl'>101</span></h1></div>
              <div className='flex flex-col lg:flex-row justify-start items-center pt-11 gap-x-4'>
                <nav>
                  <NavTech step={step} setStep={setStep}/>
                </nav>
                <div>
                  <h3 className='uppercase text-center pt-10 lg:text-left'>the terminology...</h3>
                  <h2 className='text-center lg:text-left pt-2 lg:text-4xl uppercase font-semibold font-serif text-3xl '>{name}</h2>
                  <p className='text-center text-md py-4 lg:text-left md:text-lg'>{description}</p>
                </div>
              </div>
            </article>
            <article className='flex justify-center pb-2 lg:py-3  w-full lg:w-[41%] px-2 md:px-6 lg:px-0 items-center'>
              <img  className='w-full hidden lg:block object-contain' alt='start' src={images.portrait} />
              <img className='w-full lg:hidden object-contain' alt='start' src={images.landscape} />
            </article>
    </div>
  )
}
