import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '100vh',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring', delay: 0.5, damping: 10, stiffness: 120,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
}
const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  },
  exit: { x: '-100vh', transition: { ease: 'easeInOut' } }

}

const Order = ({ pizza, setModal }) => {
  useEffect(() => {
    setTimeout(() => setModal(true), 5000)
    console.log('enter');
  }, [setModal])

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >

      <h2>Thank you for your order :</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>


      {pizza.toppings.map(topping => <motion.div key={topping}
        variants={childVariants}
      >{topping}</motion.div>)}
    </motion.div>
  )
}

export default Order;