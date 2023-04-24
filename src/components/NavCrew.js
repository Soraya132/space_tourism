import React from 'react'

export default function NavCrew({step,setStep}) {
  return (
    <div>
    <ul className='flex justify-center lg:justify-start'>
     {[1,2,3,4].map((item,index) =>{
         return(
           <buton onClick={()=> setStep(index)} key={item.name} className={`border-[1px] border-gray-300 w-5 h-5 rounded-full m-1 ${step === index && "bg-white"}`} ><li></li></buton>
         )
     })}
     </ul>
 </div>
  )
}
