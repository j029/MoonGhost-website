
import React, {useMemo} from "react";
import * as THREE from 'three'


const Lights = () => {

    const nftsTitleLight = useMemo(() => new THREE.SpotLight(0xf1f0ea), [])
    const roadmapTitleLight = useMemo(() => new THREE.SpotLight(0xf1f0ea), [])

    const nftsLight = useMemo(() => new THREE.SpotLight(0xf1f0ea), [])
    const nftsLight1 = useMemo(() => new THREE.SpotLight(0xfffde0), [])
    const nftsLight2 = useMemo(() => new THREE.SpotLight(0xfffde0), [])
    const teamLight = useMemo(() => new THREE.SpotLight(0xfffde0), [])
    const roadmapLight = useMemo(() => new THREE.SpotLight(0xf1f0ea), [])
    const storyLight = useMemo(() => new THREE.SpotLight(0xeed986), [])
    const storyLightOne = useMemo(() => new THREE.SpotLight(0xfffde0), [])
    const storyLightTwo = useMemo(() => new THREE.SpotLight(0xfffde0), [])
    const light = useMemo(() => new THREE.SpotLight(0xfffde0), [])


    return (

        <>
            

            <directionalLight
            position={[-8, 16, 0]}
            intensity={0.3}
            color={'blue'}
            />
            <ambientLight intensity={0} />
            <primitive object={light} position={[0, 25, 0]} intensity={1} penumbra={1}/>
            <primitive object={light.target} position={[0, 0, 0]}  />

            {/* NFTs */}
            <primitive object={nftsLight} position={[-7, 6, -26]} intensity={1.2} penumbra={1} angle={Math.PI/2} />
            <primitive object={nftsLight.target} position={[-7, 6, -27]}  />
            <primitive object={nftsLight1} position={[-7, 8, -26]} intensity={0.3} penumbra={1} angle={Math.PI/2} />
            <primitive object={nftsLight1.target} position={[-7, 6, -27]}  />
            <primitive object={nftsLight2} position={[-7, 8, -40]} intensity={0.3} penumbra={1} angle={Math.PI/2} />
            <primitive object={nftsLight2.target} position={[-9, 6, -40]}  />
            <primitive object={nftsTitleLight} position={[2, 0, -4]} intensity={3} penumbra={1} distance={16}/>
            <primitive object={nftsTitleLight.target} position={[2, 5, -7]}  />
            {/* Team */}
            <primitive object={teamLight} position={[20, 5, 0]} intensity={2.7} penumbra={1} distance={50}/>
            <primitive object={teamLight.target} position={[22, 3, -5]}  />
            {/* Roadmap */}
            <primitive object={roadmapLight} position={[33, 4, 18]} intensity={2.5} penumbra={0.8} distance={80}/>
            <primitive object={roadmapLight.target} position={[33, 3, 25]}  />
            <primitive object={roadmapTitleLight} position={[16, 1, -4]} intensity={4} penumbra={0.4} distance={14}/>
            <primitive object={roadmapTitleLight.target} position={[16, 12, 4]}  />
            {/* Story */}
            <primitive object={storyLight} position={[-24, 4, 50]} intensity={2.5} penumbra={0.5} />
            <primitive object={storyLight.target} position={[-24, 0, 51]}  />
            <primitive object={storyLightOne} position={[-24, 15, 50]} intensity={0.3} penumbra={0.5} />
            <primitive object={storyLightOne.target} position={[-24, 0, 51]}  />
            <primitive object={storyLightTwo} position={[25, 15, 90]} intensity={1.2} penumbra={0} />
            <primitive object={storyLightTwo.target} position={[-6, 15, 115]}  />
            

            


            
        </>
    )
}

export default Lights