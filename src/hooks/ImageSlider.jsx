import React, { useState, useEffect } from 'react';

const ImageChanger = () => {
  const [imageUrl, setImageUrl] = useState('https://example.com/image1.jpg'); // Початковий URL зображення
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; // Циклічно перебирає індекси масиву
      setImageUrl(images[currentIndex]); // Оновлення URL зображення
    }, 10000); // Змінює зображення кожні 10 секунд

    return () => clearInterval(intervalId); // Очищення інтервалу при знищенні компоненту
  }, []); // Пустий масив залежностей, щоб ефект запускався лише один раз

  return (
    <img src={imageUrl} alt="Dynamic Image" style={{ width: '100%', height: 'auto' }} />
  );
};

export default ImageChanger;
