import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomeSection from "@/components/sections/HomeSection";
import VideoSection from "@/components/sections/VideoSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import Head from "next/head";
import StatisticSection from "@/components/sections/StatisticSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";

const Home = () => {
    return (
    <ChakraProvider>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        </Head>
        <Box fontFamily='montserrat' w='100vw' minH='100vh' display='flex'  flexDirection='column' bgColor='#F8F5F2'>
            <HomeSection/>
            <VideoSection/>
            <PortfolioSection/>
            <StatisticSection/>
            <SolutionsSection/>
            <AdvantagesSection/>
        </Box>
    </ChakraProvider>);
}

export default Home