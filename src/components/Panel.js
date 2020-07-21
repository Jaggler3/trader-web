import React, { useState } from 'react'
import Theme from '../Theme'

export default function Panel({ title, style, children, ...props}) {
	const [hover, setHover] = useState(false)
	return (
		<div
			onMouseMove={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				...styles.root,
				...(hover ? styles.rootHover : {}),
				...style
			}}
			{...props}
		>
			<p style={styles.title}>{title.toUpperCase()}</p>
			{ children }
		</div>
	)
}

const styles = {
	root: {
		margin: "1em",
		padding: "1em",
		minHeight: "5em",
		minWidth: "10em",
		transition: "background-color .25s"
	},
	rootHover: {
		backgroundColor: "rgba(0, 0, 0, 0.025)"
	},
	title: {
		color: Theme.brandColor,
		fontWeight: "bold",
		fontSize: "1.25em",
		marginBottom: "1em"
	}
}