import  { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import swal from 'sweetalert';

const AddEquipment = () => {
    const {user} =useContext(AuthContext)
    const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    image: '',
    itemName: '',
    categoryName: '',
    description: '',
    price: '',
    rating: '',
    customization: '',
    processingTime: '',
    stockStatus: '',
   
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
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 w-full mx-auto ">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0  rounded-3xl sm:p-10">
          <div className="w-8/12 mx-auto ">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Add New Equipment</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Enter the details of the new equipment</p>
              </div>
            </div>
            <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Image URL</label>
                  <input type="text" name="image" value={formData.image} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="http://example.com/image.jpg" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Item Name</label>
                  <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Cricket Bat" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Category Name</label>
                  <input type="text" name="categoryName" value={formData.categoryName} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Sports Equipment" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="High-quality cricket bat..."></textarea>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Price</label>
                  <input type="number" name="price" value={formData.price} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="99.99" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Rating</label>
                  <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="4.5" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Customization</label>
                  <input type="text" name="customization" value={formData.customization} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Extra grip, hit paper" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Processing Time</label>
                  <input type="text" name="processingTime" value={formData.processingTime} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="3-5 business days" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Stock Status</label>
                  <input type="number" name="stockStatus" value={formData.stockStatus} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="100" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Email </label>
                  <input type="email" name="userEmail" value={user.email} readOnly className="px-4 py-2 border bg-gray-100 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose"> Name </label>
                  <input type="text" name="userName" value={user.displayName} readOnly className="px-4 py-2 border bg-gray-100 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"> {isSubmitting ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Create"
                  )}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;