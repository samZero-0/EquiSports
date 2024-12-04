import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                alert("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="w-11/12 mx-auto px-4 py-8">
            <div className="flex justify-between items-center my-10">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900">Products</h2>
                    <p className="text-gray-600 mt-3">Browse through our collection of must-haves</p>
                </div>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipments.slice(0,6).map((product) => (
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
                                <h3 className="text-lg font-medium text-gray-900">{product.itemName}</h3>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                
                                <div className="text-sm text-gray-600">Rating: {product.rating} / 5</div>
                                <div className="text-sm text-gray-600">Available: {product.stockStatus}</div>
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
