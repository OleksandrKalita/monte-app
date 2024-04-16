import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function SepecialAnimationComponents({ Component, animationFrom, animationTo, delay = 0 }) {
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            gsap.fromTo(ref.current, 
              { ...animationFrom },
              { ...animationTo, delay: delay }
            ).then(() => {
              entry.target.dataset.animated = "true";
              observer.current.unobserve(ref.current);
            });
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [animationFrom, animationTo, delay]);

  return (
    <div ref={ref}>
      <Component />
    </div>
  );
}

export default SepecialAnimationComponents;
