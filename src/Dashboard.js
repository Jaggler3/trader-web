import React from 'react'
import Scrollbar from 'react-scrollbars-custom'
import { connect } from 'react-redux'

import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import StockView from './components/StockView/index'
import OptionView from './components/OptionView'

export const Dashboard = ({ state, children }) => (
	<div style={styles.root}>
		<TopBar />
		<div style={styles.container}>
			<SideBar />
			<Scrollbar style={styles.containerContent}>
				{ children }
			</Scrollbar>
		</div>
		{state.ui.stockViewOpen && (
			<StockView />
		)}
		{state.ui.optionViewOpen && (
			<OptionView />
		)}
	</div>
)

const mapStateToProps = (state) => ({
	state: state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


const styles = {
	root: {
		width: "100vw",
		height: "100vh",
		animation: "fadeIn .5s",
		display: "flex",
		flexDirection: "column",
		zIndex: 1
	},
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		overflowX: "hidden",
	},
	containerContent: {
		flex: 1,
		height: "100%",
		maxHeight: "100%",
		boxSizing: "border-box",
		padding: ".5em 1em 0 1em"
	}
}