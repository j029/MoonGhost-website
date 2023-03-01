import React, {useRef, useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import AnimatedOnViewP from '../animated/AnimatedOnViewP';
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import AnimatedInfoCards from '../animated/AnimatedInfoCards';
import nftSamples from './NFTSamples'


const GenesisNFTs = () => {

  const [nftCarouselWidth, setNftCarouselWidth] = useState(0);
  const nftCarousel = useRef();

  useEffect(() => {
    setNftCarouselWidth(nftCarousel.current.scrollWidth - nftCarousel.current.offsetWidth);
  }, []);

  return (
    <div className='w-full bg-cA text-cC text-center'>

      <div className='max-w-[1240px] mx-auto px-4 py-6 md:py-16 overflow-hidden'>
        <div>
          <AnimatedOnViewTitleMd text='Genesis Ghosts' className='pt-16'/>
          <AnimatedOnViewP text='Genesis Ghosts are leaders of the MoonGhosts. 
          They are each generated from a vast bank of attributes, with each Ghost belonging to one of five Ghost species. 
          Holding one or more Genesis Ghosts will grant top tier rewards and access. More info soon.' />

          <AnimatedInfoCards 
          info1='TBA' title1='Launch Date' infoClassName1=' text-blue-500 '
          info2='1.35 SOL' title2='Price'  infoClassName2=' text-lime-400 '
          info3='5555' title3='Supply' infoClassName3=' text-yellow-300 '
          info4='Solana' title4='Blockchain'
          />

          <motion.div ref={nftCarousel} className=' overflow-hidden mt-4' >

            <motion.div dragConstraints={{ right: 0, left: -nftCarouselWidth }} animate={{ x: [0, -nftCarouselWidth, 0]}} transition={{ ease:[1,1,1,1], duration: 150, repeat: Infinity }}  className=' flex max-w-none bg-cA'>
              {nftSamples[0].map(sample => {
                return (
                <motion.div key={sample.id} className=' h-[280px] sm:h-[400px] md:h-[500px] min-w-[280px] sm:min-w-[400px] md:min-w-[500px] bg-cA'>
                  <img src={sample.src} alt='' className=' h-full w-full p-4 rounded-[30px] bg-cA pointer-events-none'/>
                </motion.div>
                );
              })}

            </motion.div>

          </motion.div>

          
        </div>
      </div>
    </div>
  );
};

const GuardianNFTs = () => {

  const [nftCarouselWidth, setNftCarouselWidth] = useState(0);
  const nftCarousel = useRef();

  useEffect(() => {
    // console.log(nftCarousel.current);
    setNftCarouselWidth(nftCarousel.current.scrollWidth - nftCarousel.current.offsetWidth);
  }, []);

  return (
    <div className='w-full bg-cA text-cC text-center'>

      <div className='max-w-[1240px] mx-auto px-4 py-6 md:py-10 pt-8 overflow-hidden'>
        <div>
          <AnimatedOnViewTitleMd text='Guardian Ghosts' className='text-4xl' />
          <AnimatedOnViewP text='Guardian Ghosts are small but powerful. They protect the Genesis Ghosts, allowing them to roam areas they otherwise would not be able to. 
          They can be used as playable characters or pet-like guardians in the MoonGhost games.' />

          <AnimatedInfoCards 
          info1='TBA' title1='Launch Date' infoClassName1=' text-blue-500 '
          info2='0.15 SOL' title2='Price' infoClassName2=' text-lime-400 '
          info3='4444' title3='Supply' infoClassName3=' text-yellow-300 '
          info4='Solana' title4='Blockchain' 
          />

          {/* carousel  */}

          <motion.div ref={nftCarousel} className=' overflow-hidden mt-4' >

            <motion.div  animate={{ x: [-nftCarouselWidth, 0, -nftCarouselWidth]}} transition={{ ease:[1,1,1,1], duration: 150, repeat: Infinity }}  className=' flex max-w-none bg-cA'>
              {nftSamples[1].map(sample => {
                return (
                <motion.div key={sample.id} className=' h-[280px] sm:h-[400px] md:h-[500px] min-w-[280px] sm:min-w-[400px] md:min-w-[500px] bg-cA'>
                  <img  src={sample.src} alt='' className=' h-full w-full p-4 rounded-[30px] bg-cA '/>
                </motion.div>
                );
              })}

            </motion.div>

          </motion.div>


          
        </div>
      </div>
    </div>
  );
};
export default GenesisNFTs;
export {GuardianNFTs}
