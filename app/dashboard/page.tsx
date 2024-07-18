"use client"
import React from 'react'
import { useState } from 'react';
import axios from "axios";
const Page = () => {
  const [prompt, setPrompt] = useState();
 
  const [image, setImage] = useState();

  const generate=async (prompt: undefined)=>{
    const result = await axios.get(`http://127.0.0.1:8000/generate?prompt=${prompt}`);


  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
    <div className="max-w-md w-full space-y-4 px-4">
      <div className="flex items-center space-x-2">
        <input type="text" placeholder="Enter a prompt to generate an image" className="flex-1" onChange={(e) => setPrompt(e.target.value as SetStateAction<string | undefined>)} />        <button onClick={()=>generate(prompt)} className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
  Generate
</button>
      </div>
      <div className="w-full aspect-square bg-muted rounded-md overflow-hidden">
        <img
          src={`data:image/png;base64,${image}`}
          alt="Generated image"
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Page