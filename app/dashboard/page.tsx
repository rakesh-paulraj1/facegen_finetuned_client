"use client"
import React, { SetStateAction } from 'react'
import { useState } from 'react';
import axios from "axios";
import Navbar from '@/components/Navbar';
import { PlaceholdersAndVanishInput } from '@/components/vanishinput';
const Page = () => {
  const [prompt, setPrompt] = useState();
  const [inputs,setInputs] = useState([]);
  const placeholders = [
    "Describe your Suspect",
    "White male 30-35 age approximately with blue eyes"
  ];
  console.log(prompt);
  const [image, setImage] = useState();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    (e:any)=>setPrompt(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prompt && prompt.trim() !== '') {
      setInputs((prevInputs) => [...prevInputs, prompt]);
      generate(prompt);
    }
  };
  const generate=async (prompt: string)=>{
    const result = await axios.get(`http://127.0.0.1:8000/generate?prompt=${prompt}`);
    setImage(result.data);
    
  }

  return (
    <div  className="w-full bg-dot-white/[0.2] relative items-center bg-black/[0.98] justify-center overflow-auto">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full p-8 pt-9 ">
      <div className="flex flex-col items-center justify-center gap-6 p-4 md:p-8  border border-muted rounded-lg ">
        <div className="w-full max-w-md space-y-4 text-white">
          <div className="grid gap-2">
            <span  className="text-white">
              Enter a prompt
            </span>
            
            <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => setPrompt(e.target.value as unknown as SetStateAction<undefined>)}        onSubmit={onSubmit}
      />
          </div>
          <div className="grid gap-2 overflow-auto max-h-[50vh]">
            <div className="text-white font-medium">Previous Inputs:</div>
            <div className="grid gap-2  text-sm ">
             {inputs.map((input,index)=>(
            <div key={index} className="text-white">{input}</div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 md:p-8 border border-muted rounded-lg">
        <img
          src="/placeholder.svg"
          alt="Generated Image"
          width={600}
          height={600}
          className="max-w-full max-h-[80vh] rounded-lg"
        />
      </div>
    </div>
  </div>
  );
};
export default Page