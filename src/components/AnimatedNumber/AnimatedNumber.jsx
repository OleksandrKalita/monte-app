import React, { useState, useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';

function AnimatedNumber({ text, end, duration = 100 }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, end, duration]);

  const startAnimation = () => {
    const endValue = end || 100; 
    let currentDuration = duration; 

    const calculateInterval = (current, end) => {
      const remaining = end - current;
      return (remaining / end) * (duration * 0.1);
    };

    const intervalId = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber < endValue) {
          currentDuration = calculateInterval(prevNumber, endValue);
          return prevNumber + 1;
        } else {
          clearInterval(intervalId);
          return prevNumber;
        }
      });
    }, currentDuration);
  };

  return (
    <Box ref={ref}>
      <Text fontSize='82px' color='#000' fontWeight='500'>
        {currentNumber+text}
      </Text>
    </Box>
  );
}

export default AnimatedNumber;