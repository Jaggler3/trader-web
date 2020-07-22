import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoneyDisplay from '../MoneyDisplay'
import Button from '../Button'

export const Ownership = () => {
	return (
		<div style={styles.root}>
			<p style={styles.holdings}><strong>{11}</strong> shares owned</p>
			<div style={styles.values}>
				<div style={styles.valueContainer}>
					<MoneyDisplay value={1238.52} colored size="1.5em" />
					<p style={styles.value}>Value</p>
				</div>
				<div style={styles.valueContainer}>
					<MoneyDisplay value={-18.22} percent={-2.5} caret colored size="1.5em" />
					<p style={styles.value}>Today</p>
				</div>
			</div>
			<div style={styles.actions}>
				<Button name="Buy" />
				<span style={{ width: "1em" }}></span>
				<Button name="Sell" />
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
	},
	valueContainer: {
		marginRight: "1em"
	},
	actions: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center"
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Ownership)
