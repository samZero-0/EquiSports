import React, { useState, useEffect } from 'react';
import { Star, Filter, ShoppingCart, Search, ChevronDown, ChevronUp } from 'lucide-react';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    categories: [],
    availability: 'all', // 'all', 'inStock', 'lowStock', 'outOfStock'
    rating: 0,
    searchQuery: '',
    sortBy: 'newest' // 'newest', 'priceAsc', 'priceDesc', 'nameAsc'
  });
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  // For mobile filter sidebar visibility
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  
  // For filter sections collapse state
  const [collapsedSections, setCollapsedSections] = useState({
    price: false,
    categories: false,
    availability: false,
    rating: false,
    sort: false
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://assignment10backend.vercel.app/equipments');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Extract all unique categories from products
  const allCategories = [...new Set(products.map(product => product.categoryName))];

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    // Price filter
    const price = parseInt(product.price);
    if (price < filters.priceRange[0] || price > filters.priceRange[1]) return false;
    
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.categoryName)) return false;
    
    // Availability filter
    const stock = parseInt(product.stockStatus);
    if (filters.availability === 'inStock' && stock <= 0) return false;
    if (filters.availability === 'lowStock' && (stock > 10 || stock <= 0)) return false;
    if (filters.availability === 'outOfStock' && stock > 0) return false;
    
    // Rating filter
    if (filters.rating > 0 && parseInt(product.rating) < filters.rating) return false;
    
    // Search query
    if (filters.searchQuery && !product.itemName.toLowerCase().includes(filters.searchQuery.toLowerCase()) && 
        !product.description.toLowerCase().includes(filters.searchQuery.toLowerCase())) return false;
    
    return true;
  }).sort((a, b) => {
    // Sort products
    switch (filters.sortBy) {
      case 'priceAsc':
        return parseInt(a.price) - parseInt(b.price);
      case 'priceDesc':
        return parseInt(b.price) - parseInt(a.price);
      case 'nameAsc':
        return a.itemName.localeCompare(b.itemName);
      case 'newest':
      default:
        // Assuming _id has timestamp information
        return b._id.localeCompare(a._id);
    }
  });

  const toggleSection = (section) => {
    setCollapsedSections({
      ...collapsedSections,
      [section]: !collapsedSections[section]
    });
  };

  const handlePriceChange = (value) => {
    setFilters({
      ...filters,
      priceRange: value
    });
  };

  const handleCategoryChange = (category) => {
    setFilters({
      ...filters,
      categories: filters.categories.includes(category)
        ? filters.categories.filter(c => c !== category)
        : [...filters.categories, category]
    });
  };

  const handleAvailabilityChange = (value) => {
    setFilters({
      ...filters,
      availability: value
    });
  };

  const handleRatingChange = (value) => {
    setFilters({
      ...filters,
      rating: value
    });
  };

  const handleSortChange = (value) => {
    setFilters({
      ...filters,
      sortBy: value
    });
  };

  const handleSearchChange = (e) => {
    setFilters({
      ...filters,
      searchQuery: e.target.value
    });
  };

  // Helper function to render star ratings
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i}
          size={16}
          className={`${i <= parseInt(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
         
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <ShoppingCart size={20} />
            </button>
          </div>
          
          <button 
            className="md:hidden flex items-center space-x-1 text-gray-600"
            onClick={() => setShowFilterSidebar(!showFilterSidebar)}
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
        
        {/* Mobile search */}
        <div className="md:hidden container mx-auto px-4 mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-5 sticky top-4">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
                <div className="h-px bg-gray-200 mb-4"></div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center mb-3 cursor-pointer"
                  onClick={() => toggleSection('price')}
                >
                  <h3 className="font-medium text-gray-800">Price Range</h3>
                  {collapsedSections.price ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </div>
                
                {!collapsedSections.price && (
                  <>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={filters.priceRange[1]}
                      onChange={(e) => handlePriceChange([filters.priceRange[0], parseInt(e.target.value)])}
                      className="w-full mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${filters.priceRange[0]}</span>
                      <span>${filters.priceRange[1]}</span>
                    </div>
                  </>
                )}
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center mb-3 cursor-pointer"
                  onClick={() => toggleSection('categories')}
                >
                  <h3 className="font-medium text-gray-800">Categories</h3>
                  {collapsedSections.categories ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </div>
                
                {!collapsedSections.categories && (
                  <div className="space-y-2">
                    {allCategories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category}`}
                          checked={filters.categories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="mr-2"
                        />
                        <label htmlFor={`category-${category}`} className="text-sm text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Availability */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center mb-3 cursor-pointer"
                  onClick={() => toggleSection('availability')}
                >
                  <h3 className="font-medium text-gray-800">Availability</h3>
                  {collapsedSections.availability ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </div>
                
                {!collapsedSections.availability && (
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="all"
                        name="availability"
                        value="all"
                        checked={filters.availability === 'all'}
                        onChange={() => handleAvailabilityChange('all')}
                        className="mr-2"
                      />
                      <label htmlFor="all" className="text-sm text-gray-700">All</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="inStock"
                        name="availability"
                        value="inStock"
                        checked={filters.availability === 'inStock'}
                        onChange={() => handleAvailabilityChange('inStock')}
                        className="mr-2"
                      />
                      <label htmlFor="inStock" className="text-sm text-gray-700">In Stock</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="lowStock"
                        name="availability"
                        value="lowStock"
                        checked={filters.availability === 'lowStock'}
                        onChange={() => handleAvailabilityChange('lowStock')}
                        className="mr-2"
                      />
                      <label htmlFor="lowStock" className="text-sm text-gray-700">Low Stock (1-10)</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="outOfStock"
                        name="availability"
                        value="outOfStock"
                        checked={filters.availability === 'outOfStock'}
                        onChange={() => handleAvailabilityChange('outOfStock')}
                        className="mr-2"
                      />
                      <label htmlFor="outOfStock" className="text-sm text-gray-700">Out of Stock</label>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Rating */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center mb-3 cursor-pointer"
                  onClick={() => toggleSection('rating')}
                >
                  <h3 className="font-medium text-gray-800">Minimum Rating</h3>
                  {collapsedSections.rating ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </div>
                
                {!collapsedSections.rating && (
                  <div className="space-y-2">
                    {[0, 1, 2, 3, 4, 5].map(rating => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="radio"
                          id={`rating-${rating}`}
                          name="rating"
                          value={rating}
                          checked={filters.rating === rating}
                          onChange={() => handleRatingChange(rating)}
                          className="mr-2"
                        />
                        <label htmlFor={`rating-${rating}`} className="text-sm text-gray-700 flex items-center">
                          {rating === 0 ? (
                            'Any rating'
                          ) : (
                            <div className="flex items-center">
                              {[...Array(rating)].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                              ))}
                              <span className="ml-1">& up</span>
                            </div>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Sort By */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center mb-3 cursor-pointer"
                  onClick={() => toggleSection('sort')}
                >
                  <h3 className="font-medium text-gray-800">Sort By</h3>
                  {collapsedSections.sort ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </div>
                
                {!collapsedSections.sort && (
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="newest"
                        name="sort"
                        value="newest"
                        checked={filters.sortBy === 'newest'}
                        onChange={() => handleSortChange('newest')}
                        className="mr-2"
                      />
                      <label htmlFor="newest" className="text-sm text-gray-700">Newest</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="priceAsc"
                        name="sort"
                        value="priceAsc"
                        checked={filters.sortBy === 'priceAsc'}
                        onChange={() => handleSortChange('priceAsc')}
                        className="mr-2"
                      />
                      <label htmlFor="priceAsc" className="text-sm text-gray-700">Price: Low to High</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="priceDesc"
                        name="sort"
                        value="priceDesc"
                        checked={filters.sortBy === 'priceDesc'}
                        onChange={() => handleSortChange('priceDesc')}
                        className="mr-2"
                      />
                      <label htmlFor="priceDesc" className="text-sm text-gray-700">Price: High to Low</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="nameAsc"
                        name="sort"
                        value="nameAsc"
                        checked={filters.sortBy === 'nameAsc'}
                        onChange={() => handleSortChange('nameAsc')}
                        className="mr-2"
                      />
                      <label htmlFor="nameAsc" className="text-sm text-gray-700">Name: A to Z</label>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
                onClick={() => setFilters({
                  priceRange: [0, 1000],
                  categories: [],
                  availability: 'all',
                  rating: 0,
                  searchQuery: '',
                  sortBy: 'newest'
                })}
              >
                Reset Filters
              </button>
            </div>
          </aside>
          
          {/* Mobile Filter Sidebar */}
          {showFilterSidebar && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
              <div className="w-4/5 bg-white h-full overflow-y-auto p-5">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                  <button 
                    className="text-gray-600"
                    onClick={() => setShowFilterSidebar(false)}
                  >
                    &times;
                  </button>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Price Range</h3>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange([filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-full mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {allCategories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-category-${category}`}
                          checked={filters.categories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="mr-2"
                        />
                        <label htmlFor={`mobile-category-${category}`} className="text-sm text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Availability */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobile-all"
                        name="mobile-availability"
                        value="all"
                        checked={filters.availability === 'all'}
                        onChange={() => handleAvailabilityChange('all')}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-all" className="text-sm text-gray-700">All</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobile-inStock"
                        name="mobile-availability"
                        value="inStock"
                        checked={filters.availability === 'inStock'}
                        onChange={() => handleAvailabilityChange('inStock')}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-inStock" className="text-sm text-gray-700">In Stock</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobile-lowStock"
                        name="mobile-availability"
                        value="lowStock"
                        checked={filters.availability === 'lowStock'}
                        onChange={() => handleAvailabilityChange('lowStock')}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-lowStock" className="text-sm text-gray-700">Low Stock (1-10)</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobile-outOfStock"
                        name="mobile-availability"
                        value="outOfStock"
                        checked={filters.availability === 'outOfStock'}
                        onChange={() => handleAvailabilityChange('outOfStock')}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-outOfStock" className="text-sm text-gray-700">Out of Stock</label>
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Minimum Rating</h3>
                  <div className="space-y-2">
                    {[0, 1, 2, 3, 4, 5].map(rating => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="radio"
                          id={`mobile-rating-${rating}`}
                          name="mobile-rating"
                          value={rating}
                          checked={filters.rating === rating}
                          onChange={() => handleRatingChange(rating)}
                          className="mr-2"
                        />
                        <label htmlFor={`mobile-rating-${rating}`} className="text-sm text-gray-700 flex items-center">
                          {rating === 0 ? (
                            'Any rating'
                          ) : (
                            <div className="flex items-center">
                              {[...Array(rating)].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                              ))}
                              <span className="ml-1">& up</span>
                            </div>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sort By */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Sort By</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobile-newest"
                        name="mobile-sort"
                        value="newest"
                        checked={filters.sortBy === 'newest'}
                        onChange={() => handleSortChange('newest')}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-newest" className="text-sm text-gray-700">Newest</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobile-priceAsc"
                        name="mobile-sort"
                        value="priceAsc"
                        checked={filters.sortBy === 'priceAsc'}
                        onChange={() => handleSortChange('priceAsc')}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-priceAsc" className="text-sm text-gray-700">Price: Low to High</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobile-priceDesc"
                        name="mobile-sort"
                        value="priceDesc"
                        checked={filters.sortBy === 'priceDesc'}
                        onChange={() => handleSortChange('priceDesc')}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-priceDesc" className="text-sm text-gray-700">Price: High to Low</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mobile-nameAsc"
                        name="mobile-sort"
                        value="nameAsc"
                        checked={filters.sortBy === 'nameAsc'}
                        onChange={() => handleSortChange('nameAsc')}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-nameAsc" className="text-sm text-gray-700">Name: A to Z</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
                    onClick={() => setShowFilterSidebar(false)}
                  >
                    Apply
                  </button>
                  <button 
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition duration-200"
                    onClick={() => {
                      setFilters({
                        priceRange: [0, 1000],
                        categories: [],
                        availability: 'all',
                        rating: 0,
                        searchQuery: '',
                        sortBy: 'newest'
                      });
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile filter & sort controls */}
            <div className="md:hidden flex justify-between mb-4">
              <button 
                className="flex items-center space-x-1 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
                onClick={() => setShowFilterSidebar(true)}
              >
                <Filter size={16} />
                <span>Filter</span>
              </button>
              
              <select 
                className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 appearance-none pr-8"
                value={filters.sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                style={{ backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat' }}
              >
                <option value="newest">Newest</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="nameAsc">Name: A to Z</option>
              </select>
            </div>
            
            {/* Results count and sort (desktop) */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-medium">{filteredProducts.length}</span> products
              </p>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Sort by:</span>
                <select 
                  className="bg-white px-3 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="nameAsc">Name: A to Z</option>
                </select>
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 text-gray-500 px-4 py-6 rounded-lg text-center">
                <h3 className="font-medium text-lg mb-2">No products found</h3>
                <p>Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.itemName}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800 text-lg mb-1 truncate">
                          {product.itemName}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {product.categoryName}
                        </span>
                      </div>
                      
                      <div className="flex items-center mb-2">
                        {renderRating(product.rating)}
                        <span className="text-xs text-gray-500 ml-1">({product.rating}/5)</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-800">${product.price}</span>
                        
                        <div className="text-sm">
                          {parseInt(product.stockStatus) > 10 ? (
                            <span className="text-green-600">In Stock</span>
                          ) : parseInt(product.stockStatus) > 0 ? (
                            <span className="text-orange-500">Low Stock</span>
                          ) : (
                            <span className="text-red-600">Out of Stock</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center">
                          <ShoppingCart size={16} className="mr-1" />
                          Add to Cart
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition duration-200">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;