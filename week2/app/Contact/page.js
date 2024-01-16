'use client'

import React, { useState } from "react";

const page = () => {
  const [First, setFirst] = useState("");
  const [Last, setLast] = useState("");
  const [isChecked, setIsChecked] = useState([]);

  const checkhandle = (e)=>{
    // console.log(e.target.value);
    // console.log(e.target.checked);
    if(e.target.checked == true)
      setIsChecked(old=>[...old,e.target.value])
    else
      setIsChecked(isChecked.filter(value => value !==e.target.value))
  }

  return (
    <>
      <div className="container mx-auto bg-gray-400 mt-5 p-2 rounded-md mb-2">
        <h1 className="m-auto text-3xl text-center font-bold">SAMPLE FORM</h1>
      </div>

      <div className="container mb-2 p-5 rounded-md mx-auto bg-gray-200 flex items-center justify-evenly">
        <div className="flex items-center justify-evenly w-1/2">
          <h4>First Name - </h4>
          <input
            type="text"
            value={First}
            onChange={(e) => {
              setFirst(e.target.value);
            }}
            className="h-10 w-1/2 rounded-md outline-none border-none px-2"
          />
        </div>
        <div className="flex items-center justify-evenly w-1/2">
          <h4>Last Name - </h4>
          <input
            type="text"
            value={Last}
            onChange={(e)=>{
              setLast(e.target.value)
            }}
            className="h-10 w-1/2 rounded-md outline-none border-none px-2"
          />
        </div>
      </div>

      <div className="container p-5 mb-2 rounded-md mx-auto bg-gray-200 flex items-center ">
        <div className="w-1/2  flex items-center justify-start">
          <div className="flex items-center justify-center w-1/3">
            <h4>Gender - </h4>
          </div>
          <div className="flex items-center w-1/3 justify-evenly">
            <h4>Male </h4>
            <input type="checkbox" onChange={checkhandle} value={"Male"}  className="h-5 w-5" />
          </div>
          <div className="flex items-center w-1/3 justify-evenly">
            <h4>Female </h4>
            <input type="checkbox" onChange={checkhandle} value={"Female"} className="h-5 w-5" />
          </div>
        </div>
      </div>




      <div className="container p-5 mb-2 rounded-md mx-auto bg-gray-200 flex items-center ">
        <div className="w-1/2 flex items-center justify-evenly">
            {
              <div>First Name - {First}</div>
            }
            {
              <div>Last Name - {Last}</div>
            }
        </div>
      </div>
      <div className="container p-5 mb-2 rounded-md mx-auto bg-gray-200 flex items-center ">
        <div className="w-1/2 flex items-center justify-evenly">
          <h3>Selected - </h3>
            {
              isChecked.map((e,i)=>
              <div key={i}>
                {e}
                
              </div>
              )
            }
        </div>
      </div>
    </>
  );
};

export default page;
