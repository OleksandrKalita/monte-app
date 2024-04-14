import { Box, Button, Text, Link, Image} from "@chakra-ui/react";
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
            <Box display='flex' h='900px' maxW='1400px' mx='auto' px='20px'>
                <Box className="left-box" w='50%' h='100%'>
                    <Box pt='60px' pb='27px' pr='40px' h='900px' display='flex' flexDirection='column'>
                        <Box className="box__header" display='flex' justifyContent='space-between' alignContent='center'>
                            <Image className="svg-image" src='/header_logo_image.svg' width={40} height={10} />
                            <Box className="header_button-block" display='flex' columnGap='8px'>
                                <Box className="svg-image" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' alignContent='center' px='13px'
                                    _hover={{bgColor: '#e4e4e4'}}>
                                    <Image src='/map-icon.svg' width={19.8} height={18} />
                                </Box>
                                <Box className="svg-image" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' alignContent='center' px='13px'
                                    _hover={{bgColor: '#e4e4e4'}}>
                                    <Image src='/menu-icon.svg' width={19.8} height={18} />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="box_text" flex='1 1 auto' color='#000' textAlign='center' px='20px' pt='120px'>
                            <AnimationText lines={['Building Your Dreams']} style={{color: '#000', fontSize: '18px'}} />
                            <AnimationText lines={['Real Estate in Dubai:', 'Ideal for Living and', 'Investing']} style={{color: '#000', fontSize: '56px'}} delay={0.5} />
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Box h='45px' bgColor='#141414' borderRadius='80px' py='4px' pl='4px' pr='20px' display='flex' columnGap='10px' textAlign='center' cursor='pointer'>
                                <Box h='37px' w='37px' alignContent='center' bgColor='#D5E7EE' borderRadius='50%' >
                                    <Image src='/phone-icon.svg' width={10} height={10} pt='8px' />
                                </Box>
                                <Text color='#fff' fontSize='18px' fontWeight={500} pt='5px'>Contact Us Now</Text>
                            </Box>
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
                
                <Box className="right-box" w='50%' h='100%' position='relative'>
                    <Box position='absolute' top={0}>
                        <Image className="svg-image" src={imageUrl} width={710} height={930}/>
                    </Box>

                    <Box position='relative' w='100%' h='100%' pt='60px' px='30px'>
                        <Box display='flex' justifyContent='space-between' minW='100%' h='100%'>
                            <AnimationText lines={['More than 1500 real', 'estate properties']} style={{color: '#FFFFFF', fontSize: '18px', fontWeight: 600}} delay={0.7}/>
                            <AnimationText lines={['From $145,000 with a', 'yield of 10% per annum']} style={{color: '#FFFFFF', fontSize: '18px', fontWeight: 600}} delay={0.7}/>
                            <Box className="header_button-block" display='flex' columnGap='8px'>
                                <Box className="def-animation-delay" w='46px' h='46px' borderRadius='8px' border='1px solid #FFFFFF' alignContent='center' px='13px'
                                    _hover={{bgColor: '#64646452', borderColor: 'transparent'}}>
                                    <Image src='/heart-icon.svg' width={19.8} height={18} />
                                </Box>
                                <Box className="def-animation-delay" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' alignContent='center' px='13px'
                                    _hover={{bgColor: '#64646452', borderColor: 'transparent'}}>
                                    <Image src='/home-icon.svg' width={19.8} height={18} />
                                </Box>
                            </Box>
                        </Box>
                        <Box position='absolute' bottom='40px' right='40px' w='167px' h='78px' borderRadius='20px' bgColor='#FFFFFF' display='flex' justifyContent='space-between' px='12px' alignItems='center'>
                            <AnimationText lines={[<Link>catalog</Link>, <Link>download</Link>]} style={{color: '#000', fontSize: '18px'}} />
                            <Box w='40px' h='40px' borderRadius='50%' bgColor='#F6F6F6' alignContent='center' px='13px'
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