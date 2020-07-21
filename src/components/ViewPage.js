import React from 'react'

import { motion } from "framer-motion";

export default function ViewPage(props) {
	return (
		<motion.div
			style={{
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
				position: "relative",
				padding: "4em 10em 10em 10em",
				...props.style
			}}
		>
			{ props.children }
		</motion.div>
	)
}
