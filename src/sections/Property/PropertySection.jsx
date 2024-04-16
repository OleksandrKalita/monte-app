import {
    Grid,
    GridItem,
    Image,
    Text,
    VStack,
    Box,
    useBreakpointValue,
  } from '@chakra-ui/react';

import styles from './property.module.css';
import SepecialAnimationComponents from '@/components/SepecialAnimationComponents/SepecialAnimationComponents';
import AnimationText from '@/components/AnimationText/AnimationText';
import { useEffect, useState } from 'react';
  
  function PropertySection() {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
        setIsNarrowScreen(window.innerWidth < 792);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
        window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
            {isNarrowScreen ? <AnimationText style={{fontSize: '36px'}} lines={['Discover Your Ideal', 'Property Type']} /> : <AnimationText style={{fontSize: '58px'}} lines={['Discover Your Ideal', 'Property Type']} />}
            <div className={styles.bottom_container}>
                <Box position='relative'  w='266px' h='266px' mx='auto'>
                        <img className={styles.logo_icon} src='/logo-2.svg' />
                        <Text fontSize='16px' color='#000'>Explore Our Diverse Range of Property Types and Find Your Perfect Match</Text>
                        <SepecialAnimationComponents
                            delay={1}
                            animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                            animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                            Component={() => (
                                <Box h='45px' bgColor='#141414' borderRadius='80px' py='4px' pl='4px' pr='20px' display='flex' columnGap='10px' textAlign='center' cursor='pointer'>
                                    <Box h='37px' w='37px' alignContent='center' bgColor='#D5E7EE' borderRadius='50%' pl='6px' >
                                        <Image src='/download-icon.svg' width='24px' height='24px' />
                                    </Box>
                                    <Text color='#fff' fontSize='18px' fontWeight={500} pt='5px'>Catalog Download</Text>
                                </Box>
                                )}/>
                </Box>
            </div>
            <div className={styles.content}>
                <div className={styles.l_block}>
                    <Box h='max-content' display='flex' flexDirection='column' rowGap='8px'>
                        <Box position='relative' w='266px' h='266px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-2.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>01</Text>
                                <Text fontSize='30px' color='#fff'>Luxury Villa</Text>
                            </Box>
                        </Box>
                        <Box position='relative' w='266px' h='409px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-3.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>06</Text>
                                <Text fontSize='30px' color='#fff'>Commercial Spaces</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box h='max-content' display='flex' flexDirection='column' rowGap='8px'>
                    <Box position='relative' w='266px' h='409px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-4.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>02</Text>
                                <Text fontSize='30px' color='#fff'>Penthouse Suites</Text>
                            </Box>
                        </Box>
                        <Box position='relative' w='266px' h='409px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-5.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>07</Text>
                                <Text fontSize='30px' color='#fff'>Townhouses</Text>
                            </Box>
                        </Box>
                        <Box position='relative' w='266px' h='266px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-1.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>10</Text>
                                <Text fontSize='30px' color='#fff'>Investment</Text>
                            </Box>
                        </Box>
                    </Box>
                    <div className={styles.middle_box}> 
                        <Box position='relative' w='266px' h='266px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-8.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>03</Text>
                                <Text fontSize='30px' color='#fff'>Apartments</Text>
                            </Box>
                        </Box>
                    </div>
                </div>
                <div className={styles.middle_block}>
                        <Box position='relative' w='266px' h='266px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-8.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>03</Text>
                                <Text fontSize='30px' color='#fff'>Apartments</Text>
                            </Box>
                        </Box>
                        <Box position='relative' w='266px' h='409px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-7.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>08</Text>
                                <Text fontSize='30px' color='#fff'>Waterfront Homes</Text>
                            </Box>
                        </Box>
                </div>
                <div className={styles.r_block}>
                    <div className={styles.middle_box}> 
                        <Box position='relative' w='266px' h='409px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-7.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>08</Text>
                                <Text fontSize='30px' color='#fff'>Waterfront Homes</Text>
                            </Box>
                        </Box>
                    </div>
                    <Box h='max-content' display='flex' flexDirection='column' rowGap='8px'>
                        <Box position='relative' w='266px' h='409px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-8.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>04</Text>
                                <Text fontSize='30px' color='#fff'>Beachfront Properties</Text>
                            </Box>
                        </Box>
                        <Box position='relative' w='266px' h='266px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-11.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>09</Text>
                                <Text fontSize='30px' color='#fff'>Holiday Homes</Text>
                            </Box>
                        </Box>
                        <Box position='relative' w='266px' h='409px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-10.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>11</Text>
                                <Text fontSize='30px' color='#fff'>Eco-friendly Properties</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box h='max-content' display='flex' flexDirection='column' rowGap='8px'>
                    <Box position='relative' w='266px' h='409px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-10.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>05</Text>
                                <Text fontSize='30px' color='#fff'>Golf Course Residences</Text>
                            </Box>
                        </Box>
                        <Box position='relative' w='266px' h='266px' bgColor='#cccccc' borderRadius='18px' overflow='hidden'>
                            <Image src='/property/box-image-12.png'  objectFit='cover'/>
                            <Box position='absolute' top='15px' right='15px' boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                _hover={{transform: 'translateX(3px) translateY(-3px)'}}/>
                            </Box>
                            <Box position='absolute' bottom='15px' left='15px' right='15px' textAlign='left'>
                                <Text fontSize='16px' color='#fff'>12</Text>
                                <Text fontSize='30px' color='#fff'>Desert Retreats</Text>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
      </div>
    );
  }
  

export default PropertySection;


{/* <Box p={4}>
        <Text fontSize="2xl" mb={4}>Discover Your Ideal Property Type</Text>
        <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
          {properties.map((property) => (
            <GridItem key={property.id} w="100%" boxShadow="md">
              <VStack>
                <Image src={property.imageUrl} alt={property.title} />
                <Text>{property.title}</Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box> */}