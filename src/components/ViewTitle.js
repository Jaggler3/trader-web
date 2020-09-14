import React from 'react'
import { motion } from 'framer-motion'

import Theme from '../Theme'

export default props =>
	<motion.p
		style={{
			fontSize: "2.5em",
			fontWeight: "bold",
			color: Theme.brandColor
		}}
		animate={{
			x: [20, 0],
			opacity: [0, 1],
			transition: {
				duration: .4,
				ease: "easeInOut"
			}
		}}
	>
		{props.children}
	</motion.p>