import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function AnimatedComponent({ Component, delay = 0 }) {
  const ref = useRef(null);
  const observer = useRef(null); // Создаём ref для observer, чтобы избежать его пересоздания

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            // Запускаем анимацию с учетом задержки
            gsap.fromTo(ref.current, 
              { y: 50, autoAlpha: 0, scale: 0.5 },
              { y: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power3.out', delay: delay }
            ).then(() => {
              // Отмечаем элемент как анимированный
              entry.target.dataset.animated = "true";
              // Отменяем наблюдение после завершения анимации
              observer.current.unobserve(ref.current);
            });
          }
        });
      },
      {
        threshold: 0.5 // Настройте порог, при котором начинается анимация
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
  }, [delay]); // Зависимости useEffect

  return (
    <div ref={ref}>
      <Component />
    </div>
  );
}

export default AnimatedComponent;
