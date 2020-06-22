import React from 'react'
import SideBar from './components/SideBar'
import Theme from './Theme'

export default function Dashboard(props) {
	return (
		<div style={styles.root}>
			<div style={styles.top}>
				<p style={styles.title}>TRADER</p>
			</div>
			<div style={styles.container}>
				<SideBar />
				<div style={styles.containerContent}>
					{ props.children }
				</div>
			</div>
		</div>
	)
}

const styles = {
	root: {
		width: "100vw",
		height: "100vh",
		animation: "fadeIn .5s",
		display: "flex",
		flexDirection: "column"
	},
	top: {
	},
	title: {
		fontSize: "3em",
		fontWeight: "700",
		padding: ".33em 1em .33em 1em",
		backgroundColor: "white",
		borderBottomLeftRadius: "1em",
		color: Theme.brandColor,
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
		overflowY: "scroll",
		overflowX: "hidden",
		boxSizing: "border-box",
		padding: "1em 1em 0 1em"
	}
}