import React from 'react'
import { motion } from 'framer-motion'

export const ModalOverlay = ({ children }) => (
	<motion.div
		animate={{
			opacity: [0, 1],
			transition: {
				duration: 0.25
			}
		}}
		style={styles.modalOverlay}
	>
		{children}
	</motion.div>
)

export const ModalContainer = ({ children }) => (
	<motion.div
		animate={{
			y: [window.innerHeight, 0],
			transition: {
				duration: 0.4,
				ease: "easeInOut",
				delay: .25
			}
		}}
		style={styles.modalContainer}
	>
		{children}
	</motion.div>
)

const styles = {
	modalOverlay: {
		zIndex: 2,
		position: "fixed",
		top: 0,
		left: 0,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		width: "100vw",
		height: "100vh"
	},
	modalContainer: {
		width: "90vw",
		height: "90vh",
		borderRadius: "2em",
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		paddingBottom: "2em",
		boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.5)"
	}
}