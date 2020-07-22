import React from 'react'
import { connect } from 'react-redux'
import Scrollbar from 'react-scrollbars-custom'
import { ModalOverlay, ModalContainer } from '../Modal'
import OptionViewHeader from '../StockAction/OptionViewHeader'
import BigStockChart from '../BigStockChart'
import MoneyDisplay from '../MoneyDisplay'

export const OptionData = ({ strike = 20, currentValue = 30 }) => {
	return (
		<div style={styles.optionDataContainer}>
			<p style={styles.positionID}>ID: 99999999</p>
			<p style={styles.optionType}>CALL <em>3/19</em></p>
			<br/>
			<div style={styles.showChange}>
				<p>Value:&nbsp;</p>
				<MoneyDisplay value={strike} />
				<i style={styles.showChangeArrow} className="fas fa-arrow-right"></i>
				<MoneyDisplay value={currentValue} colored red={strike > currentValue} />
				<p style={styles.multiplier}>
					<i className="fas fa-times"></i>
					&nbsp;100
				</p>
			</div>
			<br/>
			<div style={styles.showReturn}>
				<p>Return:&nbsp;</p>
				<div>
					<MoneyDisplay percent={(currentValue / strike - 1) * 100} caret colored />
					<MoneyDisplay value={(currentValue - strike) * 100} colored red={strike > currentValue} size="2em" />
				</div>
			</div>
		</div>
	)
}

export const OptionView = (props) => {

	const stockAvg = [
		{ time: "18:05", value: 1.05 },
		{ time: "18:10", value: 1.09 },
		{ time: "18:15", value: 1.11 },
		{ time: "18:20", value: 1.21 },
		{ time: "18:25", value: 1.16 },
		{ time: "18:30", value: 1.75 },
		{ time: "18:35", value: 1.65 },
		{ time: "18:40", value: 2.05 },
	];

	const getDaily = () => {
		let last = stockAvg[stockAvg.length - 1].value;
		let first = stockAvg[0].value;
		
		return (last - first) / first;
	}

	return (
		<div>
			<ModalOverlay>
				<ModalContainer>
					<OptionViewHeader
						name={props.stockViewSymbol}
						value={getDaily().toFixed(2)}
					/>
					<Scrollbar style={styles.mainContainer}>
						<div style={styles.content}>
							<BigStockChart
								data={stockAvg}
								x="time"
								y="value"
							/>
							<OptionData />
						</div>
					</Scrollbar>
				</ModalContainer>
			</ModalOverlay>
		</div>
	)
}

const styles = {
	mainContainer: {
		flex: 1
	},
	content: {
		padding: "2em"
	},
	optionDataContainer: {
		padding: "2em 25% 2em 25%"
	},
	positionID: {
		fontSize: ".75em",
		color: "gray",
		opacity: .75
	},
	optionType: {
		fontSize: "1.25em",
		fontWeight: "bold"
	},
	showChange: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		fontSize: "1.5em"
	},
	showChangeArrow: {
		margin: "0 .5em 0 .5em"
	},
	multiplier: {
		margin: ".4em 0 0 .75em",
		fontSize: ".75em",
		color: "gray",
		opacity: .75
	},
	showReturn: {
		display: "flex",
		flexDirection: "row",
		fontSize: "1.5em"
	}
}

const mapStateToProps = (state) => ({
	stockViewSymbol: state.ui.stockViewSymbol,
	optionViewPositionID: state.ui.optionViewPositionID
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionView)
