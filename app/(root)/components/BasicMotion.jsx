"use client"
import {motion,AnimatePresence} from 'framer-motion'
import { useState } from 'react'
function BasicMotion() {
    const [isVisible,setIsVisible] = useState(false)
  return (
    <div className="flex flex-col w-full items-center justify-center h-screen gap-3">
        <button className='p-3 bg-blue-400 ' onClick={()=>setIsVisible(!isVisible)} layout>Show/Hide</button>
        <AnimatePresence mode='popLayout'>
        {isVisible && (
        <motion.div 
        initial={{
            rotate:"0deg",
            scale:0,
            y:0
        }}
        animate={{
            rotate:"180deg",
            scale:1,
            y:[0,150,-150,-150,150,0]
        }}
        exit={{
            rotate:"0deg",
            scale:0,
            y:0
            
        }}

        transition={{
            duration:1,
            ease:'anticipate',
            
        }}

      
        className="w-36 h-36 bg-black">
        </motion.div>
        )}
        </AnimatePresence>
    </div>
  )
}

export default BasicMotion