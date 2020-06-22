import React, { useState } from 'react'
import Theme from '../../Theme'
import { Link } from 'react-router-dom'

export default function ViewButton({name, icon, path}) {
	const [hovering, setHovering] = useState(false)
	return (
		<Link to={path} style={{ textDecoration: 'none' }}>
			<div
				onMouseMove={() => {
					setHovering(true)
				}}
				onMouseLeave={() => {
					setHovering(false)
				}}
				
				style={{ ...styles.root, ...(hovering ? styles.rootHover : {}) }}
				>
				<div style={styles.inner}>
					<p style={styles.iconParent}><i className={icon} style={{ ...styles.icon, ...(hovering ? styles.iconHover : {}) }}></i></p>
					<p style={{ ...styles.name, ...(hovering ? styles.nameHover : {}) }}>{name}</p>
				</div>
			</div>
		</Link>
	)
}

const styles = {
	root: {
		borderRadius: "2em",
		width: "4em",
		height: "4em",
		cursor: "pointer",
		overflow: "hidden",
		transition: "width .15s ease-in-out, box-shadow .15s",
		marginTop: ".75em",
		marginBottom: ".75em",
	},
	rootHover: {
		width: "15em",
		boxShadow: "0 0 .5em rgba(0, 0, 0, 0.2)"
	},
	inner: {
		display: "flex",
		backgroundColor: Theme.brandHover,
		flexDirection: "row",
		alignItems: "center",
		height: "4em",
		width: "15em",
	},
	iconParent: {
		textAlign: "center",
		width: "4em"
	},
	icon: {
		color: "white",
		fontSize: "2em",
		transition: "font-size .25s"
	},
	iconHover: {
		fontSize: "2.25em",	
	},
	name: {
		color: "white",
		fontWeight: "bold",
		marginTop: ".5em",
		opacity: ".25",
		transition: "margin-top .25s ease-in-out, opacity .25s",
		fontSize: "1.25em",
	},
	nameHover: {
		opacity: "1",
		marginTop: "0"
	}
}