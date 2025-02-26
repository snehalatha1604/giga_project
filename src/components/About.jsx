import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white px-6 py-12 md:px-12">
      {/* Left Side: Image */}
      <div className="md:w-150 w-full">
        <img
          src="about.jpg"
          alt="Solar Panels"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="md:w-1/2 w-full md:pl-12 mt-6 md:mt-0">
        <h3 className="text-green-600 font-bold text-lg">About Us</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          With 5+ Years of Experience
        </h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          We are dedicated to delivering an exceptional experience through our
          premium-quality solar panels, liberating you from the burden of
          electricity bills. Experience the transformation towards sustainable
          energy solutions.
        </p>
      </div>
    </div>
  )
}

export default About