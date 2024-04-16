import AnimationText from "@/components/AnimationText/AnimationText";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

function RentPortfolio() {
    return (
        <Box pt={{base: '0px', lg: '40px'}} display='flex' flexDirection='column' rowGap={{base: '20px', lg: '40px'}}>
                    <Grid w='100%' display='flex' flexDirection={{base: 'column', lg: 'row'}} columnGap='40px' rowGap='20px'>

                        <Box position="relative" width={{lg: '50%'}}   mx='auto' overflow='hidden'>
                            <Image src='portfolio-images/port-image-1.svg'  height='100%'/>
                            <Box position='absolute' bottom='30px' left='30px'>      
                            </Box>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}} left={{base: '15px', lg: '40px'}}  textAlign='left'>
                                <AnimationText lines={['Azure Heights', 'Luxury Residences']} style={{fontSize:'22px',color:'#fff', fontWeight: '600'}} delay={0.2}/>
                            </Box>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}}  right={{base: '15px', lg: '40px'}}  boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom={{base: '15px', lg: '40px'}} left={{base: '15px', lg: '40px'}} display='flex' columnGap='4px'>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='16px' px='12px' display='flex' flexDirection='column' justifyContent='space-between'>
                                    <Text fontSize='12px' color='#2E2F30'>Price</Text>
                                    <Text fontSize='16px' color='#000'>from $290k</Text>
                                </Box>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='16px' px='12px' display='flex' flexDirection='column' justifyContent='space-between'>
                                    <Text fontSize='12px' color='#2E2F30'>Price</Text>
                                    <Text fontSize='16px' color='#000'>from $290k</Text>
                                </Box>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='16px' px='12px' display='flex' flexDirection='column' justifyContent='space-between'>
                                    <Text fontSize='12px' color='#2E2F30'>Price</Text>
                                    <Text fontSize='16px' color='#000'>from $290k</Text>
                                </Box>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='16px' px='12px' display='flex' flexDirection='column' justifyContent='space-between'>
                                    <Text fontSize='12px' color='#2E2F30'>Price</Text>
                                    <Text fontSize='16px' color='#000'>from $290k</Text>
                                </Box>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='16px' px='12px' display='flex' flexDirection='column' justifyContent='space-between'>
                                    <Text fontSize='12px' color='#2E2F30'>Price</Text>
                                    <Text fontSize='16px' color='#000'>from $290k</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box position="relative" width={{lg: '50%'}}   mx='auto'>
                            <Image src='portfolio-images/port-image-2.svg'  height='100%'/>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}}  right={{base: '15px', lg: '40px'}}  boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom={{base: '15px', lg: '40px'}}  left={{base: '15px', lg: '40px'}}  display='flex'>
                                <Text fontSize={{base: '18px', lg: '22px'}} color='#fff' fontWeight='800'>Azure Heights Luxury Residences</Text>
                            </Box>
                        </Box>
                    </Grid>
                    
                </Box>
    );
}

export default RentPortfolio;