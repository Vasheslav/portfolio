// import React from 'react';

// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Slider from 'react-slick';

// import css from './slikImg.module.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const SliderImg = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((img, title, index) => (
//         <div key={index} className={css.box}>
//           <img src={img} alt={title} className={css.img} />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default SliderImg;

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
      {images.map((img, title) => (
        <div key={img}>
          <img src={img} alt={title} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
