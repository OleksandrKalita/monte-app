import React, { useState, useEffect } from 'react';

function ImageChanger() {
  const [imageUrl, setImageUrl] = useState('https://example.com/image1.jpg');
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; 
      setImageUrl(images[currentIndex]); 
    }, 10000);

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <img src={imageUrl} alt="Dynamic Image" style={{ width: '100%', height: 'auto' }} />
  );
};

export default ImageChanger;
