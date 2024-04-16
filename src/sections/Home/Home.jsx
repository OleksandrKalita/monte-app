import { Box, Button, Text, Link, Image, Grid, useBreakpointValue } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AnimationText from "@/components/AnimationText/AnimationText";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { useEffect, useState } from "react";
import SepecialAnimationComponents from "@/components/SepecialAnimationComponents/SepecialAnimationComponents";
import styles from './Home.module.css';

const Home = () => {
    const [imageUrl, setImageUrl] = useState('/images/home/main-image-1.svg');
    const images = [
        '/images/home/main-image-1.svg',
        '/images/home/main-image-2.svg',
        '/images/home/main-image-3.svg',
    ];

    const [isMobile, setMobile] = useState(false);
    const isMob = useBreakpointValue({ base: true, lg: false });
    useEffect(() => {
        setMobile(isMob);
    }, [isMob]);

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length; 
          setImageUrl(images[currentIndex]); 
        }, 10000); 
    
        return () => clearInterval(intervalId);
      }, []);
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

    const isWideScreen = useBreakpointValue({ base: 'base', md: 'md',lg: 'lg' });
    // 991 * 992

    return(
        <Box w='100vw' h='100%'  bg='#FFFFFF' >

            <Box maxW='1440px' h='100%' mx='auto' display='flex' flexDirection={{base: 'column', lg: 'row'}} p={{base: '20px 15px 15px 15px', lg: '10px 10px 10px 40px'}}>

                <Grid w='100%' display='flex' flexDirection={{base: 'column', lg: 'row'}}>
                    <Box position="relative" width={{lg: '50%'}}  height={{base: 'auto', lg: 'auto'}} m={{lg: '30px 40px 30px 0px'}}>
                        <Box position='absolute' top={0} left={0}>
                            <SepecialAnimationComponents
                                animationFrom={{ x: 0, autoAlpha: 0, scale: 0.5 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                    <Image src="/images/home/logotype-icon.svg" width={{base: '86px', md: '128.33px'}} height={{base: '30px', md: '44px'}}/>
                            )}/>
                        </Box>
                        <Box position='absolute' top={0} right={0} display='flex' columnGap='8px'>
                            <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ y: '50px', autoAlpha: 0, scale: 0.5 }}
                                animationTo={{y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box className="svg-image" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' alignContent='center' px='13px'
                                    _hover={{bgColor: '#e4e4e4'}}>
                                    <Image src='/map-icon.svg' width={19.8} height={18} />
                                </Box>
                            )}/>
                            <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ y: '50px', autoAlpha: 0, scale: 0.5 }}
                                animationTo={{y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box className="svg-image" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' alignContent='center' px='13px'
                                    _hover={{bgColor: '#e4e4e4'}}>
                                    <Image src='/menu-icon.svg' width={19.8} height={18} />
                                </Box>
                            )}/>
                        </Box>
                        {isMobile ? <Box position='relative' textAlign='center' w='100%' h='100%' pt='20%' >
                            <AnimationText lines={['Building Your Dreams']} style={{color: '#000', fontSize: '18px'}} />
                            <AnimationText lines={['Real Estate in Dubai:', 'Ideal for Living and', 'Investing']} style={{color: '#000', fontSize:'36px'}} delay={0.5} />  
                        </Box> : <Box position='relative' top={0} left={0} textAlign='center' w='100%' h='100%' pt='20%' >
                            <AnimationText lines={['Building Your Dreams']} style={{color: '#000', fontSize: '18px'}} />
                            <AnimationText lines={['Real Estate in Dubai:', 'Ideal for Living and', 'Investing']} style={{color: '#000', fontSize:'48px'}} delay={0.5} />  
                        </Box>

                        }
                        {isMobile ? <Box position='relative' w='max-content' mx='auto' pt='20px'>
                            <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: 0, autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box h='45px' bgColor='#141414' borderRadius='80px' py='4px' pl='4px' pr='20px' display='flex' columnGap='10px' textAlign='center' cursor='pointer'>
                                    <Box h='37px' w='37px' alignContent='center' bgColor='#D5E7EE' borderRadius='50%' >
                                        <Image src='/phone-icon.svg' width={10} height={10} pt='8px' />
                                    </Box>
                                    <Text color='#fff' fontSize='18px' fontWeight={500} pt='5px'>Contact Us Now</Text>
                                </Box>
                            )}/>
                        </Box> : <Box position='absolute' bottom={0} left={0}  mx={{base: 'auto'}}>
                            <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: '100px', autoAlpha: 0, scale: 1 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box h='45px' bgColor='#141414' borderRadius='80px' py='4px' pl='4px' pr='20px' display='flex' columnGap='10px' textAlign='center' cursor='pointer'>
                                    <Box h='37px' w='37px' alignContent='center' bgColor='#D5E7EE' borderRadius='50%' >
                                        <Image src='/phone-icon.svg' width={10} height={10} pt='8px' />
                                    </Box>
                                    <Text color='#fff' fontSize='18px' fontWeight={500} pt='5px'>Contact Us Now</Text>
                                </Box>
                            )}/>
                        </Box>
                        }
                        <Box position='absolute' bottom={0} right={0} display={{base: 'none', lg: 'block'}}>
                            <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: 0, autoAlpha: 0, scale: 0.3 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 2, ease: 'power3.out'}}
                                Component={() => (
                                <Box display='flex' columnGap='15px' alignItems='center'>
                                    <AnimationText lines={['Explore All', 'Our Properties']} style={{color: '#000', fontSize: '14px'}} delay={0.2}/>
                                    <Box position='relative'>
                                        <Image src='/elipse-home.svg' width={70} height={70} />
                                        <Box position='absolute' top={0} right={0} w={23} h={23} bgColor='#D5E7EE' borderRadius='50%'>
                                            <Image src='/arrow-icon.svg' width='20px' height='20px' mx='auto' mt='6px'/>
                                        </Box>
                                    </Box>
                                </Box>
                            )}/>
                        </Box>
                    </Box>


                    <Box position="relative" width={{lg: '50%'}}  mt={{base: '50px', lg: '0px'}} mx='auto'>
                        {/* <SepecialAnimationComponents
                            animationFrom={{ x: 0, autoAlpha: 0, scale: 0.5 }}
                            animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                            Component={() => (
                                <Image src={imageUrl}  min-height='100%' min-width='100%'/>
                            )}/> */}
                            <Image src={imageUrl}  min-height='100%' min-width='100%'/>
                        {isMobile ? <Box position='absolute' bottom='30px' left='30px'>
                            <Box display='flex' columnGap='57px'>
                                <AnimationText lines={['More than 1500 real', 'estate properties']} style={{color: '#FFFFFF', fontSize: '16px', fontWeight: 600}} delay={0.7}/>
                            </Box>
                        </Box>
                        : <Box position='absolute' top='30px' left='30px'>
                        <Box display='flex' columnGap='57px' className={styles.anim_text_none}>
                            <AnimationText lines={['More than 1500 real', 'estate properties']} style={{color: '#FFFFFF', fontSize: '18px', fontWeight: 600}} delay={0.7}/>
                            <div className={styles.anim_text}>
                                <AnimationText lines={['From $145,000 with a', 'yield of 10% per annum']} style={{color: '#FFFFFF', fontSize: '18px', fontWeight: 600}} delay={0.7}/>
                            </div>
                        </Box>
                        </Box>

                        }
                        <Box position='absolute' top='30px' right='30px'>
                            <Box display='flex' columnGap='8px'>
                                <SepecialAnimationComponents
                                    delay={1}
                                    animationFrom={{ y: '50px', autoAlpha: 0, scale: 0.5 }}
                                    animationTo={{y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                    Component={() => (
                                    <Box w='46px' h='46px' borderRadius='8px' border='1px solid #FFFFFF' alignContent='center' px='13px'
                                        _hover={{bgColor: '#64646452', borderColor: 'transparent'}}>
                                        <Image src='/heart-icon.svg' width={19.8} height={18} />
                                    </Box>
                                )}/>
                                <SepecialAnimationComponents
                                    delay={1}
                                    animationFrom={{ y: '50px', autoAlpha: 0, scale: 0.5 }}
                                    animationTo={{y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                    Component={() => (
                                    <Box className="def-animation-delay" w='46px' h='46px' bgColor='#F6F6F6' borderRadius='8px' alignContent='center' px='13px'
                                        _hover={{bgColor: '#64646452', borderColor: 'transparent'}}>
                                        <Image src='/home-icon.svg' width={19.8} height={18} />
                                    </Box>
                                )}/>
                            </Box>
                        </Box>
                        {isMobile ? <Box position='absolute' bottom='30px' right='30px'>
                            <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: 0, autoAlpha: 0, scale: 0.5 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box w='125px' h='56px' borderRadius='20px' bgColor='#FFFFFF' display='flex' justifyContent='space-between' px='12px' alignItems='center'>
                                    <AnimationText lines={[<Link>catalog</Link>, <Link>download</Link>]} style={{color: '#000', fontSize: '14px'}} />
                                    <Box w='28px' h='28px' borderRadius='50%' bgColor='#F6F6F6' alignContent='center' px='6px'
                                        _hover={{bgColor: '#e4e4e4'}}>
                                        <Image src='/download-icon.svg' width={14} height={14} />
                                    </Box>
                                </Box>
                            )}/>
                        </Box> : <Box position='absolute' bottom='30px' right='30px'>
                            <SepecialAnimationComponents
                                delay={1}
                                animationFrom={{ x: 0, autoAlpha: 0, scale: 0.5 }}
                                animationTo={{x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out'}}
                                Component={() => (
                                <Box w='167px' h='78px' borderRadius='20px' bgColor='#FFFFFF' display='flex' justifyContent='space-between' px='12px' alignItems='center'>
                                    <AnimationText lines={[<Link>catalog</Link>, <Link>download</Link>]} style={{color: '#000', fontSize: '18px'}} />
                                    <Box w='40px' h='40px' borderRadius='50%' bgColor='#F6F6F6' alignContent='center' px='13px'
                                        _hover={{bgColor: '#e4e4e4'}}>
                                        <Image src='/download-icon.svg' width={18} height={18}></Image>
                                    </Box>
                                </Box>
                            )}/>
                        </Box>
                        }
                    </Box>

                </Grid>
            </Box>
        </Box>
    );
}

export default Home;