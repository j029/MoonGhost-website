import Head from "next/head";
import React from "react";
import BasicPage from "../components/components2D/basic/BasicPage";
import GenesisNFTs, { GuardianNFTs } from "../components/components2D/nfts/NFTs";
import Passes from "../components/components2D/nfts/Passes";
import AnimatedOnViewTitleLg from "../components/components2D/animated/AnimatedOnViewTitleLg";
import AnimatedOnViewP from "../components/components2D/animated/AnimatedOnViewP";


const NFTsPage = () => {
    return (
        <>
        <Head>
        <title>MoonGhost - NFTs</title>
        </Head>
        <BasicPage activePage='NFTs' heroText='MoonGhost NFTs'>
        <div className='w-full bg-cA text-cC text-center'>

            <div className='max-w-[1240px] mx-auto px-4 py-6 md:py-16 pb-0 md:pb-2 overflow-hidden'>
                <AnimatedOnViewTitleLg text='NFTs Like No Other' />
                <AnimatedOnViewP text='All our Ghost NFTs will come with their optimized, game-ready 3D models, ready to be used in your favorite metaverses.
                Our NFTs are your passes into the upcoming MoonGhost games, with each Ghost being a unique playable character.' />
                </div>
            </div>
            <Passes />
            <GuardianNFTs />
            <GenesisNFTs />
        </BasicPage>
        </>
    )
}

export default NFTsPage
