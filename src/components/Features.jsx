import React from 'react'
import { CheckCircle, Users, Headphones, Activity } from 'lucide-react';


const Features = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6 md:px-16">
      <div className="md:w-1/2">
        <h3 className="text-green-500 font-semibold text-lg">Why Choose Us!</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Complete Commercial & Residential Solar Systems</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <CheckCircle className="text-green-500 w-8 h-8" />
            <div>
              <p className="text-gray-500">Quality</p>
              <p className="font-bold">Services</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="text-green-500 w-8 h-8" />
            <div>
              <p className="text-gray-500">Expert</p>
              <p className="font-bold">Workers</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Activity className="text-green-500 w-8 h-8" />
            <div>
              <p className="text-gray-500">Free</p>
              <p className="font-bold">Consultation</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Headphones className="text-green-500 w-8 h-8" />
            <div>
              <p className="text-gray-500">Customer</p>
              <p className="font-bold">Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-150 mt-8 md:mt-0">
        <img src="/feature.jpg" alt="Solar Panels" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  )
}

export default Features