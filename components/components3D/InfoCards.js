import React from 'react'
import AnimatedButton from '../components2D/animated/AnimatedButton'
import { motion } from "framer-motion"

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

export default function InfoCards(props) {

  return (
    
    <motion.div className='z-20 absolute self-center items-end flex flex-col content-end h-[100%] w-[100%] ' onClick={props.handleInfoMainClick} variants={infoCardAnimations} initial='initial' animate='animate' exit='exit'>
      {props.info.name === 'Introduction' &&  
      <div className='opacity-90 z-30 self-center items-center content-center text-center flex flex-col h-auto w-auto max-w-[80vw] text-[3rem] bg-cA border-4 lg:border-8 rounded-2xl border-cC py-6 px-2 mt-auto mb-[10vh] md:mb-[14vh]' >
        <h1 className=' text-cB text-4xl sm:text-5xl md:text-7xl mb-3 font-semibold px-3 md:px-5 opacity-100'>{props.info.name}</h1>
        <div className='text-2xl sm:text-3xl md:text-4xl text-cC mb-3 px-2 lg:px-5'>{props.info.text}</div>
        <AnimatedButton text='Continue' className='my-2 sm:py-4 sm:px-8 sm:text-3xl'/>
      </div>}
      {props.info.name !== 'Introduction' &&
      <div className='opacity-90 z-30 self-center items-center content-center text-center flex flex-col h-auto w-auto max-w-[80vw] text-[3rem] bg-cA border-4 lg:border-8 rounded-2xl border-cC py-6 px-2 mt-auto mb-6' >
        <h1 className=' text-cB text-4xl sm:text-5xl md:text-7xl mb-3 font-semibold px-3 md:px-5 opacity-100'>{props.info.name}</h1>
        <div className='text-2xl sm:text-3xl md:text-4xl text-cC mb-3 px-2 lg:px-5'>{props.info.text}</div>
      </div>}
    </motion.div>

  )
}
