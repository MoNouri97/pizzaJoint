import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      exit={{ x: '-100vh', transition: { ease: 'easeInOut' } }}
      transition={{ delay: 0.5 }}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.3,
            textShadow: "0 0 8px rgb(255,255,255)",
            boxShadow: "0 0 8px rgb(255,255,255)",
            transition: { yoyo: Infinity }
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;