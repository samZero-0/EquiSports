import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllEquipments = () => {
  // Dummy data for demonstration
//   const equipmentData = [
//     { id: 1, name: 'Cricket Bat', category: 'Cricket', price: 99.99, rating: 4.5 },
//     { id: 2, name: 'Football', category: 'Soccer', price: 29.99, rating: 4.2 },
//     { id: 3, name: 'Tennis Racket', category: 'Tennis', price: 79.99, rating: 4.7 },
//     { id: 4, name: 'Basketball', category: 'Basketball', price: 39.99, rating: 4.3 },
//     { id: 5, name: 'Golf Clubs Set', category: 'Golf', price: 299.99, rating: 4.8 },
//   ];

   const equipment = useLoaderData();

  const handleViewDetails = (id) => {
    // In a real application, this would navigate to the details page
    console.log(`Viewing details for item with id: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Sports Equipment</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Rating</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {equipment.map((item) => (
              <tr key={item.id}>
                <td className="py-4 px-4">{item.itemName}</td>
                <td className="py-4 px-4">{item.categoryName}</td>
                <td className="py-4 px-4">${item.price}</td>
                <td className="py-4 px-4">{item.rating}/5</td>
                <td className="py-4 px-4">
                  <Link to={`/allEquipments/${item._id}`}>
                  <button
                    onClick={() => handleViewDetails(item.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    View Details
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipments;