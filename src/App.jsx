import { useState } from "react";

//import './App.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import About from "./components/About";
import Experience from "./components/Experience";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function App() {
  const slides = [
    {
      image: "/solarimg1.jpg",
      text: "Solar Power - Because The Sun Never Sends a Bill",
    },
    {
      image: "/solarimg2.jpg",
      text: "From Sunrise To Savings - We've Got Your Energy Needs Covered",
    },
    {
      image: "/solarimg3.jpg",
      text: "Empowering Tomorrow, Today - with Our Solar Brilliance",
    },
  ];

  return (
    <>
      <Nav />
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-fit">
              <img src={slide.image} alt="" />
              <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                  {slide.text}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Experience />
      <About />
      <Features />
      <Gallery />
      <Login />
      <Footer />
    </>
  );
}

export default App;
