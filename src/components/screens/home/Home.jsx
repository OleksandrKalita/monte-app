import { Roboto } from "next/font/google";
import { Box } from "@chakra-ui/react";
import HomeSection from "@/components/sections/HomeSection";
// import { Screens } from "@/components/sections/Screens";
import VideoSection from "@/components/sections/VideoSection";
import VideoComponent from "@/components/sections/VideoSection";

const roboto = Roboto({ subsets: ["latin"], weight: ['400'] });


const Home = () => {

    return (
    <Box w='100vw' minH='100vh' display='flex' flexDirection='column' bgColor='#F8F5F2'>
        <HomeSection/>
        <VideoSection/>
        <div style={{ height: '100vh', backgroundColor: '#212121' }}>helper container</div>
    </Box>);
}

export default Home