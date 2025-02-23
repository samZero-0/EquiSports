import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const MainLayout = () => {
    const {isDarkMode} = useContext(AuthContext);

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <ToastContainer></ToastContainer>
       <div className="w-full dark:bg-[#080A0F] bg-white">
           <NavBar></NavBar>

        <div className="w-11/12 mx-auto ">

            <div className="min-h-[calc(100vh-289px)]">
            <Outlet></Outlet>

            </div>

            
        </div>
        <Footer></Footer>
        </div>
        

        </div>
    );
};

export default MainLayout;