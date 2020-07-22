import React from 'react'
import { connect } from 'react-redux'
import PorfolioHeader from '../pages/porfolio/PorfolioHeader'
import MoneyDisplay from './MoneyDisplay'

export function StockRow({ name, value, change, condensed, style, onMouseMove, onMouseLeave, ...stateProps }) {
	return (
		<div
			style={{...styles.root, ...style}}
			onClick={() => stateProps.openStockView(name)}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
		>
			{condensed ? (
				<>
					<p style={styles.nameCondensed}>{name}</p>
					<p style={{ flex: 1 }}></p>
					<MoneyDisplay percent={change} caret colored />
				</>
			) : (
				<>
					<p style={styles.name}>{name}</p>
					<p>{change}</p>
					<p>{value}</p>
				</>
			)}
		</div>
	)
}

const mapStateToProps = (state) => ({
	
})
const mapDispatchToProps = (dispatch) => {
	return {
		openStockView: name => dispatch({ type: "open stock view", payload: name })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StockRow)


const styles = {
	root: {
		cursor: "pointer",
		height: "2em",
		display: "flex",
		flexDirection: "row",
		borderRadius: ".5em",
		userSelect: "none"
	},
	name: {
		fontSize: "1.25em",
	},
	nameCondensed: {
		fontSize: "1.25em",
	},
}
