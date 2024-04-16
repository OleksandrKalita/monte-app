import AnimationText from "@/components/AnimationText/AnimationText";
import { Box, Image, Text, HStack, VStack, Circle, useMediaQuery, useBreakpointValue} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function SolutionsSection() {
    const [isSmallScreen] = useMediaQuery('(max-width: 1137px)');

    const [isMobile, setMobile] = useState(false);
    const isMob = useBreakpointValue({ base: true, lg: false });
    useEffect(() => {
        setMobile(isMob);
    }, [isMob]);

    // Рендер круга з текстом
    const renderCircle = (text, index, isLast) => {
      const offset = isSmallScreen ? index * 260 : index * 340; // зміщення
      return (
        <Circle
          size={isSmallScreen ? '400px' : '412px'}
          border="2px solid white"
          position={!isLast ? 'absolute' : 'relative'} // останній круг має бути відносним, щоб контейнер розтягувався
          left={!isSmallScreen && index !== 0 ? `${offset}px` : undefined}
          top={isSmallScreen && index !== 0 ? `${offset}px` : undefined}
          zIndex={isLast ? 1 : 0} // останній круг повинен бути зверху, щоб текст був видимим
        >
          <Text color="white" fontSize="lg" p={4}>
            {text}
          </Text>
        </Circle>
      );
    };
      
    return (
        <Box w='100%'  bgColor='#232323'>
            <Box maxW='1400px' px='20px' py='100px' mx='auto'>

                <Box w='100%' display='flex' flexDirection={{base: 'column', lg: 'row'}}>
                    <Box w={{base: '100%', lg: '50%'}} display='flex' flexDirection='column' rowGap='30px'>
                        {isMobile ? <AnimationText style={{fontSize: '38px', color: '#fff', fontWeight: '500'}} lines={['Tailored Solutions', 'for Your Real Estate', 'Needs']}/> : 
                        <AnimationText style={{fontSize: '58px', color: '#fff', fontWeight: '500'}} lines={['Tailored Solutions', 'for Your Real Estate', 'Needs']}/>}
                        <Box display='flex' columnGap='12px' alignItems='center' cursor='pointer' transition='all 0.4s'
                            _hover={{columnGap: '20px'}}>
                            <Box bgColor='#D5E7EE' boxSize='12px' borderRadius='50%'></Box>
                            <Box display='flex' columnGap='5px' alignItems='center'>
                                <Text fontSize='16px' color='#D5E7EE'>Expolre More</Text>
                                <Image src='/color-arrow.svg' width='15px' height='15px'/>
                            </Box>
                        </Box>
                    </Box>
                    <Box w={{base: '100%', lg: '50%'}} display='flex' flexDirection='column' rowGap='30px' pt={{base: '30px', lg: '0px'}}>

                        <Box w='100%' h={{base: '100px', lg: '120px'}} bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                            <Image src='48634.svg' boxSize={{base: '76px', lg: '100px'}} />
                            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box position='relative' mt='-8px' pt={{base: '3', lg: '8px'}} pr={{base: '10px', lg: '17px'}}>
                                    <Text fontSize={{base: '18px', lg: '28px'}} fontWeight='500' color='#000'>Property Sales</Text>
                                    <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>01</Text>
                                </Box>
                                <Box boxSize={{base: '56px', lg: '78px'}} bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr={{base: '10px',lg: '20px'}}
                                    _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                    <Image src='arrow-icon.svg' boxSize={{base: '40px', lg: '60px'}} transform='rotate(135deg)'/>
                                </Box>
                            </Box>
                        </Box>

                        <Box w='100%' h={{base: '100px', lg: '120px'}} bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                            <Image src='48635.svg' boxSize={{base: '76px', lg: '100px'}} />
                            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box position='relative' mt='-8px' pt={{base: '3', lg: '8px'}} pr={{base: '10px', lg: '17px'}}>
                                    <Text fontSize={{base: '18px', lg: '28px'}} fontWeight='500' color='#000'>Property Management</Text>
                                    <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>02</Text>
                                </Box>
                                <Box boxSize={{base: '56px', lg: '78px'}} bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr={{base: '10px',lg: '20px'}}
                                    _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                    <Image src='arrow-icon.svg' boxSize={{base: '40px', lg: '60px'}} transform='rotate(135deg)'/>
                                </Box>
                            </Box>
                        </Box>

                        <Box w='100%' h={{base: '100px', lg: '120px'}} bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                            <Image src='48636.svg' boxSize={{base: '76px', lg: '100px'}} />
                            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box position='relative' mt='-8px' pt={{base: '3', lg: '8px'}} pr={{base: '10px', lg: '17px'}}>
                                    <Text fontSize={{base: '18px', lg: '28px'}} fontWeight='500' color='#000'>Investment Consultation</Text>
                                    <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>03</Text>
                                </Box>
                                <Box boxSize={{base: '56px', lg: '78px'}} bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr={{base: '10px',lg: '20px'}}
                                    _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                    <Image src='arrow-icon.svg' boxSize={{base: '40px', lg: '60px'}} transform='rotate(135deg)'/>
                                </Box>
                            </Box>
                        </Box>

                        <Box w='100%' h={{base: '100px', lg: '120px'}} bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                            <Image src='48637.svg' boxSize={{base: '76px', lg: '100px'}} />
                            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box position='relative' mt='-8px' pt={{base: '3', lg: '8px'}} pr={{base: '10px', lg: '17px'}}>
                                    <Text fontSize={{base: '18px', lg: '28px'}} fontWeight='500' color='#000'>Market Analysis</Text>
                                    <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>04</Text>
                                </Box>
                                <Box boxSize={{base: '56px', lg: '78px'}} bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr={{base: '10px',lg: '20px'}}
                                    _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                    <Image src='arrow-icon.svg' boxSize={{base: '40px', lg: '60px'}} transform='rotate(135deg)'/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

            <Box  pb={{base: '140px',lg: '180px'}}>
                <Marquee style={{position: 'absolute', zIndex: 2}} speed={120}>
                    <Box h={{base: '85px', lg: '120px'}} bgColor='#575757' fontSize={{base: '56px', lg: '82px'}} color='#232323' mx='20px' px='30px' borderRadius='80px'>Payment from Almaty</Box>
                    <Box h={{base: '85px', lg: '120px'}}bgColor='#575757' fontSize={{base: '56px', lg: '82px'}} color='#232323' mx='20px' px='30px' borderRadius='80px'>0% Commission</Box>
                    <Box h={{base: '85px', lg: '120px'}} bgColor='#575757' fontSize={{base: '56px', lg: '82px'}} color='#232323' mx='20px' px='30px' borderRadius='80px'>Remote Purchase</Box>
                </Marquee>
            </Box>

            <Box maxW='1400px' px='20px' py='30px' mx='auto'>

                <Box w='100%' display='flex' flexDirection='column' rowGap='80px' alignItems='center' pb='50px'>
                    {isMobile ? <AnimationText style={{color: '#fff', fontSize: '36px', textAlign: 'center' }} lines={['Path to Smart Ownership']}/> : 
                    <AnimationText style={{color: '#fff', fontSize: '56px' }} lines={['Path to Smart Ownership']}/>}
                    
                    <Box position="relative" h={isSmallScreen ? '850px' : 'full'} w={isSmallScreen ? '360px' : '1091px'} mx='auto'>
                        {isSmallScreen ? (
                            <VStack spacing={0}>
                            {['10% Initial Payment', '5 years installment, 0% overpayment', 'Rental income ~ 15%'].map((text, index, arr) =>
                                renderCircle(text, index, index === arr.length - 1)
                            )}
                            </VStack>
                        ) : (
                            <HStack spacing={0}>
                            {['10% Initial Payment', '5 years installment, 0% overpayment', 'Rental income ~ 15%'].map((text, index, arr) =>
                                renderCircle(text, index, index === arr.length - 1)
                            )}
                            </HStack>
                        )}
                    </Box>

                    <Box h='45px' bgColor='#393939' borderRadius='80px' py='4px' pl='4px' pr='20px' display='flex' columnGap='10px' textAlign='center' cursor='pointer' mt='30px'>
                            <Box h='37px' w='37px' alignContent='center' bgColor='#fff' borderRadius='50%' >
                                <Image src='/download-icon.svg' width="22px" height='22px' ml='7px'/>
                            </Box>
                        <Text color='#fff' fontSize='18px' fontWeight={500} pt='5px'>Contact Us Now</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SolutionsSection;