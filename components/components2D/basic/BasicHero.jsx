import React from 'react';

const Hero = (props) => {

  return (
    <>
    <div className='w-full h-[90vh] md:h-[90vh] lg:h-[94vh] relative mb-10 '>
      
        {props.activePage === 'Story' && <img
        className='object-cover h-full w-full absolute z-0 pointer-events-none '
        src={'/images/sectionImages/Story.webp'} 
        alt=''
        />}
        
        {props.activePage === 'NFTs' && <img
        className='object-cover h-full w-full absolute z-0 pointer-events-none '
        src={'/images/sectionImages/NFTs.webp'} 
        alt=''
        />}

        {props.activePage === 'Roadmap' && <img
        className='object-cover h-full w-full absolute z-0 pointer-events-none '
        src={'/images/sectionImages/Roadmap.webp'} 
        alt=''
        />}

        {props.activePage === 'Team' && <img
        className='object-cover h-full w-full absolute z-0 pointer-events-none '
        src={'/images/sectionImages/Team.webp'} 
        alt=''
        />}


      <div className='w-full h-[90%] flex flex-col justify-center items-center text-cC px-4 text-center z-20'>

        <div className='z-20 bg-black rounded-2xl px-5 py-3 opacity-80'>
        <h1 className=' z-20 font-semibold text-3xl sm:text-4xl md:text-6xl'> 
          {props.heroText}
        </h1>
        </div>
      </div>
      {/* <svg className=' absolute bottom-[0] pointer-events-none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333232" fillOpacity="1" d="M0,224L30,234.7C60,245,120,267,180,277.3C240,288,300,288,360,272C420,256,480,224,540,218.7C600,213,660,235,720,218.7C780,203,840,149,900,154.7C960,160,1020,224,1080,208C1140,192,1200,96,1260,69.3C1320,43,1380,85,1410,106.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      <svg className=' absolute bottom-[0] pointer-events-none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#101010" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,149.3C960,139,1056,181,1152,218.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
       */}
    </div>
    {/* <div className='relative pointer-events-none w-full min-h-[100px] h-[100px] bg-cA z-30'></div> */}
    </>
  );
};

export default Hero;
