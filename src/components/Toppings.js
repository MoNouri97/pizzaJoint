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
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial='hidden'
      animate="visible"
      exit='exit'
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
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
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.3,
            textShadow: "0 0 8px rgb(255,255,255)",
            boxShadow: "0 0 8px rgb(255,255,255)"
          }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;