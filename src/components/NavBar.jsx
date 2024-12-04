import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
            await logOut(); 
            navigate("/"); 
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    return (
        <div className=" text-black  z-50">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                            <li><Link to='/' className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">Home</Link></li>
                            <li>
                                <Link to='/allEquipments' className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">All Equipments</Link>
                              
                            </li>
                            <li><Link to='/addEquipment' className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">Add Equipment</Link></li>
                            <li><Link to='/profile' className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">My Equipments</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="  text-xl text-black">
                    <div className="flex justify-start ">
                    <img src="/logo.png" alt="" className="lg:w-1/2 "/>
                    </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="pr-4 text-lg"><NavLink to='/' className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">Home</NavLink></li>
                        <li className="text-lg"><NavLink to='/allEquipments' className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">All Equipments</NavLink></li>
                        <li className="pl-4 text-lg"><NavLink to='/addEquipment' className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">Add Equipment</NavLink></li>
                        {user && user.email? <li className="pl-4 text-lg"><NavLink to={`/myEquipments/byEmail/${user.email}`} className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">My Equipments </NavLink></li>:  <li className="pl-4 text-lg"><Link  to={`/login`} className="hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300">My Equipments </Link></li>}
                        
                    </ul>
                </div>
                {loading ? (
                    <div className="md:flex justify-center items-center navbar-end hidden">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                ) : (
                    <div className="space-x-5 md:flex  items-center navbar-end">
                        {user && user.email && (
                            <div className="flex gap-2 items-center  justify-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                <img src={user.photoURL} alt="" className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white cursor-pointer"/>
                                <div className={`${hover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out mt-4 text-center `}>
                                    <p className="text-lg font-semibold text-black w-1/2">{user.displayName}</p>
                                </div>
                                
                                
                            </div>
                        )}
                        

                    </div>
                )}
                

                {user && user.email ? (
                    <button onClick={handleLogOut} className="ml-4 btn w-[200px] bg-white text-black border-green-600 hover:bg-purple-100 transition-all duration-300">Log Out</button>
                ) : (
                    <div>
                      <Link to='/login' className="ml-4 btn w-[150px]  text-black border  hover:bg-purple-100 transition-all duration-300">Log in</Link>
                      <Link to='/register' className="ml-4 btn w-[150px]  text-black border  hover:bg-purple-100 transition-all duration-300">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
