import Head from "next/head";
import React from "react";
import BasicPage from "../components/components2D/basic/BasicPage";
import Story from "../components/components2D/story/Story";

const StoryPage = () => {
    return (
        <>
            <Head>
            <title>MoonGhost - Story</title>
            </Head>
            <BasicPage activePage='Story' heroText='The MoonGhost Story'>
                <Story />
            </BasicPage>
        </>
    )
}

export default StoryPage
