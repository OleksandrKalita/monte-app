import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function SepecialAnimationComponents({ Component, animationFrom, animationTo, delay = 0 }) {
  const ref = useRef(null);
  const observer = useRef(null); // Создаём ref для observer, чтобы избежать его пересоздания

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            // Запускаем анимацию с учетом задержки
            gsap.fromTo(ref.current, 
              { ...animationFrom },
              { ...animationTo, delay: delay }
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
  }, [animationFrom, animationTo, delay]); // Зависимости useEffect

  return (
    <div ref={ref}>
      <Component />
    </div>
  );
}

export default SepecialAnimationComponents;
