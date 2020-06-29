import React from 'react'

export default function ViewPage(props) {
	return (
		<div style={{
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			position: "relative"
		}}>
			{ props.children }
		</div>
	)
}
