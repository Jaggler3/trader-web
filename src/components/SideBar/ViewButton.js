import React, { useState } from 'react'
import Theme from '../../Theme'
import { Link } from 'react-router-dom'

export default function ViewButton({name, icon, path, onClick, selected}) {
	const [hovering, setHovering] = useState(false)
	return (
		<Link
			to={path}
			style={{ textDecoration: 'none' }}
			onClick={onClick}
		>
			<div
				onMouseMove={() => {
					setHovering(true)
				}}
				onMouseLeave={() => {
					setHovering(false)
				}}
				
				style={{
					...styles.root,
					...(selected ? styles.rootSelected : (
						hovering ? styles.rootHover : {}
					))
				}}
				>
				<i
					className={icon}
					style={{ ...styles.icon, ...(selected ? styles.iconSelected : {}) }}
				></i>
			</div>
		</Link>
	)
}

const styles = {
	root: {
		width: "3.5em",
		height: "3.5em",
		cursor: "pointer",
		overflow: "hidden",
		transition: "background-color .15s",
		marginTop: ".75em",
		marginBottom: ".75em",
		boxSizing: "border-box",
		transform: "rotate(45deg)",
		borderRadius: "1em",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	rootSelected: {
		backgroundColor: "white",
		boxShadow: "0 0 1em rgba(100, 100, 100, 0.25)"
	},
	rootHover: {
		backgroundColor: Theme.brandHover
	},
	icon: {
		color: "white",
		fontSize: "1.75em",
		transition: "color .25s, opacity .25s",
		transform: "rotate(-45deg)",
	},
	iconSelected: {
		color: Theme.brandColor,
		opacity: ".8"
	}
}