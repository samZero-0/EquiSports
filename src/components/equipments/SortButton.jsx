import React from 'react';
import { FaSort } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SortButton = ({ sortOrder, onSort }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSort}
      className="bg-white border border-gray-200 shadow-sm text-gray-800 font-semibold py-2 px-4 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
        flex items-center gap-2 transition-all duration-200"
    >
      <FaSort className="text-blue-600" />
      <span>Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})</span>
    </motion.button>
  );
};

export default SortButton;