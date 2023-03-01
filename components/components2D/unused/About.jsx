import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AnimatedOnViewCard from './animated/AnimatedOnViewCard';
import AnimatedOnViewTitle from './animated/AnimatedOnViewTitleLg';
import AnimatedOnViewP from './animated/AnimatedOnViewP';

const About = () => {
  return (
    <div className='w-full bg-cA text-cC text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <AnimatedOnViewTitle text='A Growing Protocol Ecosystem' />
          <AnimatedOnViewP className='mt-2 mb-6' text='The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.' />

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Card */}
            <AnimatedOnViewCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract.' />

            <AnimatedOnViewCard icon={<SiFsecure size={40} />} heading='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
            <AnimatedOnViewCard icon={<SiStrapi size={40} />} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
            <AnimatedOnViewCard icon={<VscServerProcess size={40} />} heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
