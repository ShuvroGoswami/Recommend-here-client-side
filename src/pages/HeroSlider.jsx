// src/components/HeroSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing things with us',
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    title: 'Innovate Your Future',
    subtitle: 'We build solutions for tomorrow',
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    title: 'Join Our Journey',
    subtitle: 'Be part of the innovation',
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 2000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-cyan-500 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
