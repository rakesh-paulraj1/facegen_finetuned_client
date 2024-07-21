import React from 'react'
import { motion } from "framer-motion";
import { HeroHighlight, } from '@/components/hero-highlight'
import Link from 'next/link';
const Hero = () => {
  return (
    <HeroHighlight>
      <div className="text-3xl md:text-6xl font-bold dark:text-white text-center">
      Visualize the person with your description
            </div>
      <div className='flex items-center justify-center pt-4'>
     <Link href='/dashboard'>
      <button
       
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 justify-center"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Test the Application
        </span>
      </button>
      </Link>
      </div>
    </HeroHighlight>
  )
}

export default Hero
