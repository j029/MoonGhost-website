import {Canvas} from '@react-three/fiber'
import React, {Suspense, useEffect, useState, useRef} from "react";
import { Loader, OrbitControls, PerspectiveCamera, Preload, Stars} from "@react-three/drei";
import Lights from "../components/components3D/Lights";
import gsap from "gsap";
import Navigation from "../components/components3D/Navigation";
import InfoCards from "../components/components3D/InfoCards"
import AnimatedCanvas from '../components/components2D/animated/AnimatedCanvas';
import { AnimatePresence } from 'framer-motion';
import Modal from '../components/components3D/Modal';
import ScrollToTopOnLoad from '../components/components2D/other/ScrollToTopOnLoad';
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing'


import Scene from '../components/components3D/models/Scene';
import Ghosts from '../components/components3D/models/Ghosts';
import Titles from '../components/components3D/models/Titles';
import Socials from '../components/components3D/models/Socials';
import NFTSection from '../components/components3D/models/NFTSection';
import StorySection from '../components/components3D/models/StorySection';
import RoadmapSection from '../components/components3D/models/RoadmapSection';
import StartSection from '../components/components3D/models/StartSection';
import ScrollToTopOnLoadDelayed from '../components/components3D/ScrollToTopOnLoadDelayed';
import Head from 'next/head';



const homeSectionLocation = {x:0, y:1.5, z:0}
const nftSectionLocation = {x:-8.3, y:4, z:-45}
const teamSectionLocation = {x: 22, y:4, z:-10}
const roadmapSectionLocation = {x: 23, y:2, z:22}
const storySectionLocation = {x: -17, y:2, z:42}


function ThreePage() {


    const cameraOne = useRef(null)
    const orbitControlsOne = useRef(null)
    const viewSectionDuration = 1;



// Home section animation

const [viewHomeSection, setViewHomeSection] = useState(false)

useEffect(() => {

if (viewHomeSection === true) {
    gsap.to(
        orbitControlsOne.current.target, 
        { x: homeSectionLocation.x - 2,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { y: homeSectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { z: homeSectionLocation.z,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { x: homeSectionLocation.x,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { y: homeSectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { z: homeSectionLocation.z,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )


        }

    else {
        return
    }
    
}, [viewHomeSection])

function handleViewHomeSectionClick() {
  setViewHomeSection(true)
  setViewNftSection(false)
  setViewTeamSection(false)
  setViewRoadmapSection(false)
  setViewStorySection(false)
    
}
    

// NFT section animation

const [viewNftSection, setViewNftSection] = useState(false)

useEffect(() => {

if (viewNftSection === true) {
    gsap.to(
        orbitControlsOne.current.target, 
        { x: nftSectionLocation.x,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { y: nftSectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { z: nftSectionLocation.z - 2,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { x: nftSectionLocation.x,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { y: nftSectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { z: nftSectionLocation.z,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )


        }

    else {
        return
    }
    
}, [viewNftSection])

function handleViewNftSectionClick() {
  setViewNftSection(true)
  setViewTeamSection(false)
  setViewRoadmapSection(false)
  setViewStorySection(false)
  setViewHomeSection(false)

}

// Team section animation

const [viewTeamSection, setViewTeamSection] = useState(false)

useEffect(() => {

if (viewTeamSection === true) {
    gsap.to(
        orbitControlsOne.current.target, 
        { x: teamSectionLocation.x + 1.3,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { y: teamSectionLocation.y - 0.1,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { z: teamSectionLocation.z - 1.4,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { x: teamSectionLocation.x,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { y: teamSectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { z: teamSectionLocation.z,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )

        }

    else {
        return
    }
    
}, [viewTeamSection])

function handleViewTeamSectionClick() {
  setViewTeamSection(true)
  setViewRoadmapSection(false)
  setViewStorySection(false)
  setViewNftSection(false)
  setViewHomeSection(false)

}

// Roadmap section animation

const [viewRoadmapSection, setViewRoadmapSection] = useState(false)

useEffect(() => {

if (viewRoadmapSection === true) {
    gsap.to(
        orbitControlsOne.current.target, 
        { x: roadmapSectionLocation.x + 1,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { y: roadmapSectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { z: roadmapSectionLocation.z + 2,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { x: roadmapSectionLocation.x,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { y: roadmapSectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { z: roadmapSectionLocation.z,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )

        }

    else {
        return
    }
    
}, [viewRoadmapSection])

function handleViewRoadmapSectionClick() {
    setViewRoadmapSection(true)
    setViewStorySection(false)
    setViewNftSection(false)
    setViewTeamSection(false)
    setViewHomeSection(false)
}
// Story section animation

const [viewStorySection, setViewStorySection] = useState(false)

useEffect(() => {

if (viewStorySection === true) {
    gsap.to(
        orbitControlsOne.current.target, 
        { x: storySectionLocation.x - 1.5,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { y: storySectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        orbitControlsOne.current.target, 
        { z: storySectionLocation.z + 2,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { x: storySectionLocation.x,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { y: storySectionLocation.y,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )
    gsap.to(
        cameraOne.current.position, 
        { z: storySectionLocation.z,
            duration: viewSectionDuration,
            ease: "power1.out"}
    )


        }

    else {
        return
    }
    
}, [viewStorySection])

function handleViewStorySectionClick() {
    setViewStorySection(true)
    setViewNftSection(false)
    setViewRoadmapSection(false)
    setViewTeamSection(false)
    setViewHomeSection(false)

    
}
const [infoCard, setInfoCard] = useState({name: 'Introduction', text: <ul className='list-none py-0 px-2 m-0 leading-none '> <li> Click and drag to look around. </li> <li> Click the buttons above to navigate. </li> <li> Click on objects to inspect them. </li> </ul>});

function handleModelClick(e) {
    let modelText = ''
    let name = ''

    // Set the card info, depending on which model was clicked

    switch(e.eventObject.name) {

        case 'Debris':
            name = 'Debris';
            modelText = "What happened here? It seems like everything's falling to pieces...";
            break;

        //Story
        case 'Sand Moon':
            name = 'Sand Moon';
            modelText = 'After the great disjunction, this Moon became a harsh, dry wasteland. Soon after, the SandGhosts have adapted to the environment and began rebuilding their homes here.';
            break;
        case 'Snow Moon':
            name = 'Snow Moon';
            modelText = 'The great disjunction sent this Moon into a permanent sub-zero winter, making it uninhabitable to most Ghosts. SnowGhosts however, are well equipped to traverse the icy landscape.';
            break;
        case 'Volcanic Moon':
            name = 'Volcanic Moon';
            modelText = 'The great conjuction gave birth to this truely hellish place. The VolcanicGhosts however, have found refuge here. They now roam the trecherous landscape, rebuilding their civilization.';
            break;
        case 'Jungle Moon':
            name = 'Jungle Moon';
            modelText = "This was the most habitable Moon after the great disjunction. The (very territorial) JungleGhosts now claim this Moon and aren't afraid to fight to keep it to themselves.";
            break;
        case 'Shadow Moon':
            name = 'Shadow Moon';
            modelText = "Thanks to fragments of planet G.H.O.S.T. blocking sunlight to this Moon, it's always night time here. This doesn't seem to bother the ShadowGhosts though... ";
            break;
        case 'Book':
            name = 'Book';
            modelText = 'Hmm... it seems to be locked. What kind of weirdo locks a book? (Probably me, ZombieGhost)';
            break;
        case 'Boxes':
            name = 'Boxes';
            modelText = "I wonder what's inside..." ;
            break;
        case 'Telescope':
            name = 'Telescope';
            modelText = "I can't see anything through this... I think the lense is broken" ;
            break;
            
            
        // Roadmap
        case 'Phase 1':
            name = 'Phase 1';
            modelText = <ul className='list-none py-0 px-2 m-0 leading-7'> <li> 2D website launch </li> <li> 3D website launch and merge with 2D site </li> <li> Twitter launch </li> <li> Discord launch </li> <li> Revealing of all three NFT collections </li> </ul> ;
            break;
        case 'Phase 2':
            name = 'Phase 2';
            modelText = <ul className='list-none py-0 px-2 m-0 leading-7'> <li> Core team doxxing </li> <li> Launch of the MoonPass NFT collection </li> <li> Launch of the Guardian Ghost free mint collection </li> <li> .ghost name service (your MoonGhost account registration) </li> <li> ? Soul fragments mint ? </li> </ul> ;
            break;
        case 'Phase 3':
            name = 'Phase 3';
            modelText = <ul className='list-none py-0 px-2 m-0 leading-7'> <li> Some REWARDS </li> <li> Some more REWARDS </li> <li> Even more REWARDS </li> <li> Phase 5 reveal </li> </ul> ;
            break;
        case 'Phase 4':
            name = 'Phase 4';
            modelText = <ul className='list-none py-0 px-2 m-0 leading-7'> <li> Release of the first MoonGhost game (expected late 2023) </li> <li> ? Moon**** mint and airdrop ? </li> <li> Phase 6 reveal </li> </ul> ;
            break;
        case 'Boat':
            name = 'Boat';
            modelText = "What's a boat doing here?" ;
            break;

        // NFTs
        case 'Guardian Ghost NFTs':
            name = 'Guardian Ghost NFTs';
            modelText = <ul className='list-none py-0 px-2 m-0 leading-7'> <li>Launch Date: TBA</li> <li>Price: FREE</li> <li>Supply: TBA</li> <li>Blockchain: Solana</li> </ul> ;
            break;
        case 'Genesis Ghost NFTs':
            name = 'Genesis Ghost NFTs';
            modelText = <ul className='list-none py-0 px-2 m-0 leading-7'> <li>Launch Date: TBA</li> <li>Price: TBA</li> <li>Supply: 5555</li> <li>Blockchain: Solana</li> </ul> ;
            break;
        case 'MoonPasses':
            name = 'MoonPasses';
            modelText = <ul className='list-none py-0 px-2 m-0 leading-7'> <li>Launch Date: TBA</li> <li>Price: TBA</li> <li>Supply: TBA</li> <li>Blockchain: Solana</li> </ul> ;
            break;
        
         // Team
         case 'ZombieGhost':
            name = 'ZombieGhost';
            modelText = "Founder, Artist and Lead Developer - I manage the project, create all the artwork/models, and lead the software development team." ;
            break;
        case 'KukriiGhost':
            name = 'KukriiGhost';
            modelText = "Lead Community Developer - I develop the community, providing the best experiences, care and resources available." ;
            break;
        case 'DemonGhost':
            name = 'DemonGhost';
            modelText = "Story Director - With input from the team and community, I develop the MoonGhost storyline." ;
            break;
        case 'GorillaGhost':
            name = 'GorillaGhost';
            modelText = "Social Media Manager - I handle all MoonGhost social media accounts, aiming to provide exciting opportunities and accurate information to the community." ;
            break;
        case 'BearGhost':
            name = 'BearGhost';
            modelText = "Marketing Director - I manage the marketing strategy for the project." ;
            break;
        
        
        default:
            modelText = '';
    }
    setInfoCard({name: name, text: modelText})
}

// Turns off info card
function handleInfoMainClick() {
    setInfoCard({name: '', text: ''})
}

const [modalActive, setModalActive] = useState(false);

const handleHomeClick = () => {
    setModalActive(true)
}

const handleModalCancelClick = () => {
    setModalActive(false)
}

  return (
      
        
            <>
            <Head>
            <title>MoonGhost - Experience</title>
            </Head>
                    <AnimatedCanvas>  
                        <AnimatePresence key='4'>
                        <ScrollToTopOnLoad key='5'/> 
                        <ScrollToTopOnLoadDelayed key='1' /> 
                        {infoCard.name && <InfoCards info={infoCard} handleInfoMainClick={handleInfoMainClick}/>}
                        {modalActive && <Modal title='Are you sure you want to go back to the Home page?' handleModalCancelClick={handleModalCancelClick} />}
                        </AnimatePresence>
                        <Navigation 
                                    handleHomeClick={handleHomeClick}
                                    handleViewHomeSectionClick={handleViewHomeSectionClick} 
                                    handleViewNftSectionClick={handleViewNftSectionClick} 
                                    handleViewRoadmapSectionClick={handleViewRoadmapSectionClick} 
                                    handleViewTeamSectionClick={handleViewTeamSectionClick}
                                    handleViewStorySectionClick={handleViewStorySectionClick}
                                    />
                        <Canvas className='canvas'>
                            <Suspense fallback={null}>
                                    <PerspectiveCamera ref={cameraOne} makeDefault fov={70} position={[0, 1, 0]} />
                                    <Lights />
                                    <OrbitControls ref={orbitControlsOne} enableDamping={false} enablePan={false} target={[-2, 1, 0]} maxPolarAngle={3} maxDistance={4} />
                                    <Selection>
                                        <EffectComposer multisampling={8} autoClear={false}>
                                        <Outline blur visibleEdgeColor="white" edgeStrength={40} width={1500} />
                                        </EffectComposer>
                                    <Scene handleModelClick={handleModelClick} />
                                    <StorySection handleModelClick={handleModelClick} />
                                    <NFTSection handleModelClick={handleModelClick} />
                                    <RoadmapSection handleModelClick={handleModelClick} />
                                    <StartSection handleModelClick={handleModelClick} />
                                    <Socials handleModelClick={handleModelClick} />
                                    <Ghosts handleModelClick={handleModelClick} />
                                    <Titles 
                                    handleViewNftSectionClick={handleViewNftSectionClick} 
                                    handleViewRoadmapSectionClick={handleViewRoadmapSectionClick} 
                                    handleViewTeamSectionClick={handleViewTeamSectionClick}
                                    handleViewStorySectionClick={handleViewStorySectionClick}   />
                                    </Selection>
                                    <Stars />
                                    <Preload all/>
                            </Suspense>
                        </Canvas>
                    </AnimatedCanvas>

             <Loader />
            
            </>

        
    
      

  );
}


export default ThreePage;
