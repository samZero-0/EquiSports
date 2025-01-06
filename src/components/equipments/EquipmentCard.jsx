
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const EquipmentCard = ({ item }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
        <div className='h-64 w-full'>
            <img src={item.img} alt="" className='h-full w-full object-cover'/>
        </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{item.itemName}</h3>
          <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-semibold">
            {item.categoryName}
          </span>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`w-4 h-4 ${
                  index < item.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">({item.rating}/5)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-600">${item.price}</span>
          <Link 
            to={`/allEquipments/${item._id}`}
            className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EquipmentCard;