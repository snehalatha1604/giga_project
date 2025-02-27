import React, { useState } from "react";
import { CheckCircle, MapPin, ArrowUpCircle } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About = () => {
  const aboutUsImage1 = "/img-600x400-2.jpg";
  const aboutUsImage2 = "/about.jpg";

  const stats = [
    {
      icon: <CheckCircle size={40} className="text-green-500" />,
      number: 45,
      title: "Project Done",
      description:
        "We've Done Many Solar Projects Across Andhra Pradesh and Karnataka",
    },
    {
      icon: <MapPin size={40} className="text-green-500" />,
      number: 12,
      title: "Places Covered",
      description: "Kakinada, Rayavaram, Anaparthy, Peddapuram, Surampalem...",
    },
  ];

  const faqs = [
    {
      question: "What is the Lifespan of solar panels?",
      answer: "Most solar Panels last for 25-30 years.",
    },
    {
      question: "What are the benefits of installing solar panels?",
      answer:
        "Solar panels reduce your electricity bill and offer you rebates on your tax.",
    },
    {
      question: "Do solar panels work without sunlight?",
      answer:
        "Even though you get maximum efficiency on sunny days, electricity is still produced on cloudy days.",
    },
    {
      question: "How can I locate Giga Power in Godari Gunta, Kakinada?",
      answer:
        "Giga Power in Godari Gunta, Kakinada, is located opposite to Dmart.",
    },
    {
      question: "How to maintain solar panels?",
      answer:
        "Clean your solar panels once in a month to improve their durability.",
    },
    {
      question: "Is installation of solar panels at your home expensive?",
      answer:
        "Solar panels are a one-time investment, once you purchase them, you don't have to pay for electricity.",
    },
    {
      question: "Who are eligible for the subsidy?",
      answer: "All residential users can avail subsidy.",
    },
    { question: "Who allots the subsidy?", answer: "The Central Government." },
    {
      question: "How is the subsidy transferred and how long?",
      answer:
        "Through DBT(Direct Beneficiary Transfer), within 1-Month after installation.",
    },
    { question: "Service Warranty period of the unit ?", answer: "5 Years." },
    {
      question: "How many units does 1KW produce?",
      answer: "120 to 135 units per month on an year average.",
    },
    {
      question: "What is the Payback Period?",
      answer: " 7 years, depends on the unit rate.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Nav />

      <div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${aboutUsImage1})` }}
      >
        <h1 className="relative text-white text-4xl md:text-5xl font-bold ml-10 md:ml-16">
          About Us
        </h1>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center items-center gap-10 py-10 bg-white">
        {stats.map((stat, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className="flex justify-center items-center mb-2">
              {stat.icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{stat.number}</h2>
            <h3 className="text-lg font-semibold text-gray-900">
              {stat.title}
            </h3>
            <p className="text-gray-500 mt-2">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row items-center bg-white px-6 lg:px-16 py-10">
        <div className="w-full lg:w-1/2">
          <img
            src={aboutUsImage2}
            alt="Solar Panels"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12 mt-6 lg:mt-0 text-center lg:text-left">
          <h2 className="text-green-600 font-bold text-xl">About Us</h2>
          <p className="text-gray-900 text-2xl font-bold leading-snug mt-2">
            With 5+ Years of Experience, We are Dedicated to Delivering an
            Exceptional Experience Through our Premium-Quality Solar Panels,
            Liberating You from the burden of electricity bills. Experience the
            Transformation Towards Sustainable Energy Solutions.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center bg-white px-6 lg:px-16 py-10">
        <h2 className="text-green-600 font-bold text-3xl mb-6">FAQ's</h2>

        <div className="w-full max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left p-4 bg-green-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-green-600"
                onClick={() => toggleFAQ(index)}
              >
                {index + 1}. {faq.question}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-green-100 text-gray-900 rounded-lg mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpCircle size={30} color="white" />
      </button>

      <Footer />
    </>
  );
};

export default About;
