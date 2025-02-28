import React from "react";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.service) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Quote request submitted successfully!");
  };
  return (
    <div
      id="#getquote"
      className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg  max-w-4xl  my-20 mx-auto"
    >
      {/* Left Side Image */}
      <div className="w-full h-full md:w-1/2">
        <img
          src="/solarimg5.jpg"
          alt="Solar Panels"
          className="rounded-lg w-full object-cover h-full"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-green-600 font-semibold">Free Quote</h3>
        <h2 className="text-2xl font-bold mb-4">Get A Free Quote</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Your Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          >
            <option value="">Select A Service</option>
            <option value="Solar Rooftop">Solar Rooftop</option>
            <option value="Solar pumps">Solar pumps</option>
            <option value="Solar Heater">Solar Heater</option>
            <option value="Solar Fencing">Solar Fencing</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
