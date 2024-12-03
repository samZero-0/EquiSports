
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const MyEquipmentList = () => {
  const equipment = useLoaderData();

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        My Equipment
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {equipment.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.img}
                alt={item.itemName}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-900">
                ${item.price}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {item.itemName}
                </h3>
              </div>

              <div className="flex items-center mb-2">
                {renderStars(item.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  ({item.rating}/5)
                </span>
              </div>

              <div className="mb-3">
                <span className="inline-block px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
                  {item.category}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              <div className='flex gap-2'>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                Update
              </button>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                Delet
              </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipmentList;