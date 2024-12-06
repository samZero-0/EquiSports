import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { Helmet } from "react-helmet";

const AllEquipments = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const equipment = useLoaderData(); 
  const [sortedEquipment, setSortedEquipment] = useState(equipment); 
  const [sortOrder, setSortOrder] = useState("asc"); 

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc"; 
    const sortedData = [...sortedEquipment].sort((a, b) => {
      return newOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

    setSortedEquipment(sortedData); 
    setSortOrder(newOrder); 
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const loadEquipment = () => {
      setTimeout(() => {
        setSortedEquipment(equipment);
        setLoading(false);
      }, 1000); 
    };

    loadEquipment();
  }, [equipment]);

 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="loading loading-bars loading-lg"></div>
          <p className="mt-4 text-lg font-semibold">Loading Equipment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
           <Helmet>
        <title>All Equipments</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">All Sports Equipment</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleSort}
          className="border  text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex items-center gap-2"
        >
          <FaSort></FaSort>
          Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

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
            {sortedEquipment.map((item) => (
              <tr key={item.id}>
                <td className="py-4 px-4">{item.itemName}</td>
                <td className="py-4 px-4">{item.categoryName}</td>
                <td className="py-4 px-4">${item.price}</td>
                <td className="py-4 px-4">{item.rating}/5</td>
                <td className="py-4 px-4">
                  <Link to={`/allEquipments/${item._id}`}>
                    <button
                     
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
