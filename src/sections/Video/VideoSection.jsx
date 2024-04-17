// import React, { useRef, useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { Box, Image, Text, useBreakpointValue} from '@chakra-ui/react';
// import Marquee from "react-fast-marquee";
import styles from './Video.module.css';

// function VideoSection () {
//   const [isNarrowScreen, setIsNarrowScreen] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//         setIsNarrowScreen(window.innerWidth < 792);
//     };

//     checkScreenSize();

//     window.addEventListener('resize', checkScreenSize);

//     return () => {
//         window.removeEventListener('resize', checkScreenSize);
//     };
//   }, []);


//   return (<div className={styles.wrapper}>
//     <div className={styles.container}>
//       <Box pt={{base: '50px', lg: '80px'}} mx='auto' w='max-content' display='flex' columnGap='12px'>
//         <Box bgColor='#232323' boxSize='46px' borderRadius='50%' alignContent='center' pl='11px' cursor='pointer'>
//           <Image src='house2.svg'/>
//         </Box>
//         <Box bgColor='#232323' boxSize='46px' borderRadius='50%' alignContent='center' pl='12px' cursor='pointer'>
//           <Image src='key2.svg'/>
//         </Box>
//       </Box>
//       <div className={styles.video_wrapper}>
//         <video
//           className={styles.video}
//           controls={isNarrowScreen}
//           autoPlay={!isNarrowScreen}
//           loop
//           muted >
//           <source src='/video/v-1.mp4'/>
//         </video>
//         <Marquee style={{position: 'absolute',top: '200px', zIndex: 2}} speed={150}>
//           <div className={styles.marquee_text}>Apartments with an initial payment from $25,000</div>
//           <div className={styles.marquee_text}><Box boxSize='18px' bgColor='#fff' borderRadius='50%'></Box></div>
//           <div className={styles.marquee_text}>interest-free</div>
//           <div className={styles.marquee_text}><Box boxSize='18px' bgColor='#fff' borderRadius='50%'></Box></div>
//           <div className={styles.marquee_text}>installment plan up to 8 years</div>
//         </Marquee>
//       </div>
//     </div>
//   </div>);
// };

// export default VideoSection;



// const videoRef = useRef(null);
// const [visibility, setVisibility] = useState(0);
// const [position, setPosition] = useState('before');

// useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           const currentVisibility = entry.intersectionRatio;
//           setVisibility(currentVisibility); 

//           if (currentVisibility >= 1) {
//             setPosition('on');
//           } else if (currentVisibility < 1 && currentVisibility > 0) {
//             const rect = entry.boundingClientRect;
//             if (rect.top > 0) {
//               setPosition('befor');
//             } else {
//               setPosition('after');
//             }
//           } else {
//             setPosition('befor'); 
//           }
//         });
//       },
//       {
//         root: null, 
//         threshold: [0, 0.5, 0.8, 1]
//       }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, []);


// let dynamicStyles = {
// };
// let wrapperStyles = {

// }

// if(position === 'befor' && visibility > 0.8) {
//     dynamicStyles = {
//         width: '100vw',
//         height:'100vh',
//         borderRadius: '0px',
//     }
// }
// if(position === 'befor' && visibility <= 0.6) {
//     dynamicStyles = {
         
        
//     }
//     wrapperStyles = {
//         height: '809px'
//     }
// } 
// if (position === 'after' || position === 'on' && visibility <= 1) {
//     dynamicStyles = {
//         width: '100vw',
//         height:'100vh',
//         borderRadius: '0px',
//         padding: '0px 10px 30px 10px'
//     }
//     wrapperStyles = {
//         height: '680px'
//     }
// }
// if (position === 'after' || position === 'on' && visibility <= 0.8) {
//     dynamicStyles = {
//         width: '100vw',
//         height:'100vh',
//         borderRadius: '0px',
//     }
// }
// if (position === 'after' || position === 'on' && visibility <= 0.6) {
//     dynamicStyles = {
//         width: '100vw',
//         height:'100vh',
//         borderRadius: '0px',
//         padding: '0px 30px 60px 30px'
//     }
//     wrapperStyles = {
//         height: '520px'
//     }
// }
// if (position === 'after' && visibility <= 0.6) {
//     dynamicStyles = {
//         width: '100vw',
//         height:'100vh',
//         borderRadius: '0px',
//         padding: '0px 30px 120px 30px'
        
//     }
//     wrapperStyles = {
//         height: '390px'
//     }
// }


// const [isMobile, setMobile] = useState(false);
// const isMob = useBreakpointValue({ base: true, lg: false });
// useEffect(() => {
//     setMobile(isMob);
// }, [isMob]);

// function VideoSection () {
//     const videoRef = useRef(null);
//     const [visibility, setVisibility] = useState(0);
//     const [position, setPosition] = useState('before');
    
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//           (entries) => {
//             entries.forEach(entry => {
//               const currentVisibility = entry.intersectionRatio;
//               setVisibility(currentVisibility); 
    
//               if (currentVisibility >= 1) {
//                 setPosition('on');
//               } else if (currentVisibility < 1 && currentVisibility > 0) {
//                 const rect = entry.boundingClientRect;
//                 if (rect.top > 0) {
//                   setPosition('befor');
//                 } else {
//                   setPosition('after');
//                 }
//               } else {
//                 setPosition('befor'); 
//               }
//             });
//           },
//           {
//             root: null, 
//             threshold: [0, 0.5, 0.8, 1]
//           }
//         );
    
//         if (videoRef.current) {
//           observer.observe(videoRef.current);
//         }
    
//         return () => {
//           if (videoRef.current) {
//             observer.unobserve(videoRef.current);
//           }
//         };
//       }, []);
    

//     let dynamicStyles = {
//     };
//     let wrapperStyles = {

//     }

//     if(position === 'befor' && visibility > 0.8) {
//         dynamicStyles = {
//             width: '100vw',
//             height:'100vh',
//             borderRadius: '0px',
//         }
//     }
//     if(position === 'befor' && visibility <= 0.6) {
//         dynamicStyles = {
             
            
//         }
//         wrapperStyles = {
//             height: '809px'
//         }
//     } 
//     if (position === 'after' || position === 'on' && visibility <= 1) {
//         dynamicStyles = {
//             width: '100vw',
//             height:'100vh',
//             borderRadius: '0px',
//             padding: '0px 10px 30px 10px'
//         }
//         wrapperStyles = {
//             height: '680px'
//         }
//     }
//     if (position === 'after' || position === 'on' && visibility <= 0.8) {
//         dynamicStyles = {
//             width: '100vw',
//             height:'100vh',
//             borderRadius: '0px',
//         }
//     }
//     if (position === 'after' || position === 'on' && visibility <= 0.6) {
//         dynamicStyles = {
//             width: '100vw',
//             height:'100vh',
//             borderRadius: '0px',
//             padding: '0px 30px 60px 30px'
//         }
//         wrapperStyles = {
//             height: '520px'
//         }
//     }
//     if (position === 'after' && visibility <= 0.6) {
//         dynamicStyles = {
//             width: '100vw',
//             height:'100vh',
//             borderRadius: '0px',
//             padding: '0px 30px 120px 30px'
            
//         }
//         wrapperStyles = {
//             height: '390px'
//         }
//     }
    
    
//     const [isMobile, setMobile] = useState(false);
//     const isMob = useBreakpointValue({ base: true, lg: false });
//     useEffect(() => {
//         setMobile(isMob);
//     }, [isMob]);

//     if (isMobile) { 
//       return (<div style={{height: "809px", width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F5F2', transition: 'all 1.2s ease', ...wrapperStyles}}>
//       {/* <Text  position='absolute' top='30%' fontSize='56px' zIndex={4} flexWrap='nowrap' color='#FFF' textAlign={'center'}></Text> */}
//       <Marquee style={{position: 'absolute', zIndex: 2}} speed={120}>
//           <Text fontSize='56px' color='#FFF' fontWeight='700'>Apartments with an initial payment from $25,000</Text>
//       </Marquee>
//         <div className={styles.video}  style={{...dynamicStyles, transition: 'all 0.8s ease'}}>
//           <video
//               width='100%'
//               height='100%'
//               autoPlay
//               loop
//               muted
//               src="/video/v-1.mp4"
//               type="video/mp4"
//           >
//           </video>
//         </div>
//       </div>);
//     }

//     return (<div ref={videoRef} style={{height: "809px", width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F5F2', transition: 'all 1.2s ease', ...wrapperStyles}}>
//     {/* <Text  position='absolute' top='30%' fontSize='56px' zIndex={4} flexWrap='nowrap' color='#FFF' textAlign={'center'}></Text> */}
//     <Marquee style={{position: 'absolute', zIndex: 2}} speed={120}>
//         <Text fontSize='56px' color='#FFF' fontWeight='700'>Apartments with an initial payment from $25,000</Text>
//     </Marquee>
//       <div className={styles.video_wrapper}>
//         <Box position='relative' w='790px'h='446px' overflow='hidden' borderRadius='30px' fill='cover' style={{...dynamicStyles, transition: 'all 0.8s ease'}}>
//           <video
//               width='100%'
//               height='100%'
//               autoPlay
//               loop
//               muted
//               src="/video/v-1.mp4"
//               type="video/mp4"
//           >
//           </video>
//         </Box>
//       </div>
//     </div>);
// };

// export default VideoSection;



// import React, { useRef, useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { Box, Text, Image, useBreakpointValue} from '@chakra-ui/react';
// import Marquee from "react-fast-marquee";


// function VideoSection () {
//     const [isNarrowScreen, setIsNarrowScreen] = useState(false);

//     useEffect(() => {
//       const checkScreenSize = () => {
//           setIsNarrowScreen(window.innerWidth < 792);
//       };
  
//       checkScreenSize();
  
//       window.addEventListener('resize', checkScreenSize);
  
//       return () => {
//           window.removeEventListener('resize', checkScreenSize);
//       };
//     }, []);




//     const videoRef = useRef(null);
//     const [visibility, setVisibility] = useState(0);
//     const [position, setPosition] = useState('before');

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//           (entries) => {
//             entries.forEach(entry => {
//               const currentVisibility = entry.intersectionRatio;
//               setVisibility(currentVisibility); 
    
//               if (currentVisibility >= 1) {
//                 setPosition('on');
//               } else if (currentVisibility < 1 && currentVisibility > 0) {
//                 const rect = entry.boundingClientRect;
//                 if (rect.top > 0) {
//                   setPosition('befor');
//                 } else {
//                   setPosition('after');
//                 }
//               } else {
//                 setPosition('befor'); 
//               }
//             });
//           },
//           {
//             root: null, 
//             threshold: [0, 0.5, 0.8, 1]
//           }
//         );
    
//         if (videoRef.current) {
//           observer.observe(videoRef.current);
//         }
    
//         return () => {
//           if (videoRef.current) {
//             observer.unobserve(videoRef.current);
//           }
//         };
//       }, []);
    

//     let dynamicStyles = {
//     };
//     let wrapperStyles = {

//     }

//     if(position === 'befor' && visibility > 0.8) {
//         dynamicStyles = {
//             width: '100vw',
//             height:'100vh',
//             borderRadius: '0px',
//         }
//     }
//     if(position === 'befor' && visibility <= 0.6) {
//         dynamicStyles = {
             
            
//         }
//         wrapperStyles = {
//             height: '809px'
//         }
//     } 
//     if (position === 'after' || position === 'on' && visibility <= 1) {
//         dynamicStyles = {
//             width: '100vw',
//             height:'100vh',
//             borderRadius: '0px',
//             padding: '0px 10px 30px 10px'
//         }
//         wrapperStyles = {
//             height: '680px'
//         }
//     }
//     if (position === 'after' || position === 'on' && visibility <= 0.8) {
//         dynamicStyles = {
//             width: '100vw',
//             height:'100vh',
//             borderRadius: '0px',
//         }
//     }
//     if (position === 'after' || position === 'on' && visibility <= 0.6) {
//         dynamicStyles = {
//             position: 'absolute',
//             top: 0,
//             width: '100vw',
//             height:'100%',
//             borderRadius: '0px',
//             padding: '0px 30px 60px 30px'
//         }
//         wrapperStyles = {
//             height: '520px'
//         }
//     }
//     if (position === 'after' && visibility <= 0.6) {
//         dynamicStyles = {
//             width: '100%',
//             height:'100%',
//             // borderRadius: '0px',
//             // padding: '0px 30px 120px 30px'
            
//         }
//         wrapperStyles = {
//             height: '390px'
//         }
//     }
    
    
//     const [isMobile, setMobile] = useState(false);
//     const isMob = useBreakpointValue({ base: true, lg: false });
//     useEffect(() => {
//         setMobile(isMob);
//     }, [isMob]);



//     return (<div className={styles.wrapper}>
//       <div className={styles.container}>
//         <Box pt={{base: '50px', lg: '80px'}} mx='auto' w='max-content' display='flex' columnGap='12px'>
//           <Box bgColor='#232323' boxSize='46px' borderRadius='50%' alignContent='center' pl='11px' cursor='pointer'>
//             <Image src='house2.svg'/>
//           </Box>
//           <Box bgColor='#232323' boxSize='46px' borderRadius='50%' alignContent='center' pl='12px' cursor='pointer'>
//             <Image src='key2.svg'/>
//           </Box>
//         </Box>
//         <div className={styles.video_wrapper} ref={videoRef} style={{...dynamicStyles}}>
//           <video
//             className={styles.video}
//             controls={isNarrowScreen}
//             autoPlay={!isNarrowScreen}
//             loop
//             muted >
//             <source src='/video/v-1.mp4'/>
//           </video>
//           <Marquee style={{position: 'absolute',top: '200px', zIndex: 2}} speed={150}>
//             <div className={styles.marquee_text}>Apartments with an initial payment from $25,000</div>
//             <div className={styles.marquee_text}><Box boxSize='18px' bgColor='#fff' borderRadius='50%'></Box></div>
//             <div className={styles.marquee_text}>interest-free</div>
//             <div className={styles.marquee_text}><Box boxSize='18px' bgColor='#fff' borderRadius='50%'></Box></div>
//             <div className={styles.marquee_text}>installment plan up to 8 years</div>
//           </Marquee>
//         </div>
//       </div>
//     </div>);
// };

// export default VideoSection;



// return (<div ref={videoRef} style={{height: "809px", width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F5F2', transition: 'all 1.2s ease'}}>
// {/* <Text  position='absolute' top='30%' fontSize='56px' zIndex={4} flexWrap='nowrap' color='#FFF' textAlign={'center'}></Text> */}
// <Marquee style={{position: 'absolute', zIndex: 2}} speed={120}>
//     <Text fontSize='56px' color='#FFF' fontWeight='700'>Apartments with an initial payment from $25,000</Text>
// </Marquee>
//   <Box position='relative' w='790px'h='446px' overflow='hidden' borderRadius='30px' fill='cover' style={{...dynamicStyles, transition: 'all 0.8s ease'}}>
//     <video
//         width='100%'
//         height='100%'
//         autoPlay
//         loop
//         muted
//         src="/video/v-1.mp4"
//         type="video/mp4"
//     >
//     </video>
//   </Box>
// </div>);
// };


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
    // if(position === 'befor' && visibility <= 0.6) {
    //     dynamicStyles = {
             
            
    //     }
    //     wrapperStyles = {
    //         height: '809px'
    //     }
    // } 
    // if (position === 'after' || position === 'on' && visibility <= 1) {
    //     dynamicStyles = {
    //         width: '100vw',
    //         height:'100vh',
    //         borderRadius: '0px',
    //         padding: '0px 10px 30px 10px'
    //     }
    //     wrapperStyles = {
    //         height: '680px'
    //     }
    // }
    // if (position === 'after' || position === 'on' && visibility <= 0.8) {
    //     dynamicStyles = {
    //         width: '100vw',
    //         height:'100vh',
    //         borderRadius: '0px',
    //     }
    // }
    // if (position === 'after' || position === 'on' && visibility <= 0.6) {
    //     dynamicStyles = {
    //         width: '100vw',
    //         height:'100vh',
    //         borderRadius: '0px',
    //         padding: '0px 30px 60px 30px'
    //     }
    //     wrapperStyles = {
    //         // height: '520px'
    //     }
    // }
    // if (position === 'after' && visibility <= 0.6) {
    //     dynamicStyles = {
    //         width: '100vw',
    //         height:'100vh',
    //         borderRadius: '0px',
    //         padding: '0px 30px 120px 30px'
            
    //     }
    //     wrapperStyles = {
    //         // height: '390px'
    //     }
    // }
    
    
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

//     return (<div ref={videoRef} style={{height: "809px", width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F5F2', transition: 'all 1.2s ease', ...wrapperStyles}}>
//     {/* <Text  position='absolute' top='30%' fontSize='56px' zIndex={4} flexWrap='nowrap' color='#FFF' textAlign={'center'}></Text> */}
//     <Marquee style={{position: 'absolute', zIndex: 2}} speed={120}>
//         <Text fontSize='56px' color='#FFF' fontWeight='700'>Apartments with an initial payment from $25,000</Text>
//     </Marquee>
//       <Box position='relative' w='790px'h='446px' overflow='hidden' borderRadius='30px' fill='cover' style={{...dynamicStyles, transition: 'all 0.8s ease'}}>
//         <video
//             width='100%'
//             height='100%'
//             autoPlay
//             loop
//             muted
//             src="/video/v-1.mp4"
//             type="video/mp4"
//         >
//         </video>
//       </Box>
//     </div>);
// };

export default VideoSection;