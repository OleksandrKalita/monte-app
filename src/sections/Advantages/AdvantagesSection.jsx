import SepecialAnimationComponents from "@/components/SepecialAnimationComponents/SepecialAnimationComponents";
import AnimationText from "../../components/AnimationText/AnimationText";

const { Box, Text, Image } = require("@chakra-ui/react");

function AdvantagesSection() {
    return(
        <Box w='100%' bgColor='#fff'>
            <Box maxW='1400px' px='20px' py='100px' mx='auto'>
                <Box display='flex' columnGap='12px' alignItems='center' cursor='pointer' transition='all 0.4s'
                    _hover={{columnGap: '20px'}}>
                    <Box bgColor='#000' boxSize='12px' borderRadius='50%'></Box>
                    <Box display='flex' columnGap='5px' alignItems='center'>
                        <Text fontSize='16px' color='#000'>Explore Our Advantages</Text>
                    </Box>
                </Box>
                <AnimationText style={{fontSize: '56px', color: '#000', fontWeight: '500'}} lines={['Why Dubai Stands', 'Unrivalled?']}/>
                <Box w='100%' display='flex' columnGap='40px' flexWrap='wrap' rowGap='95px' pt='100px'>
                    <Box display='flex' flexDirection='column' rowGap='60px'>
                        <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box maxW='302px' minW='220px' p='3px' h='302px'>
                                    <Image src='/advantages-images/diversity-icon.svg' />
                                    <Text fontSize='24px' fontWeight='600' color='#000' pt='16px'>Diversity</Text>
                                    <Text maxW='302px' minW='220px' fontSize='16px' color='rgba(14,14,14,0.5)' pt='20px'>Approximately 90% of Dubai's population consists of foreigners, reflecting its rich multicultural environment and tolerant attitude towards all.</Text>
                                </Box>
                        )}/>
                        <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box maxW='302px' minW='220px' p='3px' h='302px'>
                                    <Image src='/advantages-images/tax-icon.svg' />
                                    <Text fontSize='24px' fontWeight='600' color='#000' pt='16px'>Profit Tax Exemption for Residents</Text>
                                    <Text fontSize='16px' color='rgba(14,14,14,0.5)' pt='20px'>This includes income from rental properties, offering attractive incentives for property owners and investors.</Text>
                                </Box>
                        )}/>
                    </Box>


                    <Box display='flex' flexDirection='column' rowGap='60px'>
                        <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box maxW='302px' minW='220px' p='3px' h='302px'>
                                    <Image src='/advantages-images/sefaty-icon.svg' />
                                    <Text fontSize='24px' fontWeight='600' color='#000' pt='16px'>Sefaty</Text>
                                    <Text maxW='302px' minW='220px' fontSize='16px' color='rgba(14,14,14,0.5)' pt='20px'>Dubai consistently leads global rankings as one of the safest cities worldwide. The Emirates also secured the second position among the safest countries on the planet, according to Global Finance.</Text>
                                </Box>
                            )}/>
                        <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box maxW='302px' minW='220px' p='3px' h='302px'>
                                    <Image src='/advantages-images/rate-icon.svg' />
                                    <Text fontSize='24px' fontWeight='600' color='#000' pt='16px'>Low Mortgage Rates</Text>
                                    <Text maxW='302px' minW='220px' fontSize='16px' color='rgba(14,14,14,0.5)' pt='20px'>For non-residents, mortgage rates stand at an appealing 5–7%, providing accessible financing options for property purchases.</Text>
                                </Box>
                            )}/>
                    </Box>

                    <Box display='flex' flexDirection='column' rowGap='60px'>
                        <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box maxW='302px' minW='220px' p='3px' h='302px'>
                                    <Image src='/advantages-images/currancy-icon.svg' />
                                    <Text fontSize='24px' fontWeight='600' color='#000' pt='16px'>Stable Currency</Text>
                                    <Text maxW='302px' minW='220px' fontSize='16px' color='rgba(14,14,14,0.5)' pt='20px'>The dirham's exchange rate has been firmly pegged to the dollar for over 20 years, ensuring stability and confidence in financial transactions.</Text>
                                </Box>
                            )}/>
                        <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box maxW='302px' minW='220px' p='3px' h='302px'>
                                    <Image src='/advantages-images/property-icon.svg' />
                                    <Text fontSize='24px' fontWeight='600' color='#000' pt='16px'>Remote Property Acquisition</Text>
                                    <Text maxW='302px' minW='220px' fontSize='16px' color='rgba(14,14,14,0.5)' pt='20px'>Reach out to us, and we'll assist you in selecting a worthy property while handling all transaction formalities. Moreover, with 0% commission, our services are compensated directly by developers.</Text>
                                </Box>
                            )}/>
                    </Box>

                    <Box display='flex' flexDirection='column' rowGap='60px'>
                    <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box maxW='302px' minW='220px' p='3px' h='302px'>
                                    <Image src='/advantages-images/opportunities-icon.svg' />
                                    <Text fontSize='24px' fontWeight='600' color='#000' pt='16px'>Resident Visa Opportunities</Text>
                                    <Text maxW='302px' minW='220px' fontSize='16px' color='rgba(14,14,14,0.5)' pt='20px'>Investing in real estate (starting from AED 750,000 or USD 204,000) offers the possibility of obtaining a resident visa.</Text>
                                </Box>
                            )}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default AdvantagesSection;