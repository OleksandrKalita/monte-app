import { Box, Button, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AnimationText from "@/hooks/AnimationText";
import ImageSlider from "@/hooks/ImageSlider";
import { useEffect, useState } from "react";

const HomeSection = () => {
    const [imageUrl, setImageUrl] = useState('/main-image-1.svg');
    const images = [
        '/main-image-1.svg',
        '/main-image-2.svg',
        '/main-image-3.svg',
    ];
    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length; // Циклічно перебирає індекси масиву
          setImageUrl(images[currentIndex]); // Оновлення URL зображення
        }, 10000); // Змінює зображення кожні 10 секунд
    
        return () => clearInterval(intervalId); // Очищення інтервалу при знищенні компоненту
      }, []); // Пустий масив залежностей, щоб ефект запускався лише один раз

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
    return(
        <Box w='100%' h='900px' bg='#FFFFFF' >
            <Box className='container' display='flex' maxW='1400px' h='900px' mx='auto' px='20px'>
                <Box className="left-box" w='50%'>
                    <Box pt='40px' pb='27px' pr='40px' h='900px' display='flex' flexDirection='column'>
                        <Box className="box__header" display='flex' justifyContent='space-between' alignContent='center'>
                            <Image className="svg-image" src='/header_logo_image.svg' width={128.33} height={44} />
                            <Box className="header_button-block" display='flex' columnGap='8px'>
                                <Box className="svg-image" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' textAlign='center' alignContent='center' 
                                    _hover={{bgColor: '#e4e4e4'}}>
                                    <Image src='/map-icon.svg' width={19.8} height={18} />
                                </Box>
                                <Box className="svg-image" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' textAlign='center' alignContent='center' 
                                    _hover={{bgColor: '#e4e4e4'}}>
                                    <Image src='/menu-icon.svg' width={19.8} height={18} />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="box_text" flex='1 1 auto' color='#000' textAlign='center' px='80px' pt='220px'>
                            <AnimationText lines={['Building Your Dreams']} style={{color: '#000', fontSize: '18px'}} />
                            <AnimationText lines={['Real Estate in Dubai:', 'Ideal for Living', 'and Investing']} style={{color: '#000', fontSize: '56px'}} delay={0.5} />
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Button  h='45px' bgColor='#141414' borderRadius='80px' border='none'>
                                <Box className="button-icon" boxSize='37px' borderRadius='50%' bgColor='#D5E7EE' alignContent='center' pt='12px' ml='4px'>
                                    <Image  src='/phone-icon.svg' width={30} height={30} />
                                </Box>
                                <Box className="button-text" pl='10px' pr='20px'>
                                    Contact Us Now
                                </Box>
                            </Button>
                            <Box display='flex' columnGap='15px' alignItems='center'>
                                <AnimationText lines={['Explore All', 'Our Properties']} style={{color: '#000', fontSize: '14px'}} delay={0.2}/>
                                <Box position='relative'>
                                    <Image src='/elipse-home.svg' width={70} height={70} />
                                    <Box position='absolute' top={0} right={0} w={23} h={23} bgColor='#D5E7EE' borderRadius='50%'>
                                        <Box w='100%' h='100%' textAlign='center' pt='6px'>
                                            <Image src='/arrow-icon.svg' width={20} height={20} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="right-box" w='50%' position='relative'>
                    <Box py='10px' position='absolute'>
                        <Image className="svg-image" src={imageUrl} width={710} height={880}/>
                    </Box>





                    <Box position='relative' w='100%' h='100%' py='40px' pl='30px'>
                        <Box display='flex' justifyContent='space-between' minW='100%'>
                            <AnimationText lines={['More than 1500 real', 'estate properties']} style={{color: '#FFFFFF', fontSize: '18px'}} delay={0.7}/>
                            <AnimationText lines={['From $145,000 with a', 'yield of 10% per annum']} style={{color: '#FFFFFF', fontSize: '18px'}} delay={0.7}/>
                            <Box className="header_button-block" display='flex' columnGap='8px'>
                                <Box className="def-animation-delay" w='46px' h='46px' borderRadius='8px' border='1px solid #FFFFFF' textAlign='center' alignContent='center'
                                    _hover={{bgColor: '#64646452', borderColor: 'transparent'}}>
                                    <Image src='/heart-icon.svg' width={19.8} height={18} />
                                </Box>
                                <Box className="def-animation-delay" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' textAlign='center' alignContent='center'
                                    _hover={{bgColor: '#64646452', borderColor: 'transparent'}}>
                                    <Image src='/home-icon.svg' width={19.8} height={18} />
                                </Box>
                            </Box>
                        </Box>
                        <Box position='absolute' bottom={40} right={0} w='167px' h='78px' borderRadius='20px' bgColor='#FFFFFF' display='flex' justifyContent='space-between' px='12px' alignItems='center'>
                            <AnimationText lines={[<Link>catalog</Link>, <Link>download</Link>]} style={{color: '#000', fontSize: '18px'}} />
                            <Box w='40px' h='40px' borderRadius='50%' bgColor='#F6F6F6' alignContent='center' textAlign='center'
                                _hover={{bgColor: '#e4e4e4'}}>
                                <Image src='/download-icon.svg' width={18} height={18}></Image>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HomeSection;