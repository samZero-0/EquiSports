
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const slides = [
    {
      title: "Find All your sports gear",
      description: "Stay stylish and comfortable with our newest women's tracksuit collection, designed for active lifestyles.",
      image: "/banner1.jpg",
      cta: "Read more",
      kitCta: "Buy kit now"
    },
    {
      title: "Premium running shoes",
      description: "Experience ultimate comfort and performance with our latest line of running shoes, engineered for every type of runner.",
      image: "/banner2.jpg",
      cta: "Explore shoes",
      kitCta: "Shop now"
    },
    {
      title: "High-tech Sports gear",
      description: "Elevate your workouts with our cutting-edge fitness accessories, designed to track and improve your performance.",
      image: "/banner3.avif",
      cta: "Discover gear",
      kitCta: "Get equipped"
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ 
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} w-8 h-1 bg-gray-400 rounded-full">${index + 1}</span>`;
        },
      }}
      className="relative w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <img src="/logo2.png" alt="Max Fit Logo" className="w-24 h-auto" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{slide.title}</h2>
                <p className="text-lg text-gray-600">{slide.description}</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition duration-300 border-purple-600 border">
                  <span>{slide.cta}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600 rounded-full transform scale-95 -translate-x-4 translate-y-4"></div>
                <img src={slide.image} alt={slide.title} className="relative z-10 w-full h-auto rounded-full" />
              </div>
            </div>
          </div>
          {/* <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
            <p className="text-gray-800 mb-2 text-lg">You can buy the whole kit at once</p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-orange-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>{slide.kitCta}</span>
            </button>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;

