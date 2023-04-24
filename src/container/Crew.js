import React, { useState } from 'react'
import data from "../data/data"
import "../App.css"
import NavCrew from '../components/NavCrew'



export default function Crew() {
  const {crew} = data

  const [crews] = useState(crew)
  const [step,setStep]= useState(1)
  const {name,bio,role,images} = crews[step]
  return (
    <div className='bg-cover  w-full bg-center bg-no-repeat crew'>
    <div className='pt-32 min-h-screen'>
    <div><h1 className='text-white text-center lg:text-left lg:text-4xl text-3xl uppercase lg:pl-20 font-serif pb-6 lg:pb-0'><span className='text-5xl'>02 </span>Meet your crew</h1></div>
    <div className='flex lg:flex-row px-10 md:px-20  justify-between lg:px-24 lg:gap-14 flex-col-reverse  pb-10 lg:pb-0 '>
        <article className='lg:w-[45%]  flex flex-col text-white lg:mt-20'>
          <div className='flex flex-col'>
            <div>
              <h3 className='uppercase text-center pt-14 text-lg lg:text-left'>{role}</h3>
              <h2 className='text-center lg:text-left pt-5 lg:text-4xl uppercase py-4 font-semibold font-serif text-3xl '>{name}</h2>
              <p className='text-center text-sm lg:text-lg lg:text-left pb-4'>{bio}</p>
            </div>
            <nav>
            <NavCrew setStep={setStep} step={step} />
            </nav>
            </div>
          </article>
          <article className='flex justify-center lg:pb-6 w-full lg:w-[33%] items-center'>
            <img  className='w-full object-contain' alt='start' src={images.png} />
          </article>
    </div>
    </div>
    </div>
  )
}
