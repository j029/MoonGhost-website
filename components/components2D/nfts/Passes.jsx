import React, {useState} from 'react';
import AnimatedOnViewP from '../animated/AnimatedOnViewP';
import passImages from './passImages'
import { motion, LayoutGroup } from 'framer-motion';
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import AnimatedInfoCards from '../animated/AnimatedInfoCards';

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

const GhostImages = (props) => {

  const [imageIsExpanded, setImageIsExpanded] = useState(false);
  
  const handleImageMouseEnter = () => {
    setImageIsExpanded(true);
  }
  const handleImageMouseOut = () => {
    setImageIsExpanded(false);
  }
  

    return (
      <motion.div className={`h-[280px] sm:h-[400px] md:h-[500px] transition-all duration-700  ${imageIsExpanded ?' w-[65%]' : 'w-[33%]'}`}
      onMouseEnter={handleImageMouseEnter} onMouseOut={handleImageMouseOut} >
        <motion.img src={props.src} alt='' className=' h-full md:w-[600px] p-1 rounded-[20px] md:rounded-[30px] bg-cA pointer-events-none object-cover' 
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once:true, amount:0.2 }}
            variants={imagesAnimate}/>
      </motion.div>
    );
  }





export default function Passes() {

    const ghostImages = passImages.map(image => {
    
      return (
        <GhostImages src={image} key={image} />
      );
    });

    return (
        <div className='w-full bg-cA text-cC text-center'>
          <div className='max-w-[1240px] mx-auto px-4 py-16 overflow-hidden'>
            <div>
              <AnimatedOnViewTitleMd text='MoonPasses' />
              <AnimatedOnViewP className='mt-2 mb-6' text='MoonPasses are your entry to the MoonGhost ecosystem. They each grant different access levels and rewards.
               But worry not; we do not gatekeep our community chats. Mint prices for MoonPasses vary, reflecting their rewards, with the majority being FREE. ' />
              <AnimatedInfoCards 
              info1='October 14th, 2022' title1='Launch Date' infoClassName1=' text-blue-500 '
              info2='FREE' title2='Price' infoClassName2=' text-lime-400 '
              info3='3333' title3='Supply' infoClassName3=' text-yellow-300 '
              info4='Solana' title4='Blockchain'
              />    
              <LayoutGroup>
                <motion.div className=' flex flex-row max-w-[1240px]' >
                  {ghostImages}
                </motion.div>
              </LayoutGroup>
              
            </div>
          </div>
        </div>
      );
    };