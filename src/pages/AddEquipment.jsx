import  { useState, useEffect,useContext } from 'react';
import { AuthContext } from "../providers/AuthProvider";
import { FiCamera, FiTag, FiList, FiFileText, FiDollarSign, FiStar, FiSettings, FiClock, FiPackage, FiMail, FiUser } from 'react-icons/fi';
import swal from 'sweetalert';
const AddEquipment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    image: '',
    itemName: '',
    categoryName: '',
    description: '',
    price: '',
    rating: 3,
    customization: '',
    processingTime: '',
    stockStatus: 50,
    userEmail: 'user@example.com',
    userName: 'John Doe'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form =e.target;
    const img = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const equipment = {img,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,userEmail,userName}

  

    fetch('https://assignment10backend.vercel.app/equipments', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(equipment)
    })
    .then(res => res.json())
    .then(data =>{
        setIsSubmitting(false); 
        swal("Success!", "Equipment has been added successfully!", "success");
        setFormData({
            image: "",
            itemName: "",
            categoryName: "",
            description: "",
            price: "",
            rating: "",
            customization: "",
            processingTime: "",
            stockStatus: "",
          });
    })
    .catch((error) => {
        setIsSubmitting(false); // Reset loading state on error
        swal("Error!", "Something went wrong. Please try again.", error);
      });
    

    
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white  rounded-2xl shadow-xl overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 animate-fade-in-down">Add New Equipment</h2>
            <p className="mt-2 text-sm text-gray-600 animate-fade-in-up">Enter the details of the new sports equipment</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-fade-in">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                <FiCamera className="inline-block mr-2" />
                Image URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                value={formData.image}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="animate-fade-in">
              <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
                <FiTag className="inline-block mr-2" />
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                id="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Cricket Bat"
              />
            </div>

            <div className="animate-fade-in">
              <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                <FiList className="inline-block mr-2" />
                Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                id="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Sports Equipment"
              />
            </div>

            <div className="animate-fade-in">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                <FiFileText className="inline-block mr-2" />
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="High-quality cricket bat..."
              ></textarea>
            </div>

            <div className="animate-fade-in">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                <FiDollarSign className="inline-block mr-2" />
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="99.99"
              />
            </div>

            <div className="animate-fade-in">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                <FiStar className="inline-block mr-2" />
                Rating
              </label>
              <input
                type="range"
                name="rating"
                id="rating"
                min="1"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
              <div className="text-center mt-2">{formData.rating}</div>
            </div>

            <div className="animate-fade-in">
              <label htmlFor="customization" className="block text-sm font-medium text-gray-700">
                <FiSettings className="inline-block mr-2" />
                Customization
              </label>
              <input
                type="text"
                name="customization"
                id="customization"
                value={formData.customization}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Extra grip, hit paper"
              />
            </div>

            <div className="animate-fade-in">
              <label htmlFor="processingTime" className="block text-sm font-medium text-gray-700">
                <FiClock className="inline-block mr-2" />
                Processing Time
              </label>
              <input
                type="text"
                name="processingTime"
                id="processingTime"
                value={formData.processingTime}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="3-5 business days"
              />
            </div>

            <div className="animate-fade-in">
              <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700">
                <FiPackage className="inline-block mr-2" />
                Stock Status
              </label>
              <input
                type="range"
                name="stockStatus"
                id="stockStatus"
                min="0"
                max="100"
                value={formData.stockStatus}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
              <div className="text-center mt-2">{formData.stockStatus}</div>
            </div>

            <div className="animate-fade-in">
              <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                <FiMail className="inline-block mr-2" />
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                value={user.email}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 sm:text-sm"
              />
            </div>

            <div className="animate-fade-in">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                <FiUser className="inline-block mr-2" />
                Name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                value={user.displayName}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 sm:text-sm"
              />
            </div>

            <div className="animate-fade-in">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Add Equipment'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;