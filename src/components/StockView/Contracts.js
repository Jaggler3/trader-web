import React, { useState } from 'react'
import { connect } from 'react-redux'

import Button from '../Button'
import { OptionRow } from '../OptionRow'
import Theme from '../../Theme'

export const Contracts = ({ name }) => {

	const options = [
		{ positionID: 10, name: name, type: "call", strike: 12.34, exp: "3/15" },
		{ positionID: 11, name: name, type: "call", strike: 202.44, exp: "4/22" },
	]

	const [hover, setHover] = useState(null)

	return (
		<div style={styles.root}>
			<p style={styles.holdings}><strong>{5}</strong> options</p>
			<div style={styles.values}>
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
			<div style={styles.actions}>
				<Button name="Buy" />
				<span style={{ width: "1em" }}></span>
				<Button name="Write" />
			</div>
		</div>
	)
}

const styles = {
	root: {
		padding: "1em 25% 1em 25%"
	},
	holdings: {
		fontSize: "2em",
		marginBottom: ".5em"
	},
	values: {
		display: "flex",
		flexDirection: "row",
		paddingBottom: "2em"
	},
	actions: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center"
	},
	option: {
		transition: "background-color .2s"
	},
	optionHover: {
		backgroundColor: Theme.brandLight
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Contracts)
