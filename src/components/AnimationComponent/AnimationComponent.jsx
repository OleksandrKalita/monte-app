import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function AnimatedComponent({ Component, delay = 0 }) {
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            gsap.fromTo(ref.current, 
              { y: 50, autoAlpha: 0, scale: 0.5 },
              { y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out', delay: delay }
            ).then(() => {
              entry.target.dataset.animated = "true";
              observer.current.unobserve(ref.current);
            });
          }
        });
      },
      {
        threshold: 0.5 
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
  }, [delay]);

  return (
    <div ref={ref}>
      <Component />
    </div>
  );
}

export default AnimatedComponent;
