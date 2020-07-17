import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const backdropVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1
	}
}
const modalVariants = {
	hidden: {
		y: '-100vh',
		opacity: 0
	},
	visible: {
		y: 200,
		opacity: 1,
		transition: {
			delay: 0.5
		}
	}
}

export const Modal = ({ modal, setModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{modal && (
				<motion.div className='backdrop'
					variants={backdropVariants}
					animate='visible'
					initial='hidden'
					exit='hidden'
				>
					<motion.div className='modal'
						variants={modalVariants}
					>
						<p>make another one ?</p>
						<Link to='/'>
							<button>Start Again</button>
						</Link>
					</motion.div>

				</motion.div>
			)}
		</AnimatePresence>
	)
}
