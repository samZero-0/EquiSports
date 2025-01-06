
import { motion } from 'framer-motion';

const Header = ({ title }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-20 bg-orange-200 "
    >
      <motion.div 
        className="absolute inset-0 opacity-50"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1920')"
        }}
      />
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-black text-center relative z-10"
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Header;