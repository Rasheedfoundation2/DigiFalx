import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
/*
    Modified: ServiceSlider component replaces ClientSlider.
    - Renamed Client to Service.
    - Updated data to represent services.
    - Changed headings and modal content accordingly.
*/


interface Service {
    title: string;
    image: string;
    description: string;
}

const serviceData: Service[] = [
    {
        title: "Web Development",
        image: "/services/web-development.webp",
        description: "Custom websites and web apps tailored to your business needs."
    },
    {
        title: "Mobile Apps",
        image: "/services/mobile-apps.webp",
        description: "Native and cross-platform mobile solutions for iOS and Android."
    },
    {
        title: "UI/UX Design",
        image: "/services/ui-ux.webp",
        description: "Intuitive and engaging user experiences for digital products."
    },
    {
        title: "Cloud Solutions",
        image: "/services/cloud.webp",
        description: "Scalable cloud infrastructure and migration services."
    },
    {
        title: "E-Commerce",
        image: "/services/ecommerce.webp",
        description: "Robust online stores with secure payment integrations."
    },
    {
        title: "SEO Optimization",
        image: "/services/seo.webp",
        description: "Improve your website ranking and organic traffic."
    },
    {
        title: "Digital Marketing",
        image: "/services/marketing.webp",
        description: "Comprehensive strategies to grow your online presence."
    },
    {
        title: "Data Analytics",
        image: "/services/analytics.webp",
        description: "Actionable insights from your business data."
    },
];

const ServiceSlider = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <div className="w-full py-16 bg-white">
            <h2 className="text-6xl font-bold text-center mb-6 text-gray-800">Our Services</h2>

            <Swiper
                slidesPerView={5}
                spaceBetween={7}
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
                {serviceData.map((service, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full max-w-[220px] mx-auto group">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-[190px] object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 group-hover:scale-105"
                                onClick={() => setSelectedService(service)}
                            />
                            <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 bg-white text-xs text-gray-700 px-3 py-1 rounded-full shadow group-hover:shadow-lg">
                                {service.title}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal */}
            {selectedService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl relative max-w-md w-full">
                        <button
                            className="absolute top-2 right-3 text-xl text-gray-600"
                            onClick={() => setSelectedService(null)}
                        >
                            &times;
                        </button>
                        <img src={selectedService.image} alt={selectedService.title} className="h-32 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-center">{selectedService.title}</h3>
                        <p className="text-center text-gray-700 mt-2">{selectedService.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceSlider;