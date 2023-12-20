"use client"
import React from 'react'
import {motion,motionConfig} from 'framer-motion'
function Gesture() {
  return (
    <div  className='flex flex-col w-full h-screen items-center justify-center'>
      <motionConfig

      transition={{
        duration:0.5,
        ease:"easeInOut"
      }}
      >
        <motion.button
        whileHover={{
            scale:1.05
        }}

        whileTap={{
          scale:0.90,
          rotate:"3deg"
        }}
        className='p-3 bg-blue-400'>
            Click me
        </motion.button>

        <motion.button
        whileHover={{
            scale:1.05
        }}

        whileTap={{
          scale:0.90,
          rotate:"-3deg"
        }}
        className='p-3 bg-red-400'>
            Click me
        </motion.button>
      </motionConfig>
    </div>
  )
}

export default Gesture