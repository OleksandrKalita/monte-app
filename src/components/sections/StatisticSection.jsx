import AnimationText from "@/hooks/AnimationText";
import SepecialAnimationComponents from "@/hooks/SepecialAnimationComponents";
import { Box, Image, Text, Grid, Button, useBreakpointValue} from "@chakra-ui/react";

function StatisticSection() {
    const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const iconSize = useBreakpointValue({ base: '12px', md: '16px' });
    return (
        <Box width='100vw' h='900px'>
            <Box maxW='1400px' mx='auto' px='20px' py='40px' display='flex' flexDirection='row' columnGap='10px'>

                <Box w='50%' display='flex' flexDirection='column'>
                    <AnimationText style={{fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)'}} lines={['At Golden Gate Properties, we offer more than', 'just real estate services; we provide an unparalleled', 'experience tailored to meet your needs and exceed', 'your expectations.']} />
                    <Box display='flex' columnGap='18px' alignItems='center' pt='50px'>
                        <Box width='186px' display='flex'>
                            {/* <SepecialAnimationComponents 
                                animationFrom={{ y: 50, autoAlpha: 0, scale: 0.5 }}
                                animationTo={{y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Image src='/avatar-1-icon.svg' width='60px' height='60px'/>
                            )}/>
                            <SepecialAnimationComponents 
                                animationFrom={{ y: 50, autoAlpha: 0, scale: 0.5 }}
                                animationTo={{y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Image src='/avatar-2-icon.svg' width='60px' height='60px'  zIndex={2}/>
                            )}/>
                            <SepecialAnimationComponents 
                                animationFrom={{ y: 50, autoAlpha: 0, scale: 0.5 }}
                                animationTo={{y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Image src='/avatar-3-icon.svg' width='60px' height='60px'  zIndex={2}/>
                            )}/>
                            <SepecialAnimationComponents 
                                animationFrom={{ y: 50, autoAlpha: 0, scale: 0.5 }}
                                animationTo={{y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Image src='/avatar-4-icon.svg' width='60px' height='60px'  zIndex={2}/>
                            )}/> */}
                            <Image src='/avatar-1-icon.svg' width='60px' height='60px'/>
                            <Image src='/avatar-2-icon.svg' width='60px' height='60px' ml='-18px' zIndex={2}/>
                            <Image src='/avatar-3-icon.svg' width='60px' height='60px' ml='-18px' zIndex={2}/>
                            <Image src='/avatar-4-icon.svg' width='60px' height='60px' ml='-18px' zIndex={2}/>
                        </Box>
                        <AnimationText style={{fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)'}} lines={['Meet Our', 'Professional Team']}/>
                    </Box>
                    <Box>
                        <Box display='flex' columnGap='63px' py='50px' alignItems='center' borderBottom='1px solid rgba(35,35,35,0.2)'>
                            <Text fontSize='82px' color='#000' fontWeight='500'>100+</Text>
                            <AnimationText style={{fontSize:'24px', color: '#000', fontWeight: 500}} lines={['Successful', 'Transactions Monthly']} delay={0.2}/>
                        </Box>
                        <Box display='flex' columnGap='63px' py='50px' alignItems='center' borderBottom='1px solid rgba(35,35,35,0.2)'>
                            <Text fontSize='82px' color='#000' fontWeight='500'>98%</Text>
                            <AnimationText style={{fontSize:'24px', color: '#000', fontWeight: 500}} lines={['Successful', 'Transactions Monthly']} delay={0.2}/>
                        </Box>
                        <Box display='flex' columnGap='63px' py='50px' alignItems='center'>
                            <Text fontSize='82px' color='#000' fontWeight='500'>500</Text>
                            <AnimationText style={{fontSize:'24px', color: '#000', fontWeight: 500}} lines={['Successful', 'Transactions Monthly']} delay={0.2}/>
                        </Box>
                    </Box>
                </Box>

                <Box >
                    <Grid width="full">
                        <Box position="relative" width="full" height="auto" colSpan={{ base: 2, md: 1 }}>
                            <Image src="/statisctic-dream-image.svg" width="full" height="auto" />
                            <Box position="absolute" top="0" right="0" p="20px">
                                <Box h='45px' bgColor='#D5E7EE' borderRadius='80px' py='4px' pl='4px' pr='20px' display='flex' columnGap='10px' textAlign='center' cursor='pointer'>
                                    <Box h='37px' w='37px' alignContent='center' bgColor='#fff' borderRadius='50%' >
                                        <Image src='/phone-icon.svg' width={10} height={10} pt='8px' />
                                    </Box>
                                    <Text color='#000' fontSize='18px' fontWeight={500} pt='5px'>Contact Us Now</Text>
                                </Box>
                            </Box>
                            <Box position="absolute" left="0" bottom="0" p="20px">
                                <Text fontSize='18px' fontWeight='800' color='#fff'>Building your dreams</Text>
                            </Box>
                            <Box position="absolute" right="0" bottom="0" p="20px">
                                <Box w='304px' h='96px' bgColor='#fff' borderRadius='20px' p='20px' display='flex' columnGap='20px' alignItems='center'>
                                    <Box position='relative' boxSize='60px'>
                                        <Image src="avatar-1-icon.svg"/>
                                        <Box boxSize='15px' position='absolute' top={0} right={0} borderRadius='50%' bgColor='#fff' border='4px solid #000'></Box>
                                    </Box>
                                    <Box display='flex' flexDirection='column' justifyContent='space-between'>
                                    <AnimationText style={{fontSize: '12px', color: 'rgba(25,25,25,0.5)'}} lines={['Special Offer']}/>
                                    <AnimationText style={{fontSize: '16px', color: '#000', fontWeight: '500'}} lines={['Get The Consultation', 'With Our Expert']}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default StatisticSection;