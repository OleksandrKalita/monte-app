import { Box, Image, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

function PartnersSection() {
    return (
        <Box w='100vw' bgColor='#F8F5F2' pt='100px' pb='50px'>
            <Box maxW='1400px' px='20px' textAlign='center' mx='auto' pb='40px'>
                <Text fontSize='24px' color='#000'>Our valued partners</Text>
            </Box>

            <Marquee style={{position: 'relative', zIndex: 2}} speed={120} >
                <Image src="/partners-images/partner-1-logo.svg" width='auto' height='auto' mx='72.5px'/>
                <Image src="/partners-images/partner-3-logo.svg" width='auto' height='auto' mx='72.5px'/>
                <Image src="/partners-images/partner-2-logo.svg" width='auto' height='auto' mx='72.5px'/>
                <Image src="/partners-images/partner-4-logo.svg" width='auto' height='auto' mx='72.5px'/>
                <Image src="/partners-images/partner-5-logo.svg" width='auto' height='auto' mx='72.5px'/>
                <Image src="/partners-images/partner-6-logo.svg" width='auto' height='auto' mx='72.5px'/>
                <Image src="/partners-images/partner-7-logo.svg" width='auto' height='auto' mx='72.5px'/>
                <Image src="/partners-images/partner-8-logo.svg" width='auto' height='auto' mx='72.5px'/>
            </Marquee>
        </Box>
    );
}

export default PartnersSection;