import React, { useState } from 'react'
import Panel from '../../components/Panel'
import Theme from '../../Theme'
import OptionRow from '../../components/OptionRow'

export default function MyOptions() {

	const options = [
		{ positionID: 5, name: "AAPL", type: "call", strike: 12.34, exp: "3/15" },
		{ positionID: 6, name: "AMD", type: "call", strike: 202.44, exp: "4/22" },
		{ positionID: 7, name: "GOOGL", type: "call", strike: 124, exp: "6/19" },
		{ positionID: 8, name: "SPY", type: "call", strike: 122, exp: "1/9" },
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
					"You have not entered any options yet. Search for a stock to view available positions and your purchases will appear here!"
				)}
			</div>
		</Panel>
	)
}

const styles = {
	root: {
		flex: 1,
		height: "20em",
		display: "flex",
		flexDirection: "column"
	},
	optionList: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap"
	},
	option: {
		transition: "background-color .2s"
	},
	optionHover: {
		backgroundColor: Theme.brandLight
	}
}