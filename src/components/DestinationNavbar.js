import React from 'react'

export default function DestinationNavbar({setStep,step}) {
  return (
    <nav className='flex justify-center lg:justify-start '>
      <ul className='flex justify-center item-center mt-14 uppercase sm:text-2xl font-semibold text-xl '>
          {["Moon","Marse","Europa","Titan"].map((item,index)=>{
              return(
                  <li className='sm:pr-5 pr-2 text-md  sm:text-2xl' key={index}>
                    <button onClick={()=> setStep(index)} className={`${index === step && "border-b-[2px] border-b-white pb-2"}`}>{item}</button></li>
              )
          })}
      </ul>
      </nav>
  )
}
