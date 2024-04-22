"use client"
import React from 'react'
import Addusers from './components/Addusers'
import DisplayUsers from './components/DisplayUsers'

const page = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <Addusers/>
      <DisplayUsers/>
    </div>
  )
}

export default page
