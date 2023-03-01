
import React from 'react'
import AnimatedButton from '../components2D/animated/AnimatedButton'
import { motion } from "framer-motion"
import { useRouter } from 'next/router';

const infoCardAnimations = {
    initial: { opacity:0, scale:0.5},
    animate: {
      opacity:1,
      scale:1,
      transition: {type:'spring',
      bounce:0.4,
      duration: 1
      }},
    exit: {opacity:0, scale:0.5,
      transition: {
      duration: 0.3
      }},
}

export default function Modal(props) {

  const router = useRouter();

  return (
    
    <motion.div className=' z-20 absolute self-center items-center flex flex-col content-end h-[100%] w-[100%] ' onClick={props.handleModalCancelClick} variants={infoCardAnimations} initial='initial' animate='animate' exit='exit'>
      <div className=' opacity-100 z-30 self-center items-center content-center text-center flex flex-col h-auto w-auto max-w-[80vw] text-[3rem] bg-cA border-4 lg:border-8 rounded-2xl border-cC py-6 px-2 mt-auto mb-[10vh] md:mb-[20vh]' >
        <h1 className=' text-cB text-4xl sm:text-5xl md:text-7xl mb-3 mx-4'>{props.title}</h1>
        <div className='text-2xl sm:text-3xl md:text-4xl text-cC mb-3 px-2'>{props.text}</div>
        <div>
        <AnimatedButton className='my-2 mx-4 sm:py-4 sm:px-8 sm:text-3xl' text='Confirm' onClick={() => router.push('/')}/>
        <AnimatedButton className='my-2 mx-4 sm:py-4 sm:px-8 sm:text-3xl' text='Cancel' onClick={props.handleModalCancelClick}/>
        </div>
      </div>
    </motion.div>

  )
}