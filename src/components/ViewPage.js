import React from 'react'

export default function ViewPage(props) {
	return (
		<div style={{
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			position: "relative",
			padding: "4em 10em 10em 10em",
		}}>
			{ props.children }
		</div>
	)
}
