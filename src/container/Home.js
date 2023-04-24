import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"


export default function Home() {
  return (
    <>
     <main>
        <div className='bg-cover min-h-screen  w-full bg-center bg-no-repeat home'>
          <div className='flex flex-col lg:px-[15%] lg:flex-row lg:justify-between items-center gap-10 px-10 lg:gap-3'>
            <div className='text-center lg:text-start lg:w-[40%]'>
              <p className=' text-gray-400 font-serif uppercase text-2xl md:text-3xl lg:text-2xl py-10 mt-36'>So, you want to travel to</p>
              <h1 className='text-white uppercase font-serif text-5xl md:text-6xl lg:text-5xl'>Space</h1>
              <p className='text-gray-300 pt-3 sm:pt-8 lg:pt-3 text-md md:text-xl'>Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!</p>
            </div>
            <Link to='/destination'><div className='flex justify-center animate-pulse text-lg font-semibold items-center uppercase sm:w-36 sm:h-36 w-28 h-28 rounded-full lg:mt-48 mb-10 lg:mb-0 lg:mr-10 lg:w-44 lg:h-44 bg-white'>Explore</div></Link>
          </div>
        </div>
      </main>

    </>
  )
}
