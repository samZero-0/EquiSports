import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Premium Sports Gear",
    subtitle: "Elevate Your Game",
    description: "Discover our collection of professional-grade equipment"
  },
  {
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1920",
    title: "Athletic Excellence",
    subtitle: "Push Your Limits",
    description: "High-performance gear for serious athletes"
  },
  {
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1920",
    title: "Sport Essentials",
    subtitle: "Quality That Lasts",
    description: "Equipment that stands up to your toughest workouts"
  }
];

function App() {
  return (
    <div className="relative h-[550px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={500}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
          bulletClass: 'swiper-custom-bullet',
          bulletActiveClass: 'swiper-custom-bullet-active',
        }}
        navigation={{
          prevEl: '.swiper-custom-button-prev',
          nextEl: '.swiper-custom-button-next',
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  <h2 className="text-6xl font-bold mb-4 animate-[fadeIn_1s_ease-out]">
                    {slide.title}
                  </h2>
                  <h3 className="text-3xl font-semibold mb-6 text-gray-200 animate-[slideUp_1s_ease-out]">
                    {slide.subtitle}
                  </h3>
                  <p className="text-xl mb-8 text-gray-100 animate-[slideUp_1s_ease-out]">
                    {slide.description}
                  </p>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold 
                    transform hover:scale-105 transition-transform duration-300 animate-[fadeIn_1s_ease-out]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-custom-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 
        rounded-full p-2 backdrop-blur-sm transition-all duration-300 z-10">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button className="swiper-custom-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 
        rounded-full p-2 backdrop-blur-sm transition-all duration-300 z-10">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Custom Pagination */}
      <div className="swiper-custom-pagination absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10" />
    </div>
  );
}

export default App;