import React, { useState } from 'react'
import Panel from '../../components/Panel'
import StockRow from '../../components/StockRow'
import Theme from '../../Theme'

export default function MyStocks() {

	const stocks = [
		{ name: "AAPL", change: "2.53"},
		{ name: "REGN", change: "0.23"},
		{ name: "WBA", change: "7.37"},
		{ name: "VRTX", change: "7.77"},
		{ name: "VTR", change: "5.67"},
	]

	const [hover, setHover] = useState(null)

	return (
		<Panel title="my stocks" style={styles.root}>
			<div style={styles.stockList}>
				{stocks.map(item => (
					<StockRow
						key={item.name}
						style={{ ...styles.stockItem, ...(hover === item.name ? styles.stockItemHover : {}) }}
						condensed
						{...item}
						onMouseMove={() => setHover(item.name)}
						onMouseLeave={() => setHover(null)}
					/>
				))}
			</div>
		</Panel>
	)
}

const styles = {
	root: {
		width: "100%",
		height: "20em",
		display: "flex",
		flexDirection: "column"
	},
	stockList: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap"
	},
	stockItem: {
		width: "calc(33% - 1.75em)",
		padding: "1em",
	},
	stockItemHover: {
		backgroundColor: Theme.brandLight
	}
}