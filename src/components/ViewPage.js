import React from 'react'
import { motion } from "framer-motion";

export default props =>
	<motion.div
		style={{
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
			position: "relative",
			padding: "4em 5% 10em 5%",
			...props.style
		}}
	>
		{ props.children }
	</motion.div>
