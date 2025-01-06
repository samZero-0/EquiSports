import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Products() {
    const [loading, setLoading] = useState(true);
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://assignment10backend.vercel.app/equipments')
            .then((res) => res.json())
            .then((data) => {
                setEquipments(data);
                setLoading(false);
            })
            .catch((error) => {
                // alert("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="w-full mx-auto px-4 py-8">
            <div className="flex justify-between items-center my-10">
                <div className=" w-full flex flex-col items-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
                    <p className="text-gray-600 mt-3 dark:text-white">Browse through our collection of must-haves</p>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center"><span className="loading loading-ring loading-lg text-4xl"></span></div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {equipments.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="relative">
                                {product.price && (
                                    <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-sm rounded-md">
                                        ${product.price}
                                    </span>
                                )}
                                <img
                                    src={product.img}
                                    alt={product.itemName}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{product.itemName}</h3>
                                <p className="text-sm text-gray-500 dark:text-white">{product.description.slice(0,40)}</p>
                                
                                   
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={product.rating}
                                    edit={false}
                                    activeColor="#ffd700" />
                                <div className="text-sm text-gray-600 dark:text-white">In stock: <span className="font-medium">{product.stockStatus}</span></div>
                                <Link to={`/allEquipments/${product._id}`}>
                                <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                                    View Details
                                </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
