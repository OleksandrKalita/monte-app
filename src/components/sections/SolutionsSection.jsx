import AnimationText from "@/hooks/AnimationText";
import { Box, Image, Text, HStack, VStack, Circle, useMediaQuery} from "@chakra-ui/react"
import Marquee from "react-fast-marquee";

function SolutionsSection() {
    const [isSmallScreen] = useMediaQuery('(max-width: 1137px)');

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

                <Box w='100%' display='flex'>
                    <Box w='50%' display='flex' flexDirection='column' rowGap='30px'>
                        <AnimationText style={{fontSize: '58px', color: '#fff', fontWeight: '500'}} lines={['Tailored Solutions', 'for Your Real Estate', 'Needs']}/>
                        <Box display='flex' columnGap='12px' alignItems='center' cursor='pointer' transition='all 0.4s'
                            _hover={{columnGap: '20px'}}>
                            <Box bgColor='#D5E7EE' boxSize='12px' borderRadius='50%'></Box>
                            <Box display='flex' columnGap='5px' alignItems='center'>
                                <Text fontSize='16px' color='#D5E7EE'>Expolre More</Text>
                                <Image src='/color-arrow.svg' width='15px' height='15px'/>
                            </Box>
                        </Box>
                    </Box>
                    <Box w='50%' display='flex' flexDirection='column' rowGap='30px'>

                        <Box w='100%' h='120px' bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                            <Image src='48634.svg' />
                            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box position='relative' mt='-8px' pt='8px' pr='17px'>
                                    <Text fontSize='28px' fontWeight='500' color='#000'>Property Sales</Text>
                                    <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>01</Text>
                                </Box>
                                {/* <AnimationText style={{fontSize: '28px', fontWeight: '500', color: '#000'}} lines={['Property Sales']}/> */}
                                <Box boxSize='78px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr='20px'
                                    _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                    <Image src='arrow-icon.svg' width='60px' height='60px' transform='rotate(135deg)'/>
                                </Box>
                            </Box>
                        </Box>

                        <Box w='100%' h='120px' bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                            <Image src='48635.svg' />
                            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box position='relative' mt='-8px' pt='8px' pr='17px'>
                                    <Text fontSize='28px' fontWeight='500' color='#000'>Property Management</Text>
                                    <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>02</Text>
                                </Box>
                                {/* <AnimationText style={{fontSize: '28px', fontWeight: '500', color: '#000'}} lines={['Property Sales']}/> */}
                                <Box boxSize='78px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr='20px'
                                    _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                    <Image src='arrow-icon.svg' width='60px' height='60px' transform='rotate(135deg)'/>
                                </Box>
                            </Box>
                        </Box>

                        <Box w='100%' h='120px' bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                            <Image src='48636.svg' />
                            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box position='relative' mt='-8px' pt='8px' pr='17px'>
                                    <Text fontSize='28px' fontWeight='500' color='#000'>Investment Consultation</Text>
                                    <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>03</Text>
                                </Box>
                                {/* <AnimationText style={{fontSize: '28px', fontWeight: '500', color: '#000'}} lines={['Property Sales']}/> */}
                                <Box boxSize='78px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr='20px'
                                    _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                    <Image src='arrow-icon.svg' width='60px' height='60px' transform='rotate(135deg)'/>
                                </Box>
                            </Box>
                        </Box>

                        <Box w='100%' h='120px' bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                            <Image src='48637.svg' />
                            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box position='relative' mt='-8px' pt='8px' pr='17px'>
                                    <Text fontSize='28px' fontWeight='500' color='#000'>Market Analysis</Text>
                                    <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>04</Text>
                                </Box>
                                {/* <AnimationText style={{fontSize: '28px', fontWeight: '500', color: '#000'}} lines={['Property Sales']}/> */}
                                <Box boxSize='78px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr='20px'
                                    _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                    <Image src='arrow-icon.svg' width='60px' height='60px' transform='rotate(135deg)'/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

            <Box pt='80px' pb='180px'>
                <Marquee style={{position: 'absolute', zIndex: 2}} speed={120}>
                    <Box h='120px' bgColor='#575757' fontSize='82px' color='#232323' mx='20px' px='30px' borderRadius='80px'>Payment from Almaty</Box>
                    <Box h='120px' bgColor='#575757' fontSize='82px' color='#232323' mx='20px' px='30px' borderRadius='80px'>0% Commission</Box>
                    <Box h='120px' bgColor='#575757' fontSize='82px' color='#232323' mx='20px' px='30px' borderRadius='80px'>Remote Purchase</Box>
                </Marquee>
            </Box>

            <Box maxW='1400px' px='20px' py='30px' mx='auto'>

                <Box w='100%' display='flex' flexDirection='column' rowGap='80px' alignItems='center' pb='50px'>
                    <AnimationText style={{color: '#fff', fontSize: '56px' }} lines={['Path to Smart Ownership']}/>
                    
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