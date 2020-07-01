import React, { useState } from 'react'
import Theme from '../Theme';

export default function TabSelect({ tabNames, onSelect, ...restProps }) {

	const [selecton, setSelection] = useState(0);

	const select = (index) => {
		setSelection(index);
		onSelect(tabNames[index])
	}

	return (
		<div style={{...styles.root, ...restProps.style}}>
			{ tabNames && tabNames.map((tab, index) => (
				<div
					style={{...styles.item, ...(selecton === index ? styles.itemSelected : {})}}
					key={tab}
					onClick={() => { select(index) }}
				>{ tab.toUpperCase() }</div>
			))}
		</div>
	)
}

const styles = {
	root: {
		display: "flex",
		flexDirecton: "row"
	},
	item: {
		fontWeight: "bold",
		fontSize: "1.25em",
		borderBottom: ".1em solid " + Theme.brandHover,
		cursor: "pointer",
		transition: "border .25s, height .25s",
		padding: "0 1.5em 0 1.5em",
		height: "2em",
		lineHeight: "2em",
		flex: 1,
		userSelect: "none",
		opacity: .5
	},
	itemSelected: {
		borderBottom: ".25em solid " + Theme.brandColor,
		height: "1.85em",
		opacity: 1
	}
}
