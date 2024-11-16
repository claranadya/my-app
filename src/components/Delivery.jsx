import React from 'react';
import { useState } from 'react';

const Delivery = () => {
  const [selectedZone, setSelectedZone] = useState('zone1');
  
  const deliveryZones = [
    {
      id: 'zone1',
      name: 'Zona 1 - Jambi Selatan',
      price: 'Rp. 30.000 ',
      time: '1-2 jam',
      areas: 'Pakuan Baru, Pasir Putih, The Hok'
    },
    {
      id: 'zone2',
      name: 'Zona 2 - 	Paal Merah',
      price: 'Rp. 40.000',
      time: '2-3 jam',
      areas: 'Eka Jaya, Payo Selincah'
    },
    {
      id: 'zone3',
      name: 'Zona 3 - Telanaipura',
      price: 'Rp. 60.000',
      time: '3-4 jam',
      areas: 'Buluran Kenali, Pematang Sulur'
    }
  ];

  const deliveryFeatures = [
    {
      title: "Pengiriman Tepat Waktu",
      description: "Kami menjamin pengiriman sesuai waktu yang dijanjikan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      title: "Pengemasan Aman",
      description: "Kue dikemas dengan hati-hati menggunakan box khusus",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    },
    {
      title: "Pemantauan Real-time",
      description: "Lacak status pengiriman kue Anda secara real-time",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-medium text-gray-900">
              Layanan Pengiriman
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Pengiriman cepat dan aman ke seluruh wilayah Kota Jambi
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-12">
            Zona Pengiriman
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryZones.map((zone) => (
              <div
                key={zone.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedZone === zone.id
                    ? 'bg-pink-100 border-2 border-pink-500'
                    : 'bg-white border-2 border-gray-200 hover:border-pink-300'
                }`}
                onClick={() => setSelectedZone(zone.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {zone.name}
                </h3>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-pink-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Biaya: {zone.price}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-pink-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Waktu: {zone.time}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-pink-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Area: {zone.areas}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-pink-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">
            Ada Pertanyaan?
          </h2>
          <p className="text-gray-600 mb-6">
            Tim customer service kami siap membantu Anda 24/7
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;