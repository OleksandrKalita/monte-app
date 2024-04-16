import AnimationComponent from "@/components/AnimationComponent/AnimationComponent";
import AnimationText from "@/components/AnimationText/AnimationText";
import SepecialAnimationComponents from "@/components/SepecialAnimationComponents/SepecialAnimationComponents";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ApartmentsPortfolio from "./ApartmentsPortfolio";
import VilasPortfolio from "./VilasPortfolio";
import RentPortfolio from "./RentPortfolio";

const { Box, Text, Stack, Image, useBreakpointValue, Grid, Link } = require("@chakra-ui/react");

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
            <Box maxW='1400px' m='auto' py={{base: '80px', lg: '100px'}} px='20px' textAlign={'center'}>
                <Box display='flex' flexDirection={{base: 'column', lg: 'row'}} justifyContent='space-between'>
                    <Text fontSize={{base: '36px', lg: '56px'}} color='#FFF'>Explore Our Property Portfolio</Text>
                    <Box minW={{base: '353px', lg: '330px'}}  h='50px' bgColor='#393939' borderRadius='8px' p='4px' mx={{base: 'auto', lg: '0px'}} my={{base: '40px', lg: 'auto'}}>
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
                
                {
                    numPortfolio === 1 && <ApartmentsPortfolio/> || numPortfolio === 2 && <VilasPortfolio/> || numPortfolio === 3 && <RentPortfolio/>
                }
                

                <Box pt='50px' display='flex' flexDirection={{base: 'column', lg: 'row'}} columnGap='30px' rowGap='30px' justifyContent='end' w={'100%'} alignItems={{base: 'center', lg: 'normalize'}}>
                    <Box  mr={{base: '0px', lg: '180px'}} w='142px' h='45px' fontSize='18px' borderRadius='80px' bgColor='#D5E7EE' textAlign='center' pt='8px' _hover={{bgColor: '#9aa9af'}}>All Properties</Box>
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