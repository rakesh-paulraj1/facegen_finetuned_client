"use client"

import React from 'react';
import Image from 'next/image';

const Navbar :React.FC= () => {
  return (
   <div>
    <header className="flex h-16 w-full items-center justify-center bg-black px-4 md:px-6 shadow-sm border border-gray-200 dark:border-gray-800 ">
    
          <span className="text-2xl font-bold text-red-600">Image</span>
          <span className="text-2xl font-bold text-white">Generation </span>
          <span className="text-2xl font-bold text-red-600">AI</span>
      
        
       
        
      
    </header>
    </div>
  )
}



export default Navbar;