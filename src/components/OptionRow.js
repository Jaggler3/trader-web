import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoneyDisplay from './MoneyDisplay'

export function OptionRow({ name, strike, exp, style, onMouseMove, onMouseLeave }) {
	return (
		<div
			style={{...styles.root, ...style}}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
		>
			<p style={styles.name}>{name}</p>
			<p style={{ flex: 1 }}></p>
			<MoneyDisplay value={strike} />
			<p style={{ flex: 1 }}></p>
			<p style={styles.name}>{exp}</p>
		</div>
	)
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionRow)


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
}
