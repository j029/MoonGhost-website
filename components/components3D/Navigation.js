import React from 'react'
import AnimatedButton from '../components2D/animated/AnimatedButton';

export default function Navigation(props) {


  return (
    <div className=' z-10 self-center items-center content-center flex absolute h-auto w-[100%] m-auto mt-[10px] mb-0 justify-center leading-none'>
    <AnimatedButton className=' py-[0.5vw] px-[2vw] mx-[0.3vw] text-[5vw] sm:py-2 sm:px-4 sm:mx-1 sm:my-4 sm:text-2xl md:py-3 md:px-7 md:mx-2 md:my-4 md:text-3xl lg:text-4xl' text='Home' onClick={props.handleHomeClick} />
    <AnimatedButton className=' py-[0.5vw] px-[2vw] mx-[0.3vw] text-[5vw] sm:py-2 sm:px-4 sm:mx-1 sm:my-4 sm:text-2xl md:py-3 md:px-7 md:mx-2 md:my-4 md:text-3xl lg:text-4xl' text='NFTs' onClick={props.handleViewNftSectionClick} />
    <AnimatedButton className=' py-[0.5vw] px-[2vw] mx-[0.3vw] text-[5vw] sm:py-2 sm:px-4 sm:mx-1 sm:my-4 sm:text-2xl md:py-3 md:px-7 md:mx-2 md:my-4 md:text-3xl lg:text-4xl' text='Roadmap' onClick={props.handleViewRoadmapSectionClick} />
    <AnimatedButton className=' py-[0.5vw] px-[2vw] mx-[0.3vw] text-[5vw] sm:py-2 sm:px-4 sm:mx-1 sm:my-4 sm:text-2xl md:py-3 md:px-7 md:mx-2 md:my-4 md:text-3xl lg:text-4xl' text='Team' onClick={props.handleViewTeamSectionClick} />
    <AnimatedButton className=' py-[0.5vw] px-[2vw] mx-[0.3vw] text-[5vw] sm:py-2 sm:px-4 sm:mx-1 sm:my-4 sm:text-2xl md:py-3 md:px-7 md:mx-2 md:my-4 md:text-3xl lg:text-4xl' text='Story' onClick={props.handleViewStorySectionClick} />
    
    </div>
  )
}
