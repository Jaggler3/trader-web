import React from 'react'
import { motion } from 'framer-motion'
import Theme from '../../Theme'

export default function AchievementDisplay({ item, completed, animDelay }) {
	return (
		<motion.div
			animate={{
				x: [50, 0],
				opacity: [0, completed ? 0.5 : 1],
				transition: {
					duration: 0.25,
					delay: animDelay * 0.1
				}
			}}
			style={{ ...styles.root, ...(completed ? styles.rootCompleted : {})}}
		>
			<i style={styles.icon} className={(completed ? "fas" : "far") + " fa-star"}></i>
			<div style={{ ...styles.container, ...(completed ? styles.containerCompleted : {})}}>
				<i style={styles.itemIcon} className={item.icon}></i>
				<p style={styles.itemName}>{item.name}</p>
			</div>
		</motion.div>
	)
}

const styles = {
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		margin: "1em 0 1em 0"
	},
	rootCompleted: {
		margin: ".5em 6em .5em 6em",
	},
	icon: {
		fontSize: "1.5em",
		color: Theme.brandColor,
		marginRight: "1.5em"
	},
	container: {
		border: "1px solid " + Theme.brandHover,
		padding: "2em",
		borderRadius: "1em",
		flex: 1,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	containerCompleted: {
		padding: "1.5em"
	},
	itemIcon: {
		fontSize: "2em",
		marginRight: "1em"
	},
	itemName: {
		fontWeight: "bold"
	}
}