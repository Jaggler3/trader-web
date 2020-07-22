import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ModalOverlay, ModalContainer } from '../Modal'
import OptionViewHeader from '../StockAction/OptionViewHeader'
import BigStockChart from '../BigStockChart'
import Scrollbar from 'react-scrollbars-custom'

export const OptionView = () => {

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
						name={"NAME"}
						value={getDaily().toFixed(2)}
					/>
					<Scrollbar style={styles.mainContainer}>
						<div style={styles.content}>
							<BigStockChart
								data={stockAvg}
								x="time"
								y="value"
							/>
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
	}
}

const mapStateToProps = (state) => ({
	stockViewSymbol: state.ui.stockViewSymbol,
	optionViewPositionID: state.ui.optionViewPositionID
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionView)
