import AnimationText from "@/components/AnimationText/AnimationText";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

function ApartmentsPortfolio() {
    return (
        <Box pt={{base: '0px', lg: '40px'}} display='flex' flexDirection='column' rowGap={{base: '20px', lg: '40px'}}>
                    <Grid w='100%' display='flex' flexDirection={{base: 'column', lg: 'row'}} columnGap='40px' rowGap='20px'>

                        <Box position="relative" width={{lg: '50%'}}   mx='auto' overflow='hidden'>
                            <Image src='portfolio-images/port-image-1.svg'  height='100%'/>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}} left={{base: '15px', lg: '40px'}}  textAlign='left'>
                                <AnimationText lines={['Azure Heights', 'Luxury Residences']} style={{fontSize:'22px',color:'#fff', fontWeight: '600'}} delay={0.2}/>
                            </Box>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}}  right={{base: '15px', lg: '40px'}}  boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom={{base: '100px', lg: '130px'}} right={{base: '15px', lg: '40px'}} display='flex' columnGap='4px'>
                                <Box w='160px' h='82px' borderRadius='18px' bgColor='#fff' py='16px' px='12px' display='flex' alignItems='center' justifyContent='space-between' transition='all 0.4s'
                                    _hover={{bgColor: '#D5E7EE'}}>
                                    <Image src='/map-pointer.svg'/>
                                    <Text fontSize='16px' color='#000'>Dubai Marina</Text>
                                </Box>
                            </Box>
                            <Box position='absolute' bottom={{base: '15px', lg: '40px'}} left={{base: '15px', lg: '40px'}} display='flex' columnGap='4px' textAlign='left'>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='12px' px='10px' display='flex' flexDirection='column' justifyContent='space-between' transition='all 0.4s'
                                    _hover={{bgColor: '#D5E7EE'}}>
                                    <Text fontSize='12px' color='#2E2F30'>Price</Text>
                                    <Text fontSize='16px' color='#000'>from $290k</Text>
                                </Box>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='12px' px='12px' display='flex' flexDirection='column' justifyContent='space-between' transition='all 0.4s'
                                    _hover={{bgColor: '#D5E7EE'}}>
                                    <Text fontSize='12px' color='#2E2F30'>Installment Plan</Text>
                                    <Text fontSize='16px' color='#000'>for 10 years</Text>
                                </Box>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='12px' px='12px' display='flex' flexDirection='column' justifyContent='space-between' transition='all 0.4s'
                                    _hover={{bgColor: '#D5E7EE'}}>
                                    <Text fontSize='12px' color='#2E2F30'>Initial Payment</Text>
                                    <Text fontSize='16px' color='#000'>$30,000</Text>
                                </Box>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='12px' px='12px' display='flex' flexDirection='column' justifyContent='space-between' transition='all 0.4s'
                                    _hover={{bgColor: '#D5E7EE'}}>
                                    <Text fontSize='12px' color='#2E2F30'>Upgraded Features</Text>
                                    <Box display='flex' columnGap='15px'>
                                        <Image src='/icon-p-1.svg'/>
                                        <Image src='/icon-p-2.svg'/>
                                    </Box>
                                </Box>
                                <Box w='113px' h='82px' borderRadius='18px' bgColor='#fff' py='12px' px='12px' display='flex' flexDirection='column' justifyContent='space-between' transition='all 0.4s'
                                    _hover={{bgColor: '#D5E7EE'}}>
                                    <Text fontSize='12px' color='#2E2F30'>Completion Date</Text>
                                    <Text fontSize='16px' color='#000'>09/2025</Text>
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

                    <Grid w='100%' display='flex' flexDirection={{base: 'column', lg: 'row'}} columnGap='40px' rowGap='20px'>

                        <Box position="relative" width={{lg: '50%'}}   mx='auto'>
                            <Image src='portfolio-images/port-image-3.svg'  height='100%'/>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}}  right={{base: '15px', lg: '40px'}}  boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom={{base: '15px', lg: '40px'}}  left={{base: '15px', lg: '40px'}}  display='flex'>
                                <Text fontSize={{base: '18px', lg: '22px'}} color='#fff' fontWeight='800'>Azure Heights Luxury Residences</Text>
                            </Box>
                        </Box>

                        <Box position="relative" width={{lg: '50%'}}   mx='auto'>
                            <Image src='portfolio-images/port-image-4.svg'  height='100%'/>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}}  right={{base: '15px', lg: '40px'}}  boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom={{base: '15px', lg: '40px'}}  left={{base: '15px', lg: '40px'}}  display='flex'>
                                <Text fontSize={{base: '18px', lg: '22px'}} color='#fff' fontWeight='800'>Azure Heights Luxury Residences</Text>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid w='100%' display='flex' flexDirection={{base: 'column', lg: 'row'}} columnGap='40px' rowGap='20px'>

                        <Box position="relative" width={{lg: '50%'}}   mx='auto'>
                            <Image src='portfolio-images/port-image-5.svg'  height='100%'/>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}}  right={{base: '15px', lg: '40px'}}  boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom={{base: '15px', lg: '40px'}}  left={{base: '15px', lg: '40px'}}  display='flex'>
                                <Text fontSize={{base: '18px', lg: '22px'}} color='#fff' fontWeight='800'>Azure Heights Luxury Residences</Text>
                            </Box>
                        </Box>

                        <Box position="relative" width={{lg: '50%'}}   mx='auto'>
                            <Image src='portfolio-images/port-image-6.svg'  height='100%'/>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}}  right={{base: '15px', lg: '40px'}}  boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' top={{base: '15px', lg: '40px'}}  left={{base: '15px', lg: '40px'}}  display='flex'>
                                <Box bgColor='#fff' w='173px' h='52px' borderRadius='80px' fontSize='18px' textAlign='center' pt='12px' transition='all 0.4s'
                                    _hover={{bgColor: '#c0c0c0'}}>
                                    Find On The Map
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
    );
}

export default ApartmentsPortfolio;