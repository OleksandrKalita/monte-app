import styles from './Video.module.css';
import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Text,Image, useBreakpointValue} from '@chakra-ui/react';
import Marquee from "react-fast-marquee";


function VideoSection () {
    const videoRef = useRef(null);
    const [visibility, setVisibility] = useState(0);
    const [position, setPosition] = useState('before');

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              const currentVisibility = entry.intersectionRatio;
              setVisibility(currentVisibility); 
    
              if (currentVisibility >= 1) {
                setPosition('on');
              } else if (currentVisibility < 1 && currentVisibility > 0) {
                const rect = entry.boundingClientRect;
                if (rect.top > 0) {
                  setPosition('befor');
                } else {
                  setPosition('after');
                  console.log("after");
                }
              } else {
                setPosition('befor'); 
              }
            });
          },
          {
            root: null, 
            threshold: [0, 0.5, 0.8, 1]
          }
        );
    
        if (videoRef.current) {
          observer.observe(videoRef.current);
        }
    
        return () => {
          if (videoRef.current) {
            observer.unobserve(videoRef.current);
          }
        };
      }, []);
    

    let dynamicStyles = {}
    let wrapperStyles = {}
    let marqueeStyles = {}

    if(visibility > 0.7) {
        dynamicStyles = {
            'margin-top': '0px',
            width: '100%',
            height:'100%',
            borderRadius: '0px',
        },
        wrapperStyles = {
          height: 0
        }
        marqueeStyles = {
          top: '400px'
        }
    }    
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


  return (<div className={styles.wrapper} ref={videoRef}>
    <div className={styles.container}>
      <div  style={{transition: 'all 0.4s',...wrapperStyles}}>
      <Box pt={{base: '50px', lg: '80px'}} mx='auto' w='max-content' display='flex' columnGap='12px'>
        <Box bgColor='#232323' boxSize='46px' borderRadius='50%' alignContent='center' pl='11px' cursor='pointer'>
          <Image src='house2.svg'/>
        </Box>
        <Box bgColor='#232323' boxSize='46px' borderRadius='50%' alignContent='center' pl='12px' cursor='pointer'>
          <Image src='key2.svg'/>
        </Box>
      </Box>
      </div>
      <div className={styles.video_wrapper} style={{...dynamicStyles}}>
        <video
          className={styles.video}
          controls={isNarrowScreen}
          autoPlay={!isNarrowScreen}
          loop
          muted >
          <source src='/video/v-1.mp4'/>
        </video>
        <Marquee style={{position: 'absolute',top: '200px', zIndex: 2, ...marqueeStyles}} speed={150}>
          <div className={styles.marquee_text}>Apartments with an initial payment from $25,000</div>
          <div className={styles.marquee_text}><Box boxSize='18px' bgColor='#fff' borderRadius='50%'></Box></div>
          <div className={styles.marquee_text}>interest-free</div>
          <div className={styles.marquee_text}><Box boxSize='18px' bgColor='#fff' borderRadius='50%'></Box></div>
          <div className={styles.marquee_text}>installment plan up to 8 years</div>
        </Marquee>
      </div>
    </div>
  </div>);
};

export default VideoSection;