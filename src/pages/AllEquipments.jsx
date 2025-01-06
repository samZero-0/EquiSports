import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../components/equipments/header';
import SortButton from '../components/equipments/SortButton';
import EquipmentCard from '../components/equipments/EquipmentCard';


const AllEquipments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const equipment = useLoaderData();
  const [sortedEquipment, setSortedEquipment] = useState(equipment);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedData = [...sortedEquipment].sort((a, b) => {
      return newOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    setSortedEquipment(sortedData);
    setSortOrder(newOrder);
  };

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
    <>
      <Helmet>
        <title>All Equipments</title>
      </Helmet>

      <Header title="Sports Equipment Collection" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <SortButton sortOrder={sortOrder} onSort={handleSort} />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {sortedEquipment.map((item) => (
            <EquipmentCard key={item._id} item={item} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AllEquipments;