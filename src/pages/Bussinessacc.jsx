import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Bussinessacc = () => {
  const partners = [
    {
      id: 1,
      name: "RenewSys",
      category: "Solar Panels",
      logo: "/renewsys.jpg",
    },
    {
      id: 2,
      name: "Trina Solar",
      category: "Solar Panels",
      logo: "/trinasolar.jpg",
    },
    {
      id: 3,
      name: "GroWatt",
      category: "Solar Inverter",
      logo: "/growatt.jpg",
    },
    {
      id: 4,
      name: "Delta",
      category: "Solar Inverter",
      logo: "/delta.jpg",
    },
    {
      id: 5,
      name: "PolyCab",
      category: "Solar Inverter",
      logo: "/polycab.jpg",
    },
    {
      id: 6,
      name: "Aditya Solar",
      category: "Solar Inverter",
      logo: "/adityasolar.jpg",
    },
    {
      id: 7,
      name: "Siechem",
      category: "Wires and Cables",
      logo: "/siechem.jpg",
    },
    {
      id: 8,
      name: "ABB",
      category: "Solar Inverter",
      logo: "/abb.jpg",
    },
    {
      id: 9,
      name: "Lotus",
      category: "Energy and Solar",
      logo: "/lotus.jpg",
    },
  ];
  const aboutUsImage1 = "/carousel-2.jpg";
  const clients = [
    { id: 1, name: "Pragathi Engineering College", location: "Surampalem" },
    { id: 2, name: "K.V.R Hospital", location: "Rayavaram" },
    { id: 3, name: "Gandhi hospital", location: "Ramachandrapuram" },
    { id: 4, name: "Gamyam school", location: "G.mamidada" },
    {
      id: 5,
      name: "Sree Kittur Chennamma Breeding farm",
      location: "Kittur , Karnataka",
    },
    { id: 6, name: "Merla farms", location: "Siddhasamudra , karnataka" },
  ];

  return (
    <>
      <Nav active="Bussinessacc" />
      <div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${aboutUsImage1})` }}
      >
        <h1 className="relative text-white text-4xl md:text-5xl font-bold ml-10 md:ml-16">
          Business Associates
        </h1>
      </div>

      <section className="py-10 bg-white text-center">
        <h4 className="text-green-500 font-semibold">Trade Partners</h4>
        <h2 className="text-3xl font-bold text-gray-800">
          Our Best Trade Partners!
        </h2>

        {/* Centered Logo and Navigation */}
        <div className="relative flex justify-center items-center max-w-4xl mx-auto mt-6">
          {/* Previous Button */}
          <button className="swiper-prev p-3 bg-green-500 text-white rounded-full shadow-lg">
            <ArrowLeft size={24} />
          </button>

          {/* Swiper Container */}
          <div className="w-64 mx-4">
            {" "}
            {/* Adjusted width */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 10000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id} className="text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-40 object-contain mb-4 mx-auto"
                  />
                  <h3 className="font-bold text-lg">{partner.name}</h3>
                  <p className="text-gray-500 italic">{partner.category}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next Button */}
          <button className="swiper-next p-3 bg-green-500 text-white rounded-full shadow-lg">
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
      <section className="py-10 bg-white text-center">
        <h4 className="text-green-500 font-semibold">Clients</h4>
        <h2 className="text-3xl font-bold text-gray-800">Our Dear Clients!</h2>

        <div className="max-w-3xl mx-auto mt-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // Optional: Pause on hover
            }}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                  <h3 className="font-bold text-lg">{client.name}</h3>
                  <p className="text-gray-500 italic">{client.location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Bussinessacc;
