import { ToastContainer } from "react-toastify";
import Products from "../components/Products";

import SportsCategory from "../components/SportsCategory";
import Banner from "../components/Banner";
import { useEffect } from "react";


const Home = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <ToastContainer />
            <Banner></Banner>
            <Products></Products>
            <SportsCategory></SportsCategory>
        </div>
    );
};

export default Home;