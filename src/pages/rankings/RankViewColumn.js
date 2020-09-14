import React from 'react'

import { motion } from "framer-motion";

const RankViewColumn = ({ delay = 0, ...restProps}) => (
	<motion.div
		style={{
			flex: 1,
			padding: ".5em",
			margin: ".5em",
		}}
		animate={{
			y: [50, 0],
			opacity: [0, 1],
			transition: {
				delay: delay * 0.2,
				duration: .6,
				ease: "backInOut"
			},
		}}
	>
		{ restProps.children }
	</motion.div>
)

export default RankViewColumn;