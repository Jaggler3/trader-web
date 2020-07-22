import React from 'react'
import Theme from '../Theme'

export default function Button({ name, onClick, ...props }) {
	return (
		<div
			style={styles.root}
			onClick={onClick}
		>
			<p style={styles.name}>{name}</p>
		</div>
	)
}

const styles = {
	root: {
		padding: ".75em",
		borderRadius: "1.5em",
		backgroundColor: Theme.brandColor,
		minWidth: "4em",
		cursor: "pointer"
	},
	name: {
		color: "white",
		textAlign: "center"
	}
}