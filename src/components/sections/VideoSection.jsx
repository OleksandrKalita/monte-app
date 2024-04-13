import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Box, Text} from '@chakra-ui/react';
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
                console.log('on')
              } else if (currentVisibility < 1 && currentVisibility > 0) {
                const rect = entry.boundingClientRect;
                if (rect.top > 0) {
                  setPosition('befor');
                } else {
                  setPosition('after');
                }
              } else {
                setPosition('after'); 
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
    

    let dynamicStyles = {
    };
    let wrapperStyles = {

    }

    if(position === 'befor' && visibility > 0.8) {
        dynamicStyles = {
            width: '100vw',
            height:'100vh',
            borderRadius: '0px',
        }
    }
    if(position === 'befor' && visibility <= 0.6) {
        dynamicStyles = {
             
            
        }
        wrapperStyles = {
            height: '809px'
        }
    } 
    if (position === 'after' || position === 'on' && visibility <= 1) {
        dynamicStyles = {
            width: '100vw',
            height:'100vh',
            borderRadius: '0px',
            padding: '0px 10px 30px 10px'
        }
        wrapperStyles = {
            height: '680px'
        }
    }
    if (position === 'after' || position === 'on' && visibility <= 0.8) {
        dynamicStyles = {
            width: '100vw',
            height:'100vh',
            borderRadius: '0px',
            // padding: '0px 20px 40px 20px'
        }
    }
    if (position === 'after' || position === 'on' && visibility <= 0.6) {
        dynamicStyles = {
            width: '100vw',
            height:'100vh',
            borderRadius: '0px',
            padding: '0px 30px 60px 30px'
        }
        wrapperStyles = {
            height: '520px'
        }
    }
    if (position === 'after' || position === 'on' && visibility <= 0.6) {
        dynamicStyles = {
            width: '100vw',
            height:'100vh',
            borderRadius: '0px',
            padding: '0px 30px 120px 30px'
            
        }
        wrapperStyles = {
            height: '390px'
        }
    }
    
    


    return (
    <div ref={videoRef} style={{height: '809px', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F5F2', transition: 'all 1.2s ease', ...wrapperStyles}}>
    {/* <Text  position='absolute' top='30%' fontSize='56px' zIndex={4} flexWrap='nowrap' color='#FFF' textAlign={'center'}></Text> */}
    <Marquee style={{position: 'absolute', zIndex: 2}} speed={120}>
        <Text fontSize='56px' color='#FFF'>Apartments with an initial payment from $25,000</Text>
    </Marquee>
      <Box position='relative' w='790px'h='446px' overflow='hidden' borderRadius='30px' fill='cover' style={{...dynamicStyles, transition: 'all 0.8s ease'}}>
        <video
            width='100%'
            height='100%'
            autoPlay
            loop
            muted
            src="/video/v-1.mp4"
            type="video/mp4"
        >
        </video>
      </Box>
    </div>
  );
};

export default VideoSection;
