import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function MultiLineTextAnimation({ lines, style, lineStyle, animationDuration = 1.5 }) {
  const lineRefs = useRef([]);

  useEffect(() => {
    lineRefs.current.forEach((line, index) => {
      gsap.from(line, 
        { y: '100%', duration: animationDuration, delay: index * 0.1, ease: 'power2.out' });
    });
  }, [lines, animationDuration]);

  return (
    <div style={{ ...style, overflow: 'hidden' }}>
      {lines.map((text, index) => (
        <div key={index} ref={el => lineRefs.current[index] = el} style={{ ...lineStyle, overflow: 'hidden' }}>
          {text}
        </div>
      ))}
    </div>
  );
}

export default MultiLineTextAnimation;
