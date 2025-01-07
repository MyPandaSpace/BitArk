import React from 'react';
import './CarouselImage.css';

export default function CarouselImage({ src,text }) {
  return (
    <div className="carousel-image">
      <img src={src} alt={text} />
      <p>{text}</p>
    </div>
  );
}