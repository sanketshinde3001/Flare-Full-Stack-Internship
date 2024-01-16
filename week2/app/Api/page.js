"use client"

import axios from 'axios';
import React, { useState } from 'react'

const page = () => {
    const [Img, setImg] = useState([]);
    const getimg = async ()=>{
      try {
        const response = await axios.get("https://picsum.photos/v2/list");
        const data = await response.data;
        setImg(data);
        console.log(Img);
      } catch (error) {
        console.error("can't Fetch errors");
      }
    }
  return (
    <div>
      <button onClick={getimg} className='m-5 px-5 py-3 bg-green-600 text-white font-bold'>
        Get DATA
      </button>
      <div className='p-10'>
      {Img.map((e,i)=>{
        return <img key={i} src={e.download_url} height={300} width={300} className='m-10 rounded inline-block'/> 
        })}
      </div>
    </div>
  )
}

export default page
