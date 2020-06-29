import React from 'react'
import SideBar from './components/SideBar'
import Theme from './Theme'
import TopBar from './components/TopBar'

export default function Dashboard(props) {
	return (
		<div style={styles.root}>
			<TopBar />
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
		padding: ".5em 1em 0 1em"
	}
}