import React from 'react'
import { connect } from 'react-redux'
import Theme from '../../Theme'
import MoneyDisplay from '../MoneyDisplay'

const OptionViewHeader = ({ name, value, ...stateProps }) => {

	return (
		<div style={styles.root}>
			<div style={{ flex: 1}}>
				<i
					style={styles.exit}
					onClick={() => stateProps.close()}
					className="fas fa-times"
				></i>
			</div>
			<div
				style={styles.middle}
			>
				<p style={styles.name}>${name}</p>
				<MoneyDisplay
					percent={value}
					caret
					colored
					percentSize={"2em"}
					bold
				/>
			</div>
			<div style={{ flex: 1}}>
				
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	optionViewPositionID: state.ui.optionViewPositionID
})

const mapDispatchToProps = (dispatch) => {
	return {
		close: () => dispatch({ type: "close option data" })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionViewHeader)

const styles = {
	root: {
		display: "flex",
		flexDirection: "row",
		padding: "2em"
	},
	exit: {
		color: Theme.brandColor,
		fontSize: "2em",
		cursor: "pointer"
	},
	middle: {
		flex: 2,
		textAlign: "center",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	name: {
		fontSize: "2em",
		fontWeight: "bold",
		marginRight: ".5em"
	}
}