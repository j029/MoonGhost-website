import React from 'react'
import AnimatedPageDelayed from '../components/components2D/animated/AnimatedPageDelayed';
import FaqSection from '../components/components2D/faq/FaqSection';
import Footer from '../components/components2D/basic/BasicFooter';
import Hero from '../components/components2D/other/Hero';
import Navbar from '../components/components2D/basic/BasicNavbar';
import ScrollToTop from '../components/components2D/other/ScrollToTopButton';
import ScrollToTopOnLoad from '../components/components2D/other/ScrollToTopOnLoad';
import AnimatedSectionBrief from '../components/components2D/animated/AnimatedSectionBrief';
import ExpBriefOne from '../components/components2D/other/ExpBrief';
import AnimatedOnViewTitle from '../components/components2D/animated/AnimatedOnViewTitleLg';
import Head from 'next/head';

function Home() {

  return (
      <>

      <Head>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Official website of the MoonGhost NFT project." />
      <meta property="og:type" content="website" />
  
      <meta property="og:url" content="https://www.moonghostofficial.com/" />
  
      <meta property="og:title" content="MoonGhost" />
  
      <meta property="og:description" content="Official website of the MoonGhost NFT project." />
  
      <meta property="og:image" content="[https://www.moonghostofficial.com/LinkImg.png](https://www.moonghostofficial.com/LinkImg.png)" />
     
  
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      
      <title>MoonGhost</title>

      </ Head>

      <AnimatedPageDelayed>
        <ScrollToTopOnLoad />
        <div>
            <Navbar activePage='Home' />
            <Hero />
            <ExpBriefOne />
            <div className='w-full bg-cA text-cC text-center m-0 p-0'>
              <div className='max-w-[1240px] mx-auto px-4 py-16 overflow-hidden'>
                <AnimatedOnViewTitle text="What We've Got To Offer:"/>
              </div>
            </div>
            <AnimatedSectionBrief sectionImg={'/images/sectionImages/Story.webp'} route='/story' text='An Immersive Story' bText='More' />
            <AnimatedSectionBrief sectionImg={'/images/sectionImages/NFTs.webp'} route='/nfts' text='NFTs Like No Other' bText='More' />
            <AnimatedSectionBrief sectionImg={'/images/sectionImages/Roadmap.webp'} route='/roadmap' text='A Roadmap Set To Impress'  bText='More' />
            <AnimatedSectionBrief sectionImg={'/images/sectionImages/Team.webp'} route='/team' text='A Team You Can Depend On'  bText='More' />
            <FaqSection />
            <Footer />
            <ScrollToTop />
        </div>
      </AnimatedPageDelayed>
      </>
  );
}

export default Home;
