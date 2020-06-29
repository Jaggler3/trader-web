import React, { useState } from 'react'
import Panel from '../../components/Panel'
import StockRow from '../../components/StockRow'

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
		height: "20em",
		display: "flex",
		flexDirection: "column"
	},
	stockList: {
		flex: 1,
		width: "25em",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		position: "relative"
	},
	stockItem: {
		width: "calc(50% - 5em)",
		padding: "1em",
		backgroundColor: "transparent",
	},
	stockItemHover: {
		backgroundColor: "rgba(0, 0, 0, 0.025)"
	}
}