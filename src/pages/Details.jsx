import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaArrowLeft } from "react-icons/fa";
import { MdDashboardCustomize, MdEmail, MdStorage } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
const Details = () => {
  const equipment = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent py-12">
      <Helmet>
        <title>Details: {equipment.itemName}</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-7xl"
      >
        <div className="bg-white dark:bg-transparent dark:border rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative h-[400px] lg:h-full">
                <img
                  src={equipment.img}
                  alt={equipment.itemName}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-1/2 p-8 lg:p-12"
            >
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {equipment.itemName}
                  </h1>
                  <p className="text-lg text-gray-600">{equipment.category}</p>
                </div>

                {/* Rating and Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`w-5 h-5 ${
                            index < equipment.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">({equipment.rating}/5)</span>
                  </div>
                  <span className="text-3xl font-bold text-orange-600">
                    ${equipment.price}
                  </span>
                </div>

                {/* Description */}
                <div className="prose prose-lg">
                  <p className="text-gray-600 dark:text-gray-300">{equipment.description}</p>
                </div>

                {/* Details */}
                <div className="space-y-4 border-t border-gray-200 pt-6">
                  <div className="flex justify-between">
                   <div className="flex items-center gap-3"> <MdDashboardCustomize className="dark:text-white"></MdDashboardCustomize>
                   <span className="text-gray-600 dark:text-white">Customization</span></div>
                    <span className="font-medium dark:text-white">{equipment.customization}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3"><IoIosTime className="dark:text-white"></IoIosTime>
                    <span className="text-gray-600 dark:text-white">Processing Time</span></div>
                    <span className="font-medium dark:text-white">{equipment.processingTime} days</span>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex items-center gap-3 "><MdStorage className="dark:text-white" />
                  <span className="text-gray-600 dark:text-white">Stock Status</span></div>
                    <span className="font-medium dark:text-white">{equipment.stockStatus} pieces available</span>
                  </div>
                </div>

                {/* Seller Info */}
                <div className="border-t border-gray-200 pt-6 space-y-2">
                  <div className="flex items-center gap-3">
                  <FaRegUserCircle className="dark:text-white"></FaRegUserCircle>
                  <p className="text-gray-600 dark:text-white">
                    Added by: <span className="font-medium">{equipment.userName}</span>
                  </p>
                  </div>
                 <div className="flex items-center gap-3">
                 <MdEmail className="dark:text-white" />
                  <p className="text-gray-600 dark:text-white">
                    Contact: <span className="font-medium">{equipment.userEmail}</span>
                  </p>
                 </div>
                </div>

                

                {/* Back Button */}
                <div className="pt-6">
                  <Link to="/allEquipments">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg
                        hover:bg-blue-700 transition-colors duration-200"
                    >
                      <FaArrowLeft className="mr-2" />
                      Back to All Equipment
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Details;