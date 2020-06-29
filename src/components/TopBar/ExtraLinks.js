import React from 'react'
import Theme from '../../Theme'

export default function ExtraLinks() {
	return (
		<div style={styles.root}>
			<p style={styles.item}>SHOP</p>
		</div>
	)
}

const styles = {
	root: {
		position: "absolute",
		top: "1em",
		right: "1em",
		height: "3em",
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	item: {
		fontSize: "1.25em",
		fontWeight: "bold",
		color: Theme.brandColor
	}
}
