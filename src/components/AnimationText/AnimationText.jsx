import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function AnimationText({ lines, style, delay = 0.3 }) {
  const ref = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target.querySelectorAll('.text-line'),
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay }
            );
            observer.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
    <Box ref={ref}>
      {lines.map((line, index) => (
        <Box overflow="hidden" key={index}>
          <Box className="text-line" fontFamily='`Montserrat' style={style} >{line}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default AnimationText;
