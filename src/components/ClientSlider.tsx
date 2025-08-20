import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface Client {
  name: string;
  image: string;
  description: string;
}

const clientData: Client[] = [
  { name: "Aayesha", image: "/clients/aayesha.webp", description: "Acme Corp is a global eCommerce company using our custom tech stack." },
  { name: "Anagal", image: "/clients/anagal.webp", description: "BetaSoft streamlined their operations with our custom dashboard." },
  { name: "Auxilo", image: "/clients/auxilo.webp", description: "XenoLabs launched their SaaS with our scalable backend." },
  { name: "Frame 50", image: "/clients/Frame 50.webp", description: "Globex improved their website SEO and performance with our tools." },
  { name: "gbs", image: "/clients/gbs.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "Janvika", image: "/clients/janvika.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "krypton", image: "/clients/krypton.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "Magfood", image: "/clients/magfood.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "Marine", image: "/clients/Marine.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "mc homes", image: "/clients/mc homes.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "mcba", image: "/clients/mcba.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "mchs", image: "/clients/mchs.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "mci", image: "/clients/mci.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "mgmt", image: "/clients/mgmt.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "nagma", image: "/clients/nagma.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
  { name: "orm", image: "/clients/orm.webp", description: "Omega Systems now runs a high-traffic enterprise web app with us." },
];

const ClientSlider = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  return (
    <div 
  className="py-24 text-white"
  style={{
    background: 'linear-gradient(to right, #110b2cff, #110b2cff)'
  }}
>
      <h2 className="text-6xl font-bold text-center mb-6 text-gray-100 dark:text-white">Our Clients</h2>

      <Swiper
        slidesPerView={5}
        spaceBetween={4}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-11/12 mx-auto"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {clientData.map((client, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full max-w-[100%] mx-auto group">
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-[190px] object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 group-hover:scale-105"
                onClick={() => setSelectedClient(client)}
              />
              <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full shadow group-hover:shadow-lg">
                {client.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-xl relative max-w-md w-full p-6">
            <button
              className="absolute top-2 right-3 text-2xl text-gray-600 dark:text-gray-300"
              onClick={() => setSelectedClient(null)}
            >
              &times;
            </button>
            <img src={selectedClient.image} alt={selectedClient.name} className="h-32 mx-auto mb-4 rounded-lg shadow" />
            <h3 className="text-2xl font-semibold text-center">{selectedClient.name}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mt-2">{selectedClient.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientSlider;
