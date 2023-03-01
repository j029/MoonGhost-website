import React, {useState} from 'react';
import AnimatedOnViewTitle from '../animated/AnimatedOnViewTitleLg';
import AnimatedOnViewP from '../animated/AnimatedOnViewP';
import moonImages, {genesisImages} from './StoryImages'
import { motion, LayoutGroup } from 'framer-motion';
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';

const imagesAnimate = {
  offscreen:{opacity:0, scale:0},
  onscreen:{
      opacity:1,
      scale:1,
      transition: {type:'spring',
      bounce:0.5,
      duration: 1.5
      }
  }
}

const HoverImages = (props) => {

  const [imageIsExpanded, setImageIsExpanded] = useState(false);

  const handleImageMouseEnter = () => {
    setImageIsExpanded(true);
  }
  const handleImageMouseOut = () => {
    setImageIsExpanded(false);

  }
  
  

    return (
      <motion.div className={` text-center h-[280px] sm:h-[400px] md:h-[500px] transition-all duration-700  ${imageIsExpanded ?' w-[100%] md:w-[50%]' : ' w-[20%]'}`}
      onMouseEnter={handleImageMouseEnter} onMouseOut={handleImageMouseOut}  >
        {/* <motion.h2 className={`transition-all duration-700 ${imageIsExpanded ? ' block' : ' hidden'}`} >{props.title}</motion.h2 > */}
        <motion.img src={props.src} alt='' className=' h-full w-[600px] p-1 rounded-[20px] md:rounded-[30px] bg-cA object-cover pointer-events-none' 
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once:true, amount:0.2 }}
            variants={imagesAnimate}/>
      </motion.div>
    );
  }





export default function Story() {

    const moonImageDiv = moonImages.map(image => {
    
      return (
        <HoverImages src={image[0]} key={image[1]}/>
      );
    });

    const genesisImageDiv = genesisImages.map(image => {
    
      return (
        <HoverImages src={image[0]} key={image[0]} />
      );
    });

    return (
        <div className='w-full bg-cA text-cC text-center m-0 p-0'>
          <div className='max-w-[1240px] mx-auto px-4 py-16 overflow-hidden'>
            <div>
              <AnimatedOnViewTitle text='The Beginning' />
              <AnimatedOnViewTitleMd text='Moons' className=' pt-4 pb-0' />
              <AnimatedOnViewP className='mt-2 mb-6' text='The MoonGhosts originate from planet G.H.O.S.T. but that planet is no longer habitable... it was destroyed during the Great Disjunction.
               Now, the MoonGhosts have segregated to five of the surrounding Moons. Each Moon is home to a different species of MoonGhost.' />
              <LayoutGroup>
                <motion.div className=' flex flex-row max-w-[1240px]' >
                  {moonImageDiv}
                </motion.div>
              </LayoutGroup>
                <AnimatedOnViewTitleMd text='Ghosts' className=' pt-12' />
                <AnimatedOnViewP className='mt-2 mb-6' text='The Ghosts were separated into five species when the Great Disjunction occurred. 
                All species are now at war with each other for resources, land, or just for personal matters...' />
              <LayoutGroup>
                <motion.div className=' flex flex-row max-w-[1240px]' >
                  {genesisImageDiv}
                </motion.div>
              </LayoutGroup>
              
             
            
    
              
              
            </div>
          </div>
        </div>
      );
    };

