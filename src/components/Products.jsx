function Products() {
    const products = [
      {
        id: 1,
        name: "Intense running shoes",
        price: 178.00,
        originalPrice: 260.00,
        discount: "-32%",
        isHot: true,
        image: "/placeholder.svg",
        rating: 5,
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 2,
        name: "Jersey for cycling",
        price: 48.00,
        originalPrice: 60.00,
        discount: "-20%",
        image: "/placeholder.svg",
        rating: 5,
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 3,
        name: "Eye-catching running shoes",
        price: 235.00,
        image: "/placeholder.svg",
        rating: 5,
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Team crit jersey",
        price: 75.00,
        image: "/placeholder.svg",
        rating: 5,
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Team crit jersey",
        price: 75.00,
        image: "/placeholder.svg",
        rating: 5,
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Team crit jersey",
        price: 75.00,
        image: "/placeholder.svg",
        rating: 5,
        sizes: ["XS", "S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Team crit jersey",
        price: 75.00,
        image: "/placeholder.svg",
        rating: 5,
        sizes: ["XS", "S", "M", "L", "XL"]
      }

    ];
  
    return (
      <div className="w-full mx-auto px-4 py-8">
        <div className="flex justify-between items-center my-10  ">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Products</h2>
            <p className="text-gray-600 mt-3">Browse through our collection of must-haves</p>
          </div>
          
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative">
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-sm rounded-md">
                    {product.discount}
                  </span>
                )}
                {product.isHot && (
                  <span className="absolute top-12 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded-md">
                    HOT
                  </span>
                )}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <div className="flex gap-2 mt-1">
                  {product.sizes.map((size) => (
                    <span key={size} className="text-sm text-gray-500">
                      {size}
                    </span>
                  ))}
                </div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Products;