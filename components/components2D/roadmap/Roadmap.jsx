import { motion } from 'framer-motion';
import React from 'react';
import AnimatedOnViewTitleLg from '../animated/AnimatedOnViewTitleLg';
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import AnimatedOnViewP from '../animated/AnimatedOnViewP';

const roadmapAnimate = {
    offscreen:{opacity:0, scale:0},
    onscreen:{
        opacity:1,
        scale:1,
        transition: {type:'spring',
        bounce:0.3,
        duration: 1.5
        }
    }
  }

const RoadmapItem = (props) => {
                
    return (
                <motion.div 
                className='w-full flex flex-wrap sm:justify-center sm:flex-row bg-cA text-left p-4 md:px-10 my-1'
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once:true, amount:1 }}
                variants={roadmapAnimate}
                >
                    <motion.div className='w-full sm:w-[200px] md:w-[280px] lg:w-[320px] flex-row text-cB'>
                        <AnimatedOnViewTitleMd text={props.phase} className='inline-block pb-0 text-cB'/>
                        <AnimatedOnViewTitleMd text={props.progress} className='text-cC font-extralight text-[1.25rem] sm:text-3xl md:text-5xl inline-block pl-4 sm:pl-0 pb-0'/>
                    </motion.div>
                    <motion.div className='sm:w-[300px] md:min-w-[360px] lg:min-w-[580px] sm:pl-5'>
                        <AnimatedOnViewTitleMd text={props.phaseBrief} className=' text-[1.25rem] sm:text-2xl md:text-3xl lg:text-4xl pt-1 sm:pt-7 md:pt-9 text-cC' />
                        <motion.p className="text-xl block text-cC">{props.list}</motion.p>
                        <motion.ul className='list-disc list-outside p-0 text-xl sm:text-2xl lg:text-3xl font-light sm:pt-4 pl-6 pr-4 sm:pr-0 text-cC'>
                            {props.liOne && <motion.li className='p-0'>{props.liOne}</motion.li>}
                            {props.liTwo && <motion.li className='p-0'>{props.liTwo}</motion.li>}
                            {props.liThr && <motion.li className='p-0'>{props.liThr}</motion.li>}
                            {props.liFou && <motion.li className='p-0'>{props.liFou}</motion.li>}
                            {props.liFiv && <motion.li className='p-0'>{props.liFiv}</motion.li>}
                            {props.liSix && <motion.li className='p-0'>{props.liSix}</motion.li>}
                            {props.liSev && <motion.li className='p-0'>{props.liSev}</motion.li>}
                        </motion.ul>
                    </motion.div>
                </motion.div>
    );
};

const Roadmap = () => {
  return (
    <div className='w-full bg-cA text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 overflow-hidden'>
        <div>
          <AnimatedOnViewTitleLg text='Roadmap' />
          <AnimatedOnViewP className='mt-2 mb-6 text-cC' text='Our roadmap is set to under-promise and over-deliver. 
          We are already highly capable of delivering everything promised in our roadmap. However we will be expanding our team as the project grows to speed up the delivery and bring an even better experience to our holders.' />
            <div className='max-w-[1240px] flex flex-col'>
                <RoadmapItem phase='Phase 1' progress='Completed' phaseBrief='Unveiling' 
                liOne='2D website launch' 
                liTwo='3D website launch and merge with 2D site' 
                liThr='Twitter launch' 
                liFou='Discord launch' 
                liFiv='Revealing of all three NFT collections' liSix='' liSev='' />
                <RoadmapItem phase='Phase 2' progress='Active' phaseBrief='Distribution' liOne='Core team doxxing' liTwo='Launch of the MoonPass NFT collection' liThr='Launch of the Guardian Ghost free mint collection' liFou='.ghost name service (your MoonGhost account registration)' liFiv='? Soul fragments mint ?' liSix='' liSev=''/>
                <RoadmapItem phase='Phase 3' phaseBrief='Rewards And Expansion' liOne="Some REWARDS" liTwo='Some more REWARDS' liThr='Even more REWARDS' liFou='Phase 5 reveal' liFiv='' liSix='' liSev=''/>
                <RoadmapItem phase='Phase 4' phaseBrief='MoonGhost - The Beginning' liOne="Release of the first MoonGhost game (expected late 2023)" liTwo='? Moon**** mint and airdrop ?' liThr='Phase 6 reveal' liFou='' liFiv='' liSix='' liSev=''/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;