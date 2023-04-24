import React from 'react'

export default function NavTech({step,setStep}) {
  return (
    <div>
    <ul className='flex flex-row lg:flex-col justify-center items-center'>
      {[1,2,3].map((item ,index)=>{
          return (
              <button onClick={()=> setStep(index)}  key={index}><li className={`w-12 m-2 h-12 rounded-full border-[1px]  flex justify-center items-center text-3xl ${step === index && " bg-white text-black"} `}>{index+1}</li></button>

          )
      })}
      </ul>
  </div>
  )
}
