import { ShoppingCart, CreditCard, Truck, Phone, ArrowRight } from 'lucide-react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function WhyUs() {
  const features = [
    {
      icon: "https://lottie.host/e9e3b8b1-0de9-4a5d-9845-6edcb2f75e50/e3E2N0Rbrq.lottie",
      title: "Large selection of quality sports goods",
      description: "A wide array of sporting goods to choose from. Are you ready?"
    },
    {
      icon: "https://lottie.host/a51fbdf5-c570-42eb-9967-b085a355f478/S0bMSPA92c.lottie",
      title: "Credit card payment in our application",
      description: "Swipe, tap, done: Seamlessly secure payments in just a click!"
    },
    {
      icon: "https://lottie.host/fa79b52c-c476-4e5d-b0f4-9af867ab4b8c/w6ztZ31cv3.lottie",
      title: "Fast and affordable our delivery",
      description: "Swift service, wallet-friendly shipping: Your delivery solution!"
    },
    {
      icon: "https://lottie.host/aacd4631-3faf-4a36-bd98-66643ccc4888/1ECgwyB8ls.lottie",
      title: "24/7 support from our partners",
      description: "Always here, always ready: round-the-clock partner support!"
    }
  ];

  const partners = [
    { name: "Nike", logo: "https://loodibee.com/wp-content/uploads/Nike-Logo.png" },
    { name: "Adidas", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dtlrN5hP1x-m9AwA-NqGuUv2rwyehMoIkg&s" },
    { name: "Puma", logo: "https://www.streetworld.com/_next/image?url=https%3A%2F%2Fmetastore-storyblok.imgix.net%2F750x750%2Fbe287f9f97%2Fpuma_logo.jpg%3Fauto%3Dformat%26px%3D0%26htn%3D0&w=3840&q=100" },
    { name: "Under Armour", logo: "https://pbs.twimg.com/profile_images/1217104922434506753/x1LoA4bL_400x400.jpg" },
    { name: "Reebok", logo: "https://placehold.co/200x80/fff/333?text=REEBOK" },
    { name: "ASICS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCAEXLnpuYqi4NsGdExQ3eEDpz2TlfYIJiw&s" },
    { name: "Wilson ", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyTCqcNRx4lOw3swbt4EZj_4wKZNsPx-kIA&s" }
  ];

  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col items-center '>
            <h1 className='text-3xl font-bold mb-5 dark:text-white'>Why Choose Us</h1>
            <span className='text-lg font-light text-center w-2/3 mb-3 dark:text-white'>Join thousands of athletes who trust us to deliver the best gear for their training and competitions. Your success is our priority.</span>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-black dark:border dark:border-white  rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
              <DotLottieReact
          src={feature.icon}
          loop
          autoplay
          speed={1} 
          style={{ width: "72px", height: "72px" }}
        /> 
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">Our partners</h2>
              <p className="text-gray-600 dark:text-gray-400">Explore our network of trusted partners</p>
            </div>
            <button className="flex items-center text-orange-500 hover:text-orange-600 transition-colors">
              View all brands
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}