import React from 'react'
import Navbar from './components/Navbar'
import {Outlet} from "react-router-dom"

export default function SharedLayout() {
  return (
    <div className='h-full'>
        <Navbar/>
        <Outlet/>
      
    </div>
  )
}
