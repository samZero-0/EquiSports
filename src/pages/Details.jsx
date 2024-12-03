import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const equipment = useLoaderData();

  

  return (
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12 my-10">
      <div className="relative py-3 w-9/12 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="w-full mx-auto">
            <div>
              <img src={equipment.img} alt={equipment.itemName} className="w-full h-[400px] object-cover rounded-lg shadow-md" />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-gray-900">{equipment.itemName}</h2>
                <p className="text-xl text-gray-600">{equipment.category}</p>
                <p className="text-gray-500">{equipment.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">${equipment.price}</span>
                  <span className="text-lg text-yellow-500">★ {equipment.rating}/5</span>
                </div>
              </div>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p><span className="font-bold">Customization:</span> {equipment.customization}</p>
                <p><span className="font-bold">Processing Time:</span> {equipment.processingTime}</p>
                <p><span className="font-bold">Stock Status:</span> {equipment.stockStatus} available</p>
              </div>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p><span className="font-bold">Added by:</span> {equipment.userName}</p>
                <p><span className="font-bold">User Email:</span> {equipment.userEmail}</p>
              </div>
            </div>
            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
             <Link to='/allEquipments'>
             <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-300">
                ← Back to All Equipment
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;