import React, {useState} from 'react';
import { useRouter } from 'next/router';
import AnimatedLi from '../animated/AnimatedLi';
import { motion, LayoutGroup, useCycle } from 'framer-motion';
import { FaDiscord} from "react-icons/fa";
import AnimatedLogoMd from '../animated/AnimatedLogo';
import AnimatedMenuToggle from '../animated/AnimatedMenuToggle';
import {goToTop} from '../other/ScrollToTopOnLoad'

const discordLink = 'https://discord.gg/MTvEuCkeGX';
const storyLink = '/story';
const nftsLink = '/nfts';
const roadmapLink = '/roadmap';
const teamLink = '/team';



// const goToPosition = (position) => {
//   document.documentElement.scrollTo({
//     top: position,
//     behavior: "smooth"
//   });
// };



const BasicNavbar = (props) => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }
    // const mobileNavItemClick = (position) => {
    //   handleNav()
    //   document.documentElement.scrollTo({
    //     top: position,
    //     behavior: "smooth"
    //   });
    // };

    const router = useRouter();
    const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className='w-full h-[90px] bg-cA z-30'>
      <div className='max-w-[1240px] mx-auto px-2 sm:px-4 flex justify-between items-center h-full'>
        <div className='flex items-center'>
          <AnimatedLogoMd onClick={() => router.push('/')} />
          <h1 className='text-cB text-3xl sm:text-4xl lg:text-5xl cursor-pointer font-semibold' onClick={() => {router.push('/'); goToTop();}}>MoonGhost</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-md lg:text-2xl text-cC items-center'>
            <AnimatedLi className={`${props.activePage === 'Home' ? 'hover:text-gray-600 cursor-pointer border-b-2' : 'hover:text-gray-600 cursor-pointer'} `} text='Home' onClick={() => {router.push('/'); goToTop();}} />
            <AnimatedLi className={`${props.activePage === 'Story' ? 'hover:text-gray-600 cursor-pointer border-b-2' : 'hover:text-gray-600 cursor-pointer'} `} text='Story' onClick={() => {router.push(storyLink); goToTop();}}/>
            <AnimatedLi className={`${props.activePage === 'NFTs' ? 'hover:text-gray-600 cursor-pointer border-b-2' : 'hover:text-gray-600 cursor-pointer'} `} text='NFTs' onClick={() => {router.push(nftsLink); goToTop();}}/>
            <AnimatedLi className={`${props.activePage === 'Roadmap' ? 'hover:text-gray-600 cursor-pointer border-b-2' : 'hover:text-gray-600 cursor-pointer'} `} text='Roadmap' onClick={() => {router.push(roadmapLink); goToTop();}}/>
            <AnimatedLi className={`${props.activePage === 'Team' ? 'hover:text-gray-600 cursor-pointer border-b-2' : 'hover:text-gray-600 cursor-pointer'} `} text='Team' onClick={() => {router.push(teamLink); goToTop();}}/>
            <FaDiscord size={50} className='text-cB mx-3 cursor-pointer hover:text-[#f4f4f4] duration-300' onClick={() => window.open(discordLink, "_blank")}/>
          </ul>
        </div>

        {/* Hamburger menu */}
        <motion.div onClick={handleNav} className='block md:hidden' animate={isOpen ? "open" : "closed"}>
            <AnimatedMenuToggle toggle={() => { handleNav(); toggleOpen();}} />
        </motion.div>

        {/* Mobile Menu */}
        <LayoutGroup>
        <motion.div className='w-full bg-cA text-cC absolute top-[90px] left-0 flex justify-center text-center z-30' layout >
        {nav && 
            <motion.ul>
              <AnimatedLi className={`${props.activePage === 'Home' ? 'hover:text-gray-600 cursor-pointer text-2xl border-b-2' : 'hover:text-gray-600 text-2xl cursor-pointer'} `} text='Home' onClick={() => {router.push('/'); goToTop();}} />
              <AnimatedLi className={`${props.activePage === 'Story' ? 'hover:text-gray-600 cursor-pointer text-2xl border-b-2' : 'hover:text-gray-600 text-2xl cursor-pointer'} `} text='Story' onClick={() => {router.push(storyLink); goToTop();}}/>
              <AnimatedLi className={`${props.activePage === 'NFTs' ? 'hover:text-gray-600 cursor-pointer text-2xl border-b-2' : 'hover:text-gray-600 text-2xl cursor-pointer'} `} text='NFTs' onClick={() => {router.push(nftsLink); goToTop();}}/>
              <AnimatedLi className={`${props.activePage === 'Roadmap' ? 'hover:text-gray-600 cursor-pointer text-2xl border-b-2' : 'hover:text-gray-600 text-2xl cursor-pointer'} `} text='Roadmap' onClick={() => {router.push(roadmapLink); goToTop();}}/>
              <AnimatedLi className={`${props.activePage === 'Team' ? 'hover:text-gray-600 cursor-pointer text-2xl border-b-2' : 'hover:text-gray-600 text-2xl cursor-pointer'} `} text='Team' onClick={() => {router.push(teamLink); goToTop();}}/>
              <FaDiscord size={50} className='text-cB cursor-pointer mx-2 mt-4 mb-6 inline-block hover:text-[#f4f4f4] duration-300' onClick={() => window.open(discordLink, "_blank")}/>
            </motion.ul>}
        </motion.div> 
        </LayoutGroup>
      </div>
    </div>
  );
};

export default BasicNavbar;
