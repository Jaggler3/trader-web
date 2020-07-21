import React, { useState } from 'react'
import Panel from '../../components/Panel'
import StockRow from '../../components/StockRow'
import Theme from '../../Theme'

export default function MyStocks() {

	const stocks = [
		{ positionID: 0, name: "AAPL", change: 2.53 },
		{ positionID: 1, name: "REGN", change: -0.23 },
		{ positionID: 2, name: "WBA", change: 7.37 },
		{ positionID: 3, name: "VTR", change: 5.67 },
	]

	const [hover, setHover] = useState(null)

	return (
		<Panel title="my stocks" style={styles.root}>
			<div style={styles.stockList}>
				{stocks.length > 0 && stocks.map(item => (
					<StockRow
						key={item.positionID}
						style={{ ...styles.stock, ...(hover === item.positionID ? styles.stockHover : {}) }}
						condensed
						{...item}
						onMouseMove={() => setHover(item.positionID)}
						onMouseLeave={() => setHover(null)}
					/>
				)) || (
					"You have no investments to show yet. Search for a stock to buy and your purchases will appear here!"
				)}
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
		flexWrap: "wrap",
	},
	stock: {
		width: "calc(33.33% - 2em)",
		padding: "1em",
		transition: "background-color .2s"
	},
	stockHover: {
		backgroundColor: Theme.brandLight
	}
}