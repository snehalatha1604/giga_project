import React from 'react'

const Gallery = () => {
    const images = [
        "/solarimg4.jpg",
        "/solarimg5.jpg",
        "/solarimg6.jpg",
        "/solarimg7.jpg",
        "/solarimg8.jpg",
        "/solarimg10.jpg",
      ];
  return (
    <div className="max-w-6xl mx-auto py-12 text-center">
      <h3 className="text-green-600 text-lg font-semibold">Our Projects</h3>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">Visit Our Latest Solar Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img src={src} alt={`Solar Project ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery