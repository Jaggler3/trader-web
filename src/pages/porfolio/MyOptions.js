import React, { useState } from 'react'
import Panel from '../../components/Panel'
import Theme from '../../Theme'
import { OptionRow } from '../../components/OptionRow'

export default function MyOptions() {

	const options = [
		{ positionID: 5, name: "AAPL", strike: 12.34, exp: "3/15" },
		{ positionID: 6, name: "AAPL", strike: 12.34, exp: "3/15" },
		{ positionID: 7, name: "AAPL", strike: 12.34, exp: "3/15" },
		{ positionID: 8, name: "AAPL", strike: 12.34, exp: "3/15" },
	]

	const [hover, setHover] = useState(null)

	return (
		<Panel title="my options" style={styles.root}>
			<div style={styles.optionList}>
				{options.length > 0 && options.map(item => (
					<OptionRow
						key={item.positionID}
						style={{ ...styles.option, ...(hover === item.positionID ? styles.optionHover : {}) }}
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
	optionList: {
		display: "flex",
		flexDirection: "column",
	},
	option: {
		padding: "1em",
		transition: "background-color .2s"
	},
	optionHover: {
		backgroundColor: Theme.brandLight
	}
}