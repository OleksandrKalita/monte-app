import AnimationText from "@/components/AnimationText/AnimationText";
import SepecialAnimationComponents from "@/components/SepecialAnimationComponents/SepecialAnimationComponents";
import { Box, Grid, Image, Text, Input, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Footer() {
    const [isMobile, setMobile] = useState(false);
    const isMob = useBreakpointValue({ base: true, lg: false });
    useEffect(() => {
        setMobile(isMob);
    }, [isMob]);

    return (
        <Box>
            <Box w='100vw' bgColor='#F8F5F2'>
                <Box maxW='1400px' px={{base: '15px', lg: '20px'}} mx='auto' py='30px'>
                    <Box>
                        <Grid width="full">
                            <Box position="relative" width="full" height={{base: '700px', lg: '730px'}}>
                                <Image src="/footer-image.svg" objectFit='cover' width="full" height="full" borderRadius='20px'/>
                                <Box position="absolute" top="0" left="0" pt="40px" pl='25px'>
                                    {isMobile ? <AnimationText style={{fontSize: '36px', fontWeight: '800', color: '#fff'}} lines={['Built Your Future', 'With Us']} /> : 
                                    <AnimationText style={{fontSize: '68px', fontWeight: '800', color: '#fff'}} lines={['Built Your Future', 'With Us']} />}
                                </Box>
                                <Box position="absolute" top={{base: '140px', lg: '220px'}} left="0" pl="25px" pt='25px'>
                                    <Box bgColor='#fff' color='#000' fontSize={{base: '16px', lg: '20px'}} borderRadius='80px' px={{base: '12px', lg: '18px'}} py={{base: '8px', lg: '12px'}} cursor='pointer'>
                                        Start Your Journey
                                    </Box>
                                </Box> 
                            </Box>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box w='100vw' pt='50px' pb='100px'>
                <Box maxW='1400px' px='20px' mx='auto' display='flex' justifyContent='space-between' flexWrap='wrap' rowGap='70px'>
                    <Box display='flex' flexDirection='column' justifyContent='space-between' rowGap='70px'>
                        <Box>
                            <Image className="svg-image" src='/images/home/logotype-icon.svg' width='169px' height='58px' mb='25px'/>
                            <AnimationText style={{fontSize: '16px', color: 'rgba(0,0,0,0.8)'}} lines={['Building Your Dreams In Real Estate']}/>
                        </Box>

                        <Box display='flex' flexDirection='column' w='346px'>
                            <Text fontSize='22px' color='#000'>Subscribe to our news</Text>
                            <Text fontSize='14px' color='rgba(0,0,0,0.5)' pt='20px'>Stay Informed and Never Miss a Beat: Subscribe to Our Exclusive News Updates!</Text>
                            <Input placeholder='Enter your mail' border='none' borderRadius='0px' borderBottom='1px solid rgba(23,23,23,0.2)' py='10px' mt='35px' fontSize='14px' color='#000' _placeholder={{color: 'rgba(23,23,23,0.5)'}} _focus={{boxShadow: 'none'}}/>
                            <Box bgColor='#000' color='#fff' fontSize='14px' py='11px' borderRadius='80px' w='100px' textAlign='center' mt='31px'>Submit</Box>
                        </Box>
                    </Box>

                    <Box display='flex' flexDirection='column' rowGap='200px' px='10px'>
                        <Box>
                            <Text fontSize='16px' color='rgba(0,0,0,0.8)'>Quick Navigation</Text>
                            <Box display='flex' flexDirection='column' rowGap='32px' pt='40px'>
                                <Text fontSize='18px' color='rgb(0,0,0)' maxW='max-content'>Home</Text>
                                <Text fontSize='18px' color='rgb(0,0,0)' maxW='max-content'>Our Properties</Text>
                                <Text fontSize='18px' color='rgb(0,0,0)' maxW='max-content'>Our Advantages</Text>
                                <Text fontSize='18px' color='rgb(0,0,0)' maxW='max-content'>Our Services</Text>
                            </Box>
                        </Box>

                        <Box display='flex' flexDirection='column'>
                            <Image src='/map-image.svg' width='225px' height='136px'/>
                            <Text fontSize='16px' color='#000' fontWeight='500'>123 Zayed Road,<br/>Dubai Marina,<br/>Dubai, United Arab Emirates</Text>
                        </Box>
                    </Box>

                    <Box display='flex' flexDirection='column' justifyContent='space-between' rowGap='80px'>
                        <Box display='flex' flexDirection='column' rowGap='30px'>
                            <Box display='flex' columnGap='25px' alignItems='center'>
                                <Image src='avatar-4-icon.svg' width='60px' height='60px' />
                                <Box display='flex' flexDirection='column'>
                                    <Text fontSize='12px' color='rgba(23,23,23,0.5)'>Monte Founder</Text>
                                    <Text fontSize='16px' color='#000'>Ethan Thompson</Text>
                                </Box>
                            </Box>
                            <Text fontSize='22px' color='#232323'>We are here to change<br/>your future.</Text>
                            <Box display='flex' columnGap='20px' alignItems='center'>
                                <Box bgColor='#000' color='#fff' fontSize='14px' py='11px' px='20px' borderRadius='80px' textAlign='center' maxW='max-content'>Contact Us</Box>
                                <Box display='flex' columnGap='20px' alignItems='center'>
                                    <Image src='dark-email-icon.svg' width='22px' height='17.6px'/>
                                    <Image src='dark-telegram-icon.svg' width='24px' height='20px'/>
                                </Box> 
                            </Box>
                        </Box>

                        <Box display='flex' flexDirection='column'>
                            <Text fontSize='14px' color='rgba(0,0,0,0.5)'>Copyright 2023 © Golden Gate Properties</Text>
                            <Box display='flex' columnGap='27px'>
                                <Text fontSize='14px' color='#000'>Terms Of Service</Text>
                                <Text fontSize='14px' color='#000'>Terms Of Service</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;