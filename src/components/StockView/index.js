import React from 'react'
import { connect } from 'react-redux'
import Scrollbar from 'react-scrollbars-custom'

import { ModalOverlay, ModalContainer } from '../Modal'
import StockViewHeader from './StockViewHeader'
import BigStockChart from '../BigStockChart'
import TabSelect from '../TabSelect';
import Ownership from './Ownership'
import Contracts from './Contracts'

const StockView = (props) => {
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
	
	const selectTab = (tab) => {
		props.setStockViewTab(tab)
	}

	return (
		<ModalOverlay>
			<ModalContainer>
				<StockViewHeader
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
						<br/>
						<TabSelect
							tabNames={["stocks", "options"]}
							onSelect={selectTab}
							initial={props.stockViewTab}	
						/>
						{props.stockViewTab === "stocks" ? (
							<Ownership />
						) : (
							<Contracts name={props.stockViewSymbol} />
						)}
					</div>
				</Scrollbar>
			</ModalContainer>
		</ModalOverlay>
	)
}

const mapStateToProps = (state) => {
	return {
		stockViewTab: state.ui.stockViewTab,
		stockViewSymbol: state.ui.stockViewSymbol
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setStockViewTab: tabName => dispatch({ type: "open stock tab", payload: tabName })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StockView)

const styles = {
	mainContainer: {
		flex: 1
	},
	content: {
		padding: "2em"
	}
}