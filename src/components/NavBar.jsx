import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const Navbar = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    const [hover, setHover] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { isDarkMode, toggleDarkMode } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
            await logOut(); 
            navigate("/"); 
        } catch (error) {
           const err =error;
        }
    };
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleScroll = () => {
        const section = document.getElementById("contact");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

      const handleScroll2 = () => {
        const section = document.getElementById("about");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <div className=" text-black  z-50  sticky top-0 bg-white dark:bg-black ">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[100] mt-3 w-52 p-2 shadow-lg bg-white dark:bg-black dark:border dark:border-white">
                            <li ><Link to='/' className="dark:text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300 ">Home</Link></li>
                            <li>
                                <Link to='/allEquipments' className="dark:text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300"> Equipments</Link>
                              
                            </li>
                            <li><a>About Us</a></li>
                            {user && user.email? <li className="text-lg"><NavLink to={`/myEquipments/byEmail/${user.email}`} className="dark:text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">My Equipments </NavLink></li>:  ""}
                        </ul>
                    </div>
                    <Link to='/' className="  text-xl text-black">
                    <div className="md:flex justify-start hidden ">
                    <img src="/logo2.png" alt="" className="lg:w-1/2  "/>
                    </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="pr-4 text-base"><NavLink to='/' className="dark:text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">Home</NavLink></li>
                        <li className="text-base"><NavLink to='/allEquipments' className="dark:text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300"> Equipments</NavLink></li>
                        <li onClick={handleScroll2} className="text-base dark:text-white"><a>About Us</a></li>
                        <li onClick={handleScroll} className="text-base dark:text-white"><a>Contact</a></li>
                        {/* <li className="pl-4 text-lg"><NavLink to='/addEquipment' className="dark:text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">Add Equipment</NavLink></li> */}
                        {user && user.email? <li className="pl-4 text-base"><NavLink to={`/myEquipments/byEmail/${user.email}`} className="dark:text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">My Equipments </NavLink></li>:  ""}
                        
                    </ul>
                </div>
                {loading ? (
                    <div className="md:flex justify-center items-center navbar-end hidden">
                        <div className="md:mr-8 mr-3">
              
            </div>
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                ) : (
                    <div className="space-x-5 md:flex items-center navbar-end">
                        <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={30}
              />
                        {user && user.email && (
                            <div className="relative">
                                <img
                                    src={user.photoURL}
                                    alt="User Avatar"
                                    className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white cursor-pointer"
                                    onClick={toggleDropdown}
                                />
                                {dropdownVisible && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50 dark:bg-gray-800">
                                        <Link
                                            to="/addEquipment"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        >
                                            Add Equipments
                                        </Link>
                                        <Link
                                            to="/settings"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        >
                                            Settings
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
                

                {user && user.email ? (
                    <button onClick={handleLogOut} className="ml-4 btn w-[100px] bg-white text-black border hover:bg-purple-100 transition-all duration-300">Log Out</button>
                ) : (
                    <div>
                      <Link to='/login' className="ml-4 btn w-[150px]  text-black border  hover:bg-purple-100 transition-all duration-300">Login/Sign Up</Link>
                      
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
