import React, { useState } from 'react'
import  data from "../data/data"
import DestinationNavbar from '../components/DestinationNavbar'
import "../App.css"



export default function Destination() {
    const {destinations} = data
    const [planets] = useState(destinations)
    const [step,setStep] = useState(0)
    const {name,description,distance,travel,images} = planets[step]
    return (
        <div className='bg-cover bg-center bg-no-repeat destination '>
                <h1 className=' text-white pt-28 text-center lg:text-left lg:pl-24 lg:text-4xl text-3xl uppercase font-serif'><span className='text-5xl'>01 </span>Pick your destination</h1>
                <div className='flex flex-col lg:flex-row px-10 md:px-20 pt-9  justify-between lg:px-24 gap-20'>
                <article className='flex justify-center py-10 items-center lg:py-3 flex-col'>
                <img  className='w-full h-full md:w-[80%] lg:w-full object-contain ' src={images.png}  alt='start'/>
                </article>
                <article className='lg:w-[50%]  flex flex-col text-white h-full'>
                <DestinationNavbar setStep={setStep} step={step}/>
                <h2 className='text-center lg:text-left pt-7 lg:text-[50px] uppercase font-semibold font-serif text-[30px] '>{name}</h2>
                <p className='text-center text-xl lg:text-md py-4 lg:text-left '>{description}</p>
                <div className='border-b border-b-gray-400 py-3'></div>
                <div className='flex flex-row justify-between py-5 items-center'>
                    <div className='flex flex-col text-center lg:text-left'>
                    <div className='uppercase'>Avg. distance</div>
                    <div className='md:text-2xl text-[17px] font-semibold uppercase'>{distance}</div>
                    </div>
                    <div className='flex flex-col'>
                    <div className='uppercase'>Est. travel time</div>
                    <div className='md:text-[28px] text-[17px] font-semibold uppercase'>{travel}</div>
                    </div>
                </div>
                </article>
            </div>
        </div>
    )
}
