import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoneyDisplay from './MoneyDisplay'

export function OptionRow({ positionID, name, type, strike, exp, style, onMouseMove, onMouseLeave, ...stateProps }) {

	let currentValue = 1000;

	return (
		<div
			style={{...styles.root, ...style}}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
			onClick={() => stateProps.openOptionData(name, positionID)}
		>
			<div style={styles.vbox}>
				<p style={styles.name}>{name}</p>
				<p style={styles.type}>{type.toUpperCase()}</p>
			</div>
			<p style={{ flex: 1 }}></p>
			<div style={styles.vbox}>
				<p style={styles.exp}>{exp}</p>
				<div style={styles.showChange}>
					<MoneyDisplay value={strike} size="1.5em"/>
					<i style={styles.showChangeArrow} className="fas fa-arrow-right"></i>
					<MoneyDisplay value={currentValue} size="1.5em" colored red={strike > currentValue} />
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	
})
const mapDispatchToProps = (dispatch) => {
	return {
		openOptionData: (name, positionID) => dispatch({ type: "open option data", payload: { name: name, positionID: positionID }})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionRow)


const styles = {
	root: {
		width: "calc(50% - 4em)",
		cursor: "pointer",
		height: "2em",
		display: "flex",
		flexDirection: "row",
		padding: "2em",
		borderRadius: ".5em"
	},
	vbox: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	},
	name: {
		fontSize: "1.5em",
	},
	type: {
		fontSize: ".8em"
	},
	exp: {
		color: "gray",
		fontStyle: "italic",
		textAlign: "right"
	},
	showChange: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	showChangeArrow: {
		margin: "0 .5em 0 .5em"
	}
}
