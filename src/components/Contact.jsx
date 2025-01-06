import  { useState } from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-xl">
        {/* Left Side - Form */}
        <div className="bg-black p-8 md:p-12">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">CONTACT US</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-white border-0 focus:ring-2 focus:ring-purple-400 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-white border-0 focus:ring-2 focus:ring-purple-400 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 rounded-md bg-white border-0 focus:ring-2 focus:ring-purple-400 outline-none resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-purple-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="bg-white dark:bg-black relative hidden md:block">
        <DotLottieReact
          src="https://lottie.host/3e6fd66f-f097-4a56-a623-d65f28bf48c6/2WaBgklmgg.lottie"
          loop
          autoplay
          speed={1} 
          style={{ width: "572px", height: "572px" }}
        /> 
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;