"use client";

import React, { useState } from "react";

const page = () => {
  const [Name, setName] = useState("");
  const [Desc, setDesc] = useState("");
  const [output, setOutput] = useState([]);

  const deletetask = (i)=>{
    let copytask = [...output];
    copytask.splice(i,1);
    setOutput(copytask);

  }

  const relo = (e)=>{
    e.preventDefault();
    if (Name.length>0) {
      setOutput([...output,{Name,Desc}]);
      console.log(output)
      setName("");
      setDesc("");
    }

  }
let rendertask = "No Task Available";
if (output.length>0) {
  rendertask = output.map((t,i)=>{
    if (t.Name.length>0) {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-between mb-5 w-2/3">
              <h5 className="text-2xl font-semibold">{t.Name}</h5>
              <h6 className="text-xl font-semibold">{t.Desc}</h6>
              <button onClick={()=>{
                deletetask(i);
              }} className="bg-red-400 px-4 py-2 text-white"> Delete</button>
          </div> 
        </li>  
      )
    }

  })
}
  return (
    <>
      <h1 className="bg-black text-white p-5 text-4xl font-bold text-center">
        Sanket's Todo List
      </h1>

      <form onSubmit={relo}>
        <input
          type="text"
          className="text-2xl border-zinc-800 m-5 border-2 px-4 py-2 "
          placeholder="Write Name here"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 m-5 border-2 px-4 py-2 "
          placeholder="Write Description here"
          value={Desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
        />

        <button className="bg-black text-white px-5 py-3 rounded">Enter</button>
      </form>


    <hr/>
    <div className="bg-zinc-400 p-8">
        <ul>{rendertask}</ul>
    </div>
    </>
  );
};

export default page;
