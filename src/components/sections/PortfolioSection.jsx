import AnimationComponent from "@/hooks/AnimationComponent";
import AnimationText from "@/hooks/AnimationText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const { Box, Text, Stack, Image } = require("@chakra-ui/react");

function PortfolioSection() {
    const [numPortfolio, setNumPortfolio] = useState(1);

    useGSAP(() => {
        gsap.fromTo('.svg-image', 
            { y: 100, autoAlpha: 0, scale: 0.5 },
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
            });
        gsap.fromTo('.def-animation-delay', 
            { y: 100, autoAlpha: 0, scale: 0.5},
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 1.5,
              delay: 1,
              ease: 'power3.out',
            });
    }, [])

    const ref = useRef();
    const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target.querySelectorAll('.animate-block'),
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay }
            );
            observer.current.unobserve(entry.target); // Опціонально, щоб анімація не повторювалася
          }
        });
      },
      { threshold: 0.5 } // Тут можна налаштувати, наскільки елемент має бути видимий, щоб спрацювала анімація
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

    return (
        <Box w='100vw' bgColor='#232323'>
            <Box maxW='1400px' m='auto' py='100px' px='20px'>
                <Box display='flex' justifyContent='space-between'>
                    <Text fontSize='56px' color='#FFF'>Explore Our Property Portfolio</Text>
                    <Box w='330px' h='50px' bgColor='#393939' borderRadius='8px' p='4px'>
                        <Stack boxSize='100%' display='flex' flexDirection='row'>
                            <Box width='33.333%' alignContent='center' textAlign='center' borderRadius='8px' cursor='pointer' transition='all 0.5s'
                                bgColor={numPortfolio === 1 && '#fff'}
                                color={numPortfolio === 1 ? '#393939' : '#fff'}
                                _hover={{bgColor: numPortfolio === 1 ? '#c0c0c0' : '#454444' }}
                                onClick={() => setNumPortfolio(1)}
                                >Apartments
                            </Box>
                            <Box width='33.333%' alignContent='center' textAlign='center' borderRadius='8px' cursor='pointer' transition='all 0.5s'
                                bgColor={numPortfolio === 2 && '#fff'}
                                color={numPortfolio === 2 ? '#393939' : '#fff'}
                                _hover={{bgColor: numPortfolio === 2 ? '#c0c0c0' : '#454444' }}
                                onClick={() => setNumPortfolio(2)}
                                >Villas
                            </Box>
                            <Box width='33.333%' alignContent='center' textAlign='center' borderRadius='8px' cursor='pointer' transition='all 0.5s'
                                bgColor={numPortfolio === 3 && '#fff'}
                                color={numPortfolio === 3 ? '#393939' : '#fff'}
                                _hover={{bgColor: numPortfolio === 3 ? '#c0c0c0' : '#454444' }}
                                onClick={() => setNumPortfolio(3)}
                                >For Rent
                            </Box>
                        </Stack>
                    </Box>
                </Box>

                <Box display='flex' flexDirection='column' rowGap='40px' pt='100px'>
                    <Box display='flex' justifyContent='space-between'>
                        <Box  className="animate-block" h='714px' w='660px'  position='relative' overflow='hidden' borderRadius='30px'>
                            <Image src='/portfolio-images/port-image-1.svg' width='100%' height='100%'/>
                            <Box position='absolute' top={0} left={0} zIndex={2} w='100%' h='100%' p='40px'>
                                <Box position='relative' width='100%' height='100%'>
                                    <AnimationText lines={['Azure Heights', 'Luxury Residences']} style={{fontSize:'22px',color:'#fff'}} delay={0.2}/>
                                    <Box position='absolute' top={0} right={0} boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                        <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                        _hover={{
                                            transform: 'translateX(3px) translateY(-3px)'
                                          }}/>
                                    </Box>
                                    <Box position='absolute' bottom={0} width='100%' display='flex' flexDirection='column' rowGap='10px'>
                                        <Box display='flex'>
                                            <Box  flex='1 1 auto'></Box>
                                            <Box display='flex' columnGap='10px' width='169px' py='18px' px='12px' bgColor='#D5E7EE' borderRadius='18px'>
                                                <Image src="/map-pointer.svg" width='22px' height='22px'/>
                                                <Text fontSize='16px' color='#2E2F30'>Dubai Marina</Text>
                                            </Box>
                                        </Box>
                                        <Box display='flex' justifyContent='space-between'>
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
                                </Box>
                            </Box>
                        </Box>

                        <Box h='714px' w='660px'  position='relative' overflow='hidden' borderRadius='30px'>
                            <Image src='/portfolio-images/port-image-2.svg' width='100%' height='100%'/>
                            <Box position='absolute' top={0} left={0} zIndex={2} w='100%' h='100%' p='40px'>
                                <Box position='relative' width='100%' height='100%'>
                                    <Box position='absolute' top={0} right={0} boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                        <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                        _hover={{
                                            transform: 'translateX(3px) translateY(-3px)'
                                          }}/>
                                    </Box>
                                    <Box position='absolute' bottom={0} width='100%' display='flex' flexDirection='column' rowGap='10px'>
                                        <Text fontSize='22px' color='#fff' fontWeight='800'>Azure Heights Luxury Residences</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='space-between'>
                        <Box h='714px' w='660px'  position='relative' overflow='hidden' borderRadius='30px'>
                            <Image src='/portfolio-images/port-image-3.svg' width='100%' height='100%'/>
                            <Box position='absolute' top={0} left={0} zIndex={2} w='100%' h='100%' p='40px'>
                                <Box position='relative' width='100%' height='100%'>
                                    <Box position='absolute' top={0} right={0} boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                        <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                        _hover={{
                                            transform: 'translateX(3px) translateY(-3px)'
                                          }}/>
                                    </Box>
                                    <Box position='absolute' bottom={0} width='100%' display='flex' flexDirection='column' rowGap='10px'>
                                        <Text fontSize='22px' color='#fff' fontWeight='800'>Azure Heights Luxury Residences</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box h='714px' w='660px'  position='relative' overflow='hidden' borderRadius='30px'>
                            <Image src='/portfolio-images/port-image-4.svg' width='100%' height='100%'/>
                            <Box position='absolute' top={0} left={0} zIndex={2} w='100%' h='100%' p='40px'>
                                <Box position='relative' width='100%' height='100%'>
                                    <Box position='absolute' top={0} right={0} boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                        <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                        _hover={{
                                            transform: 'translateX(3px) translateY(-3px)'
                                          }}/>
                                    </Box>
                                    <Box position='absolute' bottom={0} width='100%' display='flex' flexDirection='column' rowGap='10px'>
                                        <Text fontSize='22px' color='#fff' fontWeight='800'>Azure Heights Luxury Residences</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>


                    <Box display='flex' justifyContent='space-between'>
                        <Box h='714px' w='660px'  position='relative' overflow='hidden' borderRadius='30px'>
                            <Image src='/portfolio-images/port-image-5.svg' width='100%' height='100%'/>
                            <Box position='absolute' top={0} left={0} zIndex={2} w='100%' h='100%' p='40px'>
                                <Box position='relative' width='100%' height='100%'>
                                    <Box position='absolute' top={0} right={0} boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                        <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                        _hover={{
                                            transform: 'translateX(3px) translateY(-3px)'
                                          }}/>
                                    </Box>
                                    <Box position='absolute' bottom={0} width='100%' display='flex' flexDirection='column' rowGap='10px'>
                                        <Text fontSize='22px' color='#fff' fontWeight='800'>Azure Heights Luxury Residences</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box h='714px' w='660px'  position='relative' overflow='hidden' borderRadius='30px'>
                            <Image src='/portfolio-images/port-image-6.svg' width='100%' height='100%'/>
                            <Box position='absolute' top={0} left={0} zIndex={2} w='100%' h='100%' p='40px'>
                                <Box position='relative' width='100%' height='100%'>
                                    <Box bgColor='#fff' w='173px' h='52px' borderRadius='80px' fontSize='18px' textAlign='center' pt='12px' transition='all 0.4s'
                                    _hover={{bgColor: '#c0c0c0'}}>Find On The Map</Box>
                                    <Box position='absolute' top={0} right={0} boxSize='52px' borderRadius='50%' bgColor='#fff' textAlign='center'>
                                        <Image src="/arrow-icon.svg" width='38px' height='38px' mt='16px' ml='6px' transition='all 0.4s'
                                        _hover={{
                                            transform: 'translateX(3px) translateY(-3px)'
                                          }}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box pt='50px' display='flex' columnGap='30px' justifyContent='end'>
                <Box  mr='180px' w='142px' h='45px' fontSize='18px' borderRadius='80px' bgColor='#D5E7EE' textAlign='center' pt='8px' _hover={{bgColor: '#9aa9af'}}>All Properties</Box>
                    <Box color='#fff'>Don't Miss Out on Hot Deals!<br/>Follow Us on Social Media</Box>
                    <Box display='flex' columnGap='10px'>
                        <AnimationComponent delay={0.2} Component={() => (
                            <Box boxSize='45px' bgColor='#393939' borderRadius='8px' alignContent='center' transition='all 0.4s'
                                _hover={{bgColor: '#4d4c4c'}}>
                                <Image src='/soc-2.svg' pl='10px'/>
                            </Box>
                        )}/>
                        <AnimationComponent delay={0.4} Component={() => (
                            <Box boxSize='45px' bgColor='#393939' borderRadius='8px' alignContent='center' transition='all 0.4s'
                                _hover={{bgColor: '#4d4c4c'}}>
                                <Image src='/soc-3.svg' pl='12px'/>
                            </Box>
                        )}/>
                        <AnimationComponent delay={0.6} Component={() => (
                            <Box boxSize='45px' bgColor='#393939' borderRadius='8px' alignContent='center' transition='all 0.4s'
                                _hover={{bgColor: '#4d4c4c'}}>
                                <Image src='/soc-1.svg' pl='14px'/>
                            </Box>
                        )}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default PortfolioSection;