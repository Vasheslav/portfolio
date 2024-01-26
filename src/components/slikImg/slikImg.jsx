import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = ({ images }) => {
  const statusFormatter = () => {
    return '';
  };

  return (
    <Carousel
      showArrows={true}
      dynamicHeight={true}
      infiniteLoop={true}
      selectedItem={false}
      showThumbs={false}
      statusFormatter={statusFormatter}
    >
      {images.map((img, title, index) => (
        <li key={index}>
          <img src={img} alt={title} />
        </li>
      ))}
    </Carousel>
  );
};

export default Slider;
