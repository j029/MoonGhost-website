import React, {useRef, useEffect, useState} from 'react';
import nftSamples from './NFTSamples'
import { motion } from 'framer-motion';
import AnimatedOnViewTitleLg from '../animated/AnimatedOnViewTitleLg';
import AnimatedOnViewP from '../animated/AnimatedOnViewP';
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import AnimatedInfoCards from '../animated/AnimatedInfoCards';

const NFTs = () => {

  const [nftCarouselWidth, setNftCarouselWidth] = useState(0);
  const nftCarousel = useRef();

  useEffect(() => {
    // console.log(nftCarousel.current);
    setNftCarouselWidth(nftCarousel.current.scrollWidth - nftCarousel.current.offsetWidth);
  }, []);

  return (
    <div className='w-full bg-cA text-cC text-center'>

      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <AnimatedOnViewTitleLg text='NFTs Like No Other' />
          <AnimatedOnViewP text='The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.' />

          <AnimatedOnViewTitleMd text='Genesis Ghosts' className='pt-16'/>
          <AnimatedOnViewP text='The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.' />

          <AnimatedInfoCards 
          info1='TBA' title1='Launch Date'
          info2='TBA' title2='Price'
          info3='TBA' title3='Supply'
          info4='TBA' title4='Blockchain'
          />

          <motion.div ref={nftCarousel} className=' overflow-hidden mt-4' >

            <motion.div  dragConstraints={{ right: 0, left: -nftCarouselWidth }} animate={{ x: [0, -nftCarouselWidth, 0]}} transition={{ ease:[1,1,1,1], duration: 30, repeat: Infinity }}  className=' flex max-w-none bg-cA'>
              {nftSamples[0].map(sample => {
                return (
                <motion.div key={sample} className=' h-[280px] sm:h-[400px] md:h-[500px] min-w-[280px] sm:min-w-[400px] md:min-w-[500px] bg-cA'>
                  <img src={sample} alt='' className=' h-full w-full p-4 rounded-[30px] bg-cA pointer-events-none'/>
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

const NFTsReverse = () => {

  const [nftCarouselWidth, setNftCarouselWidth] = useState(0);
  const nftCarousel = useRef();

  useEffect(() => {
    // console.log(nftCarousel.current);
    setNftCarouselWidth(nftCarousel.current.scrollWidth - nftCarousel.current.offsetWidth);
  }, []);

  return (
    <div className='w-full bg-cA text-cC text-center'>

      <div className='max-w-[1240px] mx-auto px-4 py-16 pt-8 '>
        <div>
          <AnimatedOnViewTitleMd text='Guardian Ghosts' className='text-4xl' />
          <AnimatedOnViewP text='The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.' />

          <AnimatedInfoCards 
          info1='TBA' title1='Launch Date'
          info2='Free' title2='Price' infoClassName2=' text-lime-400 '
          info3='TBA' title3='Supply'
          info4='TBA' title4='Blockchain'
          />

          {/* carousel  */}

          <motion.div ref={nftCarousel} className=' overflow-hidden mt-4' >

            <motion.div  animate={{ x: [-nftCarouselWidth, 0, -nftCarouselWidth]}} transition={{ ease:[1,1,1,1], duration: 30, repeat: Infinity }}  className=' flex max-w-none bg-cA'>
              {nftSamples[1].map(sample => {
                return (
                <motion.div key={sample} className=' h-[280px] sm:h-[400px] md:h-[500px] min-w-[280px] sm:min-w-[400px] md:min-w-[500px] bg-cA'>
                  <img src={sample} alt='' className=' h-full w-full p-4 rounded-[30px] bg-cA '/>
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
export default NFTs;
export {NFTsReverse}
