import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
import { 
  Image, 
  ShoppingCart, 
  Tag, 
  FileText, 
  DollarSign, 
  Star, 
  Paintbrush, 
  Clock, 
  Package, 
  Mail, 
  User,
  Save
} from 'lucide-react';

const Update = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const equipment = useLoaderData();
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
    const form = e.target;
    const updatedEquipment = {
      img: form.image.value,
      itemName: form.itemName.value,
      categoryName: form.categoryName.value,
      description: form.description.value,
      price: form.price.value,
      rating: form.rating.value,
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: form.stockStatus.value,
      userEmail: form.userEmail.value,
      userName: form.userName.value
    };

    fetch(`https://assignment10backend.vercel.app/equipments/${equipment._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedEquipment)
    })
      .then(res => res.json())
      .then(data => {
        setIsSubmitting(false);
        if (data.modifiedCount > 0) {
          swal("Success!", "Equipment has been updated successfully!", "success");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        swal("Error!", "Something went wrong. Please try again.", error);
      });
  };

  const InputField = ({ icon: Icon, label, name, type = "text", defaultValue, onChange, placeholder, readonly = false, min, max }) => (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
        <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
          className="px-4 py-2 bg-white dark:bg-[#111318] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full text-sm rounded-lg focus:outline-none text-gray-600 dark:text-gray-200 transition-all duration-200 min-h-[100px] placeholder-gray-400 dark:placeholder-gray-500"
          placeholder={placeholder}
          readOnly={readonly}
        />
      ) : (
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
          className={`px-4 py-2 bg-white dark:bg-[#111318] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full text-sm rounded-lg focus:outline-none text-gray-600 dark:text-gray-200 transition-all duration-200 ${readonly ? 'bg-gray-50 dark:bg-[#1A1D24]' : ''} placeholder-gray-400 dark:placeholder-gray-500`}
          placeholder={placeholder}
          readOnly={readonly}
          min={min}
          max={max}
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#080A0F] py-12">
      <Helmet>
        <title>Update Equipment</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-[#111318] rounded-2xl shadow-lg dark:shadow-xl overflow-hidden dark:border dark:border-gray-800">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex flex-shrink-0 justify-center items-center text-blue-500 dark:text-blue-400">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Update Equipment</h2>
                <p className="text-gray-500 dark:text-gray-400">Edit the details of your equipment listing</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  icon={Image}
                  label="Image URL"
                  name="image"
                  defaultValue={equipment.img}
                  onChange={handleChange}
                  placeholder="http://example.com/image.jpg"
                />
                
                <InputField
                  icon={ShoppingCart}
                  label="Item Name"
                  name="itemName"
                  defaultValue={equipment.itemName}
                  onChange={handleChange}
                  placeholder="Cricket Bat"
                />

                <InputField
                  icon={Tag}
                  label="Category Name"
                  name="categoryName"
                  defaultValue={equipment.category}
                  onChange={handleChange}
                  placeholder="Sports Equipment"
                />

                <InputField
                  icon={DollarSign}
                  label="Price"
                  name="price"
                  type="number"
                  defaultValue={equipment.price}
                  onChange={handleChange}
                  placeholder="99.99"
                />

                <InputField
                  icon={Star}
                  label="Rating"
                  name="rating"
                  type="number"
                  defaultValue={equipment.rating}
                  onChange={handleChange}
                  placeholder="4.5"
                  min="1"
                  max="5"
                />

                <InputField
                  icon={Paintbrush}
                  label="Customization"
                  name="customization"
                  defaultValue={equipment.customization}
                  onChange={handleChange}
                  placeholder="Extra grip, hit paper"
                />

                <InputField
                  icon={Clock}
                  label="Processing Time"
                  name="processingTime"
                  defaultValue={equipment.processingTime}
                  onChange={handleChange}
                  placeholder="3-5 business days"
                />

                <InputField
                  icon={Package}
                  label="Stock Status"
                  name="stockStatus"
                  type="number"
                  defaultValue={equipment.stockStatus}
                  onChange={handleChange}
                  placeholder="100"
                />

                <InputField
                  icon={Mail}
                  label="Email"
                  name="userEmail"
                  type="email"
                  defaultValue={equipment.userEmail}
                  readonly={true}
                />

                <InputField
                  icon={User}
                  label="Name"
                  name="userName"
                  defaultValue={equipment.userName}
                  readonly={true}
                />
              </div>

              <InputField
                icon={FileText}
                label="Description"
                name="description"
                type="textarea"
                defaultValue={equipment.description}
                onChange={handleChange}
                placeholder="High-quality cricket bat..."
              />

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      <span>Update Equipment</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;