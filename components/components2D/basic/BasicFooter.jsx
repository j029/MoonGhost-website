import React from 'react';
import { useRouter } from 'next/router';
import { FaTwitterSquare, FaDiscord} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const twitterLink = 'https://twitter.com/MoonGhostNFT'
const discordLink = 'https://discord.gg/MTvEuCkeGX'
const treeLink = 'https://linktr.ee/MoonGhostOfficial'
// const telegramLink = 'https://discord.gg/MTvEuCkeGX'


const BasicFooter = () => {

  const router = useRouter()

  return (
    <div className='bg-cA text-cC text-center py-16 flex justify-center align-middle flex-col '>
            <img src={'/images/Logo20.1Med.png'} alt="" className='h-[50px] w-[50px] mx-auto mb-4 cursor-pointer' onClick={() => router.push("/")}/>
            {/* <h2>MoonGhost Labs Ltd.</h2> */}
            <p className=' font-light '>Copyright © 2022 - All right reserved</p>
            <div className='flex justify-center align-middle flex-row'>
            <FaTwitterSquare size={50} className='text-[#b6b6b6] mx-6 mt-4 cursor-pointer hover:text-[#f4f4f4] transition-all duration-300' onClick={() => window.open(twitterLink, "_blank")}/>
            <FaDiscord size={50} className='text-[#b6b6b6] mx-6 mt-4 cursor-pointer hover:text-[#f4f4f4] duration-300' onClick={() => window.open(discordLink, "_blank")}/>
            <SiLinktree size={50} className='text-[#b6b6b6] mx-6 mt-4 cursor-pointer hover:text-[#f4f4f4] duration-300' onClick={() => window.open(treeLink, "_blank")} />
            </div>
        
    </div>
  )
}

export default BasicFooter