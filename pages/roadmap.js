import Head from "next/head";
import React from "react";
import BasicPage from "../components/components2D/basic/BasicPage";
import Roadmap from "../components/components2D/roadmap/Roadmap";

const RoadmapPage = () => {
    return (
    <>
    <Head>
    <title>MoonGhost - Roadmap</title>
    </Head>
    <BasicPage activePage='Roadmap' heroText='The MoonGhost Roadmap'>
        <Roadmap />
    </BasicPage>
    </>
    )
}

export default RoadmapPage