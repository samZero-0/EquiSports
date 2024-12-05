import { Outlet } from "react-router-dom";




const HomeLayout = () => {
    return (
        <div>
          <div className="w-full">

        <div className="w-full mx-auto ">

            <div className="min-h-[calc(100vh-289px)]">
            <Outlet></Outlet>
            </div>

        </div>
        
        </div>
        </div>
    );
};

export default HomeLayout;