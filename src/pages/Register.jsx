import { updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Register = () => {
  
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { createAccount, setUser, googleSignin } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleGoogleLogin = () => {
    googleSignin()
      .then(res => {
        toast.success("Register Successful");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 800);
       
      })
      .catch(err => {
        
        toast.error("Google login failed");
      })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (regex.test(password)) {
      createAccount(email, password)
        .then((result) => {
          const currentUser = result.user;
          setUser(currentUser);
          updateProfile(currentUser, { displayName: name, photoURL: photo })
          
            .then(() => {
              toast.success("Register Successful");
              setTimeout(() => {
                navigate("/");
              }, 800);
              
              
            })
            .catch(err => {
              toast.error(`Registration Failed: ${err}`);
            })
        })
        .catch((error) => {
          toast.error(`Registration Failed: ${error}`);
        });
    } else {
      setError('Password must have an uppercase letter, lowercase letter, and a length of at least 6 characters.');
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <DotLottieReact
          src="https://lottie.host/cc307039-288c-411a-ab70-057d1b6de0e0/RlNwCVRtET.lottie"
          loop
          autoplay
          speed={1}
          style={{ width: "572px", height: "572px" }}
        />
      </div>
  
      {/* Registration Form */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Create an Account</h1>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>
  
          {/* Username Field */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 text-sm mb-2">Username</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your username"
            />
          </div>
  
          {/* Photo URL Field */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 text-sm mb-2">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter your photo URL"
            />
          </div>
  
          {/* Password Field */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 text-sm mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-12"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
  
          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full py-3 font-semibold"
          >
            Register
          </button>
  
          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full py-3 flex items-center justify-center gap-2 mt-2"
          >
            <FaGoogle /> Login with Google
          </button>
  
          {/* Login Redirect */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default Register;
