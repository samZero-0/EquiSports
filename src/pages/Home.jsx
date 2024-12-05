import { ToastContainer } from "react-toastify";
import Products from "../components/Products";

import NavBar from "../components/NavBar";
import SportsCategory from "../components/SportsCategory";
import Banner from "../components/Banner";
// import { useEffect, useState } from "react";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import DarkModeToggle from "react-dark-mode-toggle";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);



    return (
        
        <div className={isDarkMode && `dark`}>

            
            <div className="dark:bg-black "><NavBar></NavBar></div>

   <div className="dark:bg-black p-6 ">
   <ToastContainer />
            
           
            <div className="flex justify-end">
            <div className="flex justify-end lg:relative lg:-top-[85px]  mb-2 items-center gap-4  w-[100px]">
                {/* <span className="dark:text-white">Toggle Dark Mode</span> */}
            <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
            </div>
            </div>

            <Banner></Banner>
            <Products></Products>
            <SportsCategory></SportsCategory>
            <About></About>
            <WhyUs></WhyUs>
            <Footer></Footer>
   </div>
            
           
            
        </div>
    );
};

export default Home;