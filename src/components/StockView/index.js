import React from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import Scrollbar from 'react-scrollbars-custom'

import StockViewHeader from './StockViewHeader'
import BigStockChart from '../BigStockChart'
import TabSelect from '../TabSelect';

export const ModalOverlay = ({ children }) => (
		<motion.div
			animate={{
				opacity: [0, 1],
				transition: {
					duration: 0.25
				}
			}}
			style={styles.modalOverlay}
		>
			{ children }
		</motion.div>
)

export const ModalContainer = ({ children }) => (
	<motion.div
		animate={{
			y: [window.innerHeight, 0],
			transition: {
				duration: 0.4,
				ease: "easeInOut",
				delay: .25
			}
		}}
		style={styles.modalContainer}
	>
		{ children }
	</motion.div>
)

export const Ownership = () => (
	<p>ownership</p>
)

export const Options = () => (
	<p>options</p>
)

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
						/>
						{props.stockViewTab === "stocks" ? (
							<Ownership />
						) : (
							<Options />
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
	modalOverlay: {
		zIndex: 2,
		position: "fixed",
		top: 0,
		left: 0,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		width: "100vw",
		height: "100vh"
	},
	modalContainer: {
		width: "90vw",
		height: "90vh",
		borderRadius: "2em",
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		paddingBottom: "2em",
		boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.5)"
	},
	chartContainer: {
		position: "relative",
		width: "100%",
		boxSizing: "border-box",
		padding: "1em 2em 1em 1em"
	},
	mainContainer: {
		flex: 1
	},
	content: {
		padding: "2em"
	}
}