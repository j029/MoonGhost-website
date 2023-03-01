import React from 'react';
import AnimatedOnViewTitleLg from '../animated/AnimatedOnViewTitleLg';
import teamInfo from './teamInfo';
import AnimatedTeamCard from '../animated/AnimatedTeamCard';
import AnimatedOnViewP from '../animated/AnimatedOnViewP';
import { motion } from 'framer-motion';

const TeamSection = () => {

    const teamElements = teamInfo.map(
        member => {
            return (
                <AnimatedTeamCard key={member.id} name={member.name} nickname={member.nickname} gIndex={member.gIndex} role={member.role} twitterLink={member.twitter} discordLink={'https://discord.gg/MTvEuCkeGX'} />
                
            )
        }
    )
    

    return (
        <div className='w-full bg-cA text-cC text-center'>
            <motion.div className='max-w-[1240px] mx-auto px-4 py-16 overflow-hidden'>
                <AnimatedOnViewTitleLg className=" mb-6" text='Meet The Team' />
                <AnimatedOnViewP className=' mb-8 text-cC' text='Our core team consists of four talented and ambitious individuals.
                 Everything seen from the project so far has been created from scratch by the core team. 
                 We will prove ourselves through the quality and standard of our project. Watch from the sidelines or join in and build an incredible community and project with us.' />
                {/* <AnimatedOnViewP className=' mb-6 text-cC' text='All four core team members will be doxxing soon.' /> */}
                <motion.div className='flex justify-center flex-row max-w-[1240px] flex-wrap overflow-hidden'>
                    {teamElements}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default TeamSection;