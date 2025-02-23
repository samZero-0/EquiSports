import { ToastContainer } from "react-toastify";
import Products from "../components/Products";

// import NavBar from "../components/NavBar";
import SportsCategory from "../components/SportsCategory";
import Banner from "../components/Banner";
// import { useEffect, useState } from "react";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
// import DarkModeToggle from "react-dark-mode-toggle";

// import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import ContactForm from "../components/Contact";

const Home = () => {




    return (
        
        <div >
                 <Helmet>
        <title>EquiSports</title>
      </Helmet>

  

    <div className="dark:bg-[#080A0F] p-6 ">
            <ToastContainer />
            <Banner></Banner>
            <Products></Products>
            <SportsCategory></SportsCategory>
            <div id="about"><About></About></div>
            <WhyUs></WhyUs>
           <div id="contact"> <ContactForm></ContactForm></div>
            
   </div>
            
           
            
        </div>
    );
};

export default Home;