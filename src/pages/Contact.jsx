import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Contact = () => {
  const aboutUsImage1 = "/carousel-2.jpg";
  return (
    <>
      <Nav active="Contact" />
      <div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${aboutUsImage1})` }}
      >
        <h1 className="relative text-white text-4xl md:text-5xl font-bold ml-10 md:ml-16">
          Contact us
        </h1>
      </div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contact Information */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-green-600 font-semibold text-lg">
                Contact Us
              </h4>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                Feel Free To Contact Us
              </h2>

              <div className="mt-6">
                <p className="text-lg font-semibold">
                  <span className="text-gray-700">Name:</span> M.V.V. Subba Rao
                </p>
                <p className="text-lg font-semibold mt-2">
                  <span className="text-gray-700">Designation:</span> Managing
                  Partner
                </p>
                <p className="text-lg font-semibold mt-2">
                  <span className="text-gray-700">Contact Number:</span>{" "}
                  9849370428
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="h-80 w-full">
              <iframe
                title="Company Location"
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953.9932198396604!2d82.24756772842751!3d16.975884298985953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382867c28b2e95%3A0x534e998820831c06!2sindraprastha%20Residency%2C%2070-14-46%2FG%2C%20Siddartha%20Nagar%2C%20Kakinada%2C%20Andhra%20Pradesh%20533003!5e0!3m2!1sen!2sin!4v1703753070130!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
