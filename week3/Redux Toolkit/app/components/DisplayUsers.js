"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUsers = () => {
  const userdata = useSelector((data)=>data.users)
  console.log(userdata)
  return (
    <div className='border-2 border-black w-1/2 h-1/2 flex flex-col items-start gap-4 px-5 justify-evenly bg-slate-300 py-8'>
      <h3 className='text-2xl font-bold'>Display User Data</h3>
      <div>
      {
        userdata.map((item)=>
          <div>{item.name}</div>
        )
      }
      </div>
      <div>HII</div>

    </div> 
  )
}

export default DisplayUsers
