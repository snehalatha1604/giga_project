import React from "react";
import {
  ArrowUpCircle,
  Flame,
  CheckCircle,
  UserCheck,
  Headphones,
  Activity,
  Waves,
} from "lucide-react";
import { FaSolarPanel } from "react-icons/fa";
import { LuFence } from "react-icons/lu";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const services = [
  {
    icon: <FaSolarPanel size={40} className="text-green-500" />,
    title: "Solar Rooftop",
    image: "/solarimg4.jpg",
    description:
      "Solar rooftops use special panels on roofs to turn sunlight into electricity, providing clean energy for homes and businesses.",
  },
  {
    icon: <Flame size={40} className="text-green-500" />,
    title: "Solar Heaters",
    image: "/solarimg10.jpg",
    description:
      "Solar heaters use sunlight to heat water or air for homes and businesses, offering cost savings and eco-friendly heating solutions.",
  },
  {
    icon: <LuFence size={40} className="text-green-500" />,
    title: "Solar Fence",
    image: "/solarimg9.jpg",
    description:
      "Solar fences are eco-friendly security systems powered by solar panels, using stored energy to electrify wires for a cost-efficient solution in remote areas.",
  },
  {
    icon: <Waves size={40} className="text-green-500" />,
    title: "Solar Pumps",
    image: "/solarimg11.jpg",
    description:
      "Solar pumps use sunlight to power water pumps, making them a cost-effective and eco-friendly solution for irrigation and water supply in remote areas.",
  },
];
const subsidyData = [
  { capacity: "2.5 kW", subsidy: "Rs. 14588/- X 2.5 = Rs. 36,470/-" },
  { capacity: "3 kW", subsidy: "Rs. 14588/- X 3 = Rs. 43,764/-" },
  { capacity: "4 kW", subsidy: "Rs.14588/- X 3 + Rs.7294/- X 1 - Rs.51,058/-" },
  {
    capacity: "6.5 kW",
    subsidy: "Rs.14588/- X 3 + Rs.7294/- X 3.5 = Rs.69,293/-",
  },
  { capacity: "10 kW", subsidy: "Rs. 94822/-" },
  { capacity: "15 kW", subsidy: "Rs. 94822/-" },
  {
    capacity: "For Resident Welfare Associations (RWA)/ Group Housing",
    subsidy: "Rs. 7294/-",
  },
];

const Service = () => {
  const aboutUsImage1 = "/solarimg1.jpg";
  return (
    <>
      <Nav active="Service" />
      <div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${aboutUsImage1})` }}
      >
        <h1 className="relative text-white text-4xl md:text-5xl font-bold ml-10 md:ml-16">
          Services
        </h1>
      </div>
      <div className="bg-white py-12 px-6 text-center">
        {/* Section Title */}
        <h2 className="text-green-600 font-bold text-lg">Our Services</h2>
        <h1 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">
          We Are Pioneers In The World Of <br />
          <span className="text-green-600">Renewable Energy</span>
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="flex justify-center -mt-8">
                <div className="bg-white p-3 rounded-full shadow-md">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <button
          className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpCircle size={30} color="white" />
        </button>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Subsidy Plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-2/2 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 text-left">Rooftop Solar System Capacity</th>
                <th className="p-3 text-left">Applicable Subsidy</th>
              </tr>
            </thead>
            <tbody>
              {subsidyData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-3 border border-gray-300">{row.capacity}</td>
                  <td className="p-3 border border-gray-300">{row.subsidy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center  bg-gray-100 p-10">
        {/* Left Content */}
        <div className="w-1/2 pr-10">
          <h3 className="text-green-500 text-xl font-bold">Why Choose Us!</h3>
          <h2 className="text-4xl font-bold text-gray-900 my-3">
            Complete Commercial & Residential Solar Systems
          </h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <CheckCircle className="text-green-500 w-8 h-8" />
              <div>
                <span className="text-gray-500">Quality</span>
                <p className="font-bold">Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Activity className="text-green-500 w-8 h-8" />
              <div>
                <span className="text-gray-500">Free</span>
                <p className="font-bold">Consultation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <UserCheck className="text-green-500 w-8 h-8" />
              <div>
                <span className="text-gray-500">Expert</span>
                <p className="font-bold">Workers</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Headphones className="text-green-500 w-8 h-8" />
              <div>
                <span className="text-gray-500">Customer</span>
                <p className="font-bold">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2">
          <img
            src="feature.jpg"
            alt="Solar Panels"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
