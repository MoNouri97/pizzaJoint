import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: {
    x: '100vh',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', delay: .5 }
  },
  exit: { x: '-100vh', transition: { ease: 'easeInOut' } }

}

const nextVariants = {
  hidden: { x: '-100vh' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 90 }
  },
}


const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                textShadow: "0 0 8px rgb(255,255,255)",
                originX: 0
              }}
              transition={{
                type: 'spring'
                , stiffness: 300
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        // not needed cuz of variants propagation
        // initial="hidden"
        // animate="visible"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.3,
                textShadow: "0 0 8px rgb(255,255,255)",
                boxShadow: "0 0 8px rgb(255,255,255)"
              }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;