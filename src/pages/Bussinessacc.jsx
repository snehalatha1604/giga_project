import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Bussinessacc = () => {
  const partners = [
    {
      id: 1,
      name: "Siechem",
      category: "Wires and Cables",
      logo: "/siechem.jpg",
    },
    {
      id: 2,
      name: "ABC Solar",
      category: "Solar Inverter",
      logo: "/polycab.jpg",
    },
    {
      id: 3,
      name: "XYZ Power",
      category: "Renewable Energy",
      logo: "/renewsys.jpg",
    },
  ];
  const aboutUsImage1 = "/carousel-2.jpg";
  return (
    <>
      <Nav />
      <div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${aboutUsImage1})` }}
      >
        <h1 className="relative text-white text-4xl md:text-5xl font-bold ml-10 md:ml-16">
          Bussiness Associates
        </h1>
      </div>
      <section className="py-10 bg-white text-center">
        <h4 className="text-green-500 font-semibold">Trade Partners</h4>
        <h2 className="text-3xl font-bold text-gray-800">
          Our Best Trade Partners!
        </h2>

        <div className="relative max-w-4xl mx-auto mt-6">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            loop={true}
          >
            {partners.map((partners) => (
              <SwiperSlide
                key={partners.id}
                className="flex flex-col w-fit items-center justify-center"
              >
                <img
                  src={partners.logo}
                  alt={partners.name}
                  className="h-16 w-28 object-contain mb-4"
                />
                <h3 className="font-bold text-lg">{partners.name}</h3>
                <p className="text-gray-500 italic">{partners.category}</p>
              </SwiperSlide>
            ))}

            {/* Navigation buttons */}
            <button className="swiper-prev absolute left-60 top-1/2 -translate-y-2/2 p-2 bg-green-500 text-white rounded-full shadow-lg">
              <ArrowLeft size={20} />
            </button>

            <button className="swiper-next absolute right-60 top-1/2 -translate-y-2/2 p-2 bg-green-500 text-white rounded-full shadow-lg">
              <ArrowRight size={20} />
            </button>
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bussinessacc;
