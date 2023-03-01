import Head from "next/head";
import React from "react";
import BasicPage from "../components/components2D/basic/BasicPage";
import TeamSection from "../components/components2D/team/TeamSection";

const TeamPage = () => {
    return (
        <>
            <Head> 
            <title>MoonGhost - Team</title>
            </Head>
            <BasicPage activePage='Team' heroText='The MoonGhost Team'>
                <TeamSection />
            </BasicPage>
        </>
    )
}

export default TeamPage