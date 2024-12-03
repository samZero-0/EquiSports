import { ToastContainer } from "react-toastify";
import Products from "../components/Products";

import SportsCategory from "../components/SportsCategory";
import Banner from "../components/Banner";


const Home = () => {
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