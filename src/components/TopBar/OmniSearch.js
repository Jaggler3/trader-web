import React from 'react'
import Theme from '../../Theme'

/**
 * Searches for stocks by their symbol and usernames by their @
 */
export default function OmniSearch({ ...restProps }) {
	return (
		<div style={{ ...styles.root, ...restProps.style }}>
			<div style={{ ...styles.inputContainer }}>
				<i className="fas fa-search" style={styles.searchIcon}></i>
				<input style={{ ...styles.input }} placeholder="Search"/>
			</div>
		</div>
	)
}

const styles = {
	root: {
		height: "5em",
		boxSizing: "border-box",
		padding: "1em",
		position: "relative"
	},
	inputContainer: {
		border: "2px solid " + Theme.brandHover,
		borderRadius: "2em",
		height: "100%",
		width: "100%",
		outline: "none",
		display: "flex",
		flexDirection: "row",
	},
	inputContainerActive: {
		borderColor: Theme.brandColor
	},
	input: {
		flex: 1,
		outline: "none",
		border: "none",
		fontSize: "1.25em",
		marginRight: "1.5em"
	},
	searchIcon: {
		fontSize: "1.5em",
		opacity: "0.75",
		lineHeight: "2em",
		width: "2em",
		textAlign: "center"
	}
}
