import { ToastContainer } from "react-toastify";
import Products from "../components/Products";


import SportsCategory from "../components/SportsCategory";
import Banner from "../components/Banner";
// import { useEffect, useState } from "react";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import DarkModeToggle from "react-dark-mode-toggle";

import { useEffect, useState } from "react";

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);



    return (
        
        <div className={isDarkMode && `dark`}>
            <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      
      size={80}
    />
          
   <div className="dark:bg-black">
   <ToastContainer />
            <Banner></Banner>
            <Products></Products>
            <SportsCategory></SportsCategory>
            <About></About>
            <WhyUs></WhyUs>
   </div>
            
           
            
        </div>
    );
};

export default Home;