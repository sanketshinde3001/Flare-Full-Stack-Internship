"use client"

import React, { useState } from 'react'
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';

export default function Addusers(){
  
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const senddata=()=>{
    
    dispatch(addUser(name))
  }
  return (
    <div className='border-2 border-black w-1/2 h-1/2 flex flex-col items-start gap-4 px-5 justify-evenly bg-slate-300 py-8'>
      <h3 className='text-2xl font-bold'>Add User Data</h3>
      <input type='text' placeholder='Add New Users' className='px-4 py-2 rounded-md' onChange={(e)=>setName(e.target.value)}></input>
      <button className='border-2 border-black px-4 py-1' onClick={senddata}>Submit</button>
    </div>
  )
}


