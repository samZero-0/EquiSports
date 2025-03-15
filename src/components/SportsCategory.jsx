import { Link } from "react-router-dom";

function SportsCategory() {
    const categories = [
      {
        title: "Football Equipment",
        products: 156,
        image: "/soccer.jpg",
      },
      {
        title: "Basketball Gear",
        products: 89,
        image: "/basketball.jpg",
      },
      {
        title: "Running & Athletics",
        products: 204,
        image: "/running.jpg",
      },
      {
        title: "Tennis Equipment",
        products: 94,
        image: "/tennis.jpg",
      },
      {
        title: "Gym & Fitness",
        products: 167,
        image: "/gym.jpg",
      },
      {
        title: "Swimming Gear",
        products: 78,
        image: "/swimming.jpg",
      },
    ];
  
    return (
      <div className="w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">Shop By Category</h1>
        <p className="text-center text-gray-600 mb-12 dark:text-white">
          Discover our wide range of premium sports equipment for every athlete and fitness enthusiast
        </p>
        
      <Link to="/shop">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.title}
              className="relative h-80 group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-2xl font-bold text-center mb-2">{category.title}</h2>
                <p className="text-sm opacity-90">{category.products} Products</p>
              </div>
            </div>
          ))}
        </div>
      </Link>
      </div>
    );
  }
  
  export default SportsCategory;