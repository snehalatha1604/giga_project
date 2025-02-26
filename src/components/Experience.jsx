import React from 'react'
import { CheckCircle, MapPin } from "lucide-react";


const Experience = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-12 bg-white">
    {/* Project Done */}
    <div className="flex flex-col items-center text-center md:w-1/3">
      <div className="flex items-center gap-3">
        <div className="bg-green-500 text-white p-3 rounded-full">
          <CheckCircle size={30} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">45</h2>
      </div>
      <h3 className="font-semibold text-lg mt-2">Project Done</h3>
      <p className="text-gray-600 text-sm mt-2">
        We've done many solar projects across Andhra Pradesh and Karnataka.
      </p>
    </div>

    {/* Places Covered */}
    <div className="flex flex-col items-center text-center md:w-1/3">
      <div className="flex items-center gap-3">
        <div className="bg-green-500 text-white p-3 rounded-full">
          <MapPin size={30} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">12</h2>
      </div>
      <h3 className="font-semibold text-lg mt-2">Places Covered</h3>
      <p className="text-gray-600 text-sm mt-2">
        Kakinada, Rayavaram, Anaparthy, Peddapuram, Surampalem, Ramachandrapuram, G.Mamidada, Kittur (Karnataka), Siddhasamudra (Karnataka), Kathipudi, Velangi...
      </p>
    </div>
  </div>
  )
}

export default Experience