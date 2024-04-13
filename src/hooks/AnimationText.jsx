import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function AnimationText({ lines, style, delay = 0.3 }) {
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
            observer.current.unobserve(entry.target); // Опціонально, щоб анімація не повторювалася
          }
        });
      },
      { threshold: 0.5 } // Тут можна налаштувати, наскільки елемент має бути видимий, щоб спрацювала анімація
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
          <Box className="text-line" style={style} fontFamily="Roboto">{line}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default AnimationText;
