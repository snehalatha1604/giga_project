import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const slides = [
    {
      image: "/solarimg1.png",
      text: "Solar Power - Because The Sun Never Sends a Bill",
    },
    {
      image: "/solarimg1.png",
      text: "From Sunrise To Savings - We've Got Your Energy Needs Covered",
    },
    {
      image: "/solarimg1.png",
      text: "Empowering Tomorrow, Today - with Our Solar Brilliance",
    },
  ];
const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      loop
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                {slide.text}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero