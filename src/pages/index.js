import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "@/sections/Home/Home";
import VideoSection from "@/sections/Video/VideoSection";
import PortfolioSection from "@/sections/Portfolio/PortfolioSection";
import Head from "next/head";
import StatisticSection from "@/sections/Statistic/StatisticSection";
import SolutionsSection from "@/sections/Solutions/SolutionsSection";
import AdvantagesSection from "@/sections/Advantages/AdvantagesSection";
import PartnersSection from "@/sections/Partners/PartnersSection";
import QuestionsSection from "@/sections/Questions/QustionsSection";
import Footer from "@/sections/Footer/Footer";
import PropertySection from "@/sections/Property/PropertySection";

export default function HomePage() {
  return <ChakraProvider>
  <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
  </Head>
  <Box fontFamily='montserrat' w='100vw' minH='100vh' display='flex'  flexDirection='column' bgColor='#F8F5F2'>
      <Home/>
      <VideoSection/>
      <PortfolioSection/>
      <StatisticSection/>
      <SolutionsSection/>
      <AdvantagesSection/>
      <PropertySection/>
      <PartnersSection/>
      <QuestionsSection/>
      <Footer/>
  </Box>
</ChakraProvider>
}
