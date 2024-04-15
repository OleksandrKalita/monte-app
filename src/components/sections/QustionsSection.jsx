import React from "react";
import AnimationText from "@/hooks/AnimationText";
import { useState } from "react";

const { Box, Text, Image } = require("@chakra-ui/react");
function QuestionsSection() {

    return(
        <Box w='100%' bgColor='#F8F5F2'>
            <Box maxW='1400px' px='20px' py='100px' mx='auto' display='flex' >
                <Box w='50%'>
                    <Box display='flex' columnGap='12px' alignItems='center' cursor='pointer' transition='all 0.4s'
                        _hover={{columnGap: '20px'}}>
                        <Box bgColor='#000' boxSize='12px' borderRadius='50%'></Box>
                        <Box display='flex' columnGap='5px' alignItems='center'>
                            <Text fontSize='16px' color='#000'>Explore Our Advantages</Text>
                        </Box>
                    </Box>
                    <AnimationText style={{fontSize: '56px', color: '#000', fontWeight: '500'}} lines={['Frequent Asked', 'Questions']}/>
                    <AnimationText style={{fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)'}} lines={['At Monte, we offer more than just real estate', 'services; we provide an unparalleled experience', 'tailored to meet your needs and exceed your', 'expectations.']} />
                </Box>
                <Box w='50%' display='flex' columnGap='40px' flexWrap='wrap' rowGap='95px'  position='relative'>
                    
                    <Box  bgColor='#fff' borderRadius='20px' px='20px' py='50px'>
                        <Box borderTop='1px solid rgba(0, 0, 0, 0.2)' borderBottom='1px solid rgba(0, 0, 0, 0.2)' display='flex' justifyContent='space-between' columnGap='10px' alignItems='center' transition='all 0.4s'>
                            <Text fontSize='20px' color='#000' py='25px' >What types of properties do we offer in Dubai?</Text>
                            <Box boxSize='52px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' 
                                _hover={{bgColor: '#D5E7EE'}}>
                                <Image src='plus-icon.svg' width='35px' height='35px' pt='16px' pl='16px'/>
                            </Box>
                        </Box>

                        <Box borderTop='1px solid rgba(0, 0, 0, 0.2)' borderBottom='1px solid rgba(0, 0, 0, 0.2)' display='flex'   alignItems='center' transition='all 0.4s' mt='-1px'>
                            <Text fontSize='20px' color='#000' py='25px' flex='1 1 auto' >What are the payment options available for purchasing a property?</Text>
                            <Box boxSize='52px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' 
                                _hover={{bgColor: '#D5E7EE'}}>
                                <Image src='plus-icon.svg' width='35px' height='35px' pt='16px' pl='16px'/>
                            </Box>
                        </Box>

                        <Box borderTop='1px solid rgba(0, 0, 0, 0.2)' borderBottom='1px solid rgba(0, 0, 0, 0.2)' display='flex'   alignItems='center' transition='all 0.4s' mt='-1px'>
                            <Text fontSize='20px' color='#000' py='25px' flex='1 1 auto' >Can foreign nationals buy property in Dubai?</Text>
                            <Box boxSize='52px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' 
                                _hover={{bgColor: '#D5E7EE'}}>
                                <Image src='plus-icon.svg' width='35px' height='35px' pt='16px' pl='16px'/>
                            </Box>
                        </Box>

                        <Box borderTop='1px solid rgba(0, 0, 0, 0.2)' borderBottom='1px solid rgba(0, 0, 0, 0.2)' display='flex'   alignItems='center' transition='all 0.4s' mt='-1px'>
                            <Text fontSize='20px' color='#000' py='25px' >What is the process for obtaining a residency visa through property investment?</Text>
                            <Box boxSize='52px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' 
                                _hover={{bgColor: '#D5E7EE'}}>
                                <Image src='plus-icon.svg' width='35px' height='35px' pt='16px' pl='16px'/>
                            </Box>
                        </Box>

                        <Box borderTop='1px solid rgba(0, 0, 0, 0.2)' borderBottom='1px solid rgba(0, 0, 0, 0.2)' display='flex'   alignItems='center' transition='all 0.4s' mt='-1px'>
                            <Text fontSize='20px' color='#000' py='25px' flex='1 1 auto' >Are there any additional costs associated with property ownership in Dubai?</Text>
                            <Box boxSize='52px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' 
                                _hover={{bgColor: '#D5E7EE'}}>
                                <Image src='plus-icon.svg' width='35px' height='35px' pt='16px' pl='16px'/>
                            </Box>
                        </Box>

                        <Box borderTop='1px solid rgba(0, 0, 0, 0.2)' borderBottom='1px solid rgba(0, 0, 0, 0.2)' display='flex'   alignItems='center' transition='all 0.4s' mt='-1px'>
                            <Text fontSize='20px' color='#000' py='25px' flex='1 1 auto' >Do we offer property management services for rental properties?</Text>
                            <Box boxSize='52px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' 
                                _hover={{bgColor: '#D5E7EE'}}>
                                <Image src='plus-icon.svg' width='35px' height='35px' pt='16px' pl='16px'/>
                            </Box>
                        </Box>

                        <Box borderTop='1px solid rgba(0, 0, 0, 0.2)' borderBottom='1px solid rgba(0, 0, 0, 0.2)' display='flex'   alignItems='center' transition='all 0.4s' mt='-1px'>
                            <Text fontSize='20px' color='#000' py='25px' flex='1 1 auto' >Can we assist with property financing for non-resident buyers?</Text>
                            <Box boxSize='52px' bgColor='#fff' borderRadius='50%' transition='all 0.4s' 
                                _hover={{bgColor: '#D5E7EE'}}>
                                <Image src='plus-icon.svg' width='35px' height='35px' pt='16px' pl='16px'/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default QuestionsSection;