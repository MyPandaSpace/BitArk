import React from 'react';

export default function CarouselImage({ text }) {
  return (
    <div className="carousel-image">
      <img src="https://img.capital.com/imgs/articles/1200x627x1/Bitcoin-investing-Shutterstock.com-.jpg" alt={text} />
      <p>{text}</p>
    </div>
  );
}