// // src/components/HeroSlider.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

// const slides = [
//   {
//     id: 1,
//     image: '/images/slide1.jpg',
//     title: 'Welcome to Our Site',
//     subtitle: 'Discover amazing things with us',
//   },
//   {
//     id: 2,
//     image: '/images/slide2.jpg',
//     title: 'Innovate Your Future',
//     subtitle: 'We build solutions for tomorrow',
//   },
//   {
//     id: 3,
//     image: '/images/slide3.jpg',
//     title: 'Join Our Journey',
//     subtitle: 'Be part of the innovation',
//   },
// ];

// const HeroSlider = () => {
//   return (
//     <div className="w-full h-screen">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         autoplay={{ delay: 2000 }}
//         loop={true}
//         pagination={{ clickable: true }}
//         className="w-full h-full"
//       >
//         {slides.map(slide => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className="w-full h-full bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="absolute inset-0 bg-cyan-500 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
//                 <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
//                 <p className="text-lg md:text-2xl">{slide.subtitle}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSlider;


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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4TKcuS4tnoJOZFIEgSXaj5EMaVJC30YOuA&s',
    title: 'Buy Better. Live Ethically.',
    subtitle: 'Discover and recommend conscious alternatives.',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSykUhFDLt30fbBfTxIm4h-tCKn8u9T-MKgQ&s',
    title: 'Power to the People',
    subtitle: 'Join the community making informed product choices.',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSHtzfa_7mVGCpt-gclVkvN1tGb3kjrIiRA&s',
    title: 'Rethink What You Support',
    subtitle: 'Explore, question, and choose wisely.',
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 3500 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-6 text-center text-white">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-md sm:text-xl md:text-2xl max-w-2xl drop-shadow-md">
                  {slide.subtitle}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  {/* <a
                    href="/#products"
                    className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
                  >
                    Explore Products
                  </a> */}
                  <a
                    href="/addproduct"
                    className="px-6 py-3 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
                  >
                    Add Queries
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
