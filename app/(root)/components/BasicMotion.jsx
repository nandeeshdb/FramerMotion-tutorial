"use client"
import {motion} from 'framer-motion'
function BasicMotion() {
  return (
    <div className="flex w-full items-center justify-center h-screen gap-3">
        <motion.div 
        initial={{
            rotate:"0deg"
        }}
        animate={{
            rotate:"180deg"
        }}

        transition={{
            duration:1,
            ease:'anticipate'
        }}
        className="w-36 h-36 bg-black">
        </motion.div>
    </div>
  )
}

export default BasicMotion