import React from 'react'
import PorfolioHeader from '../pages/porfolio/PorfolioHeader'
import MoneyDisplay from './MoneyDisplay'

export default function StockRow({ name, value, change, condensed, style, ...restProps }) {
	return condensed ?
	(
		<div style={{...styles.root, ...style}} {...restProps}>
			<p style={styles.nameCondensed}>{name}</p>
			<p style={{ flex: 1 }}></p>
			<MoneyDisplay percent={change} caret colored />
		</div>
	) : (
		<div style={styles.root}>
			<p style={styles.name}>{name}</p>
			<p>{change}</p>
			<p>{value}</p>
		</div>
	)
}

const styles = {
	root: {
		cursor: "pointer",
		height: "2em",
		display: "flex",
		flexDirection: "row",
	},
	name: {
		fontSize: "1.25em",
	},
	nameCondensed: {
		fontSize: "1.25em",
	},
	endCondensed: {
	}
}
