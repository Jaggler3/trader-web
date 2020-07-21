import React, { useState } from 'react'

export default function Dropdown({ options, onSelect, onSelectIndex }) {
	
	const [selection, setSelection] = useState(0)
	const [expanded, setExpanded] = useState(false)

	const select = (index) => {
		setSelection(index);
		setExpanded(false)
		if(onSelect) onSelect(options[index])
		if(onSelectIndex) onSelectIndex(index)
	}
	
	return (
		<div style={styles.root}>
			<div
				style={styles.selection}
				onClick={() => setExpanded(true)}
			>
				{options && options.length > 0 && (
					<p>{options[selection]}</p>
				)}
			</div>
			<div style={styles.optionList}>
				{options && options.length > 0 && options.map((option, index) => (
					<p
						style={styles.option}
						onClick={() => select(index)}
					>{option}</p>
				))}
			</div>
		</div>
	)
}

const styles = {
	root: {
		maxHeight: "2em"
	},
	selection: {
		lineHeight: "2em"
	},
	optionList: {

	},
	option: {
		
	}
}
