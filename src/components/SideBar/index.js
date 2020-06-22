import React from 'react'
import Theme from '../../Theme'
import ViewButton from './ViewButton'

export default function SideBar() {
	const views = [
		{ name: "PORFTOLIO", path: "/app", icon: "fas fa-layer-group" },
		{ name: "RANKINGS", path: "/app/rankings", icon: "fas fa-trophy" },
		{ name: "FAST FORWARD", path: "/app/fastforward", icon: "fas fa-forward" },
		{ name: "ACHIEVEMENTS", path: "/app/achievements", icon: "fas fa-medal" },
		{ name: "FORUM", path: "/app/forum", icon: "fas fa-comments" },
		{ name: "SUPPORT", path: "/app/support", icon: "fas fa-question-circle" },
		{ name: "SETTINGS", path: "/app/settings", icon: "fas fa-cog" },
	]

	return (
		<div style={styles.root}>
			<div style={styles.viewList}>
				{views.map((view, index) => (
					<ViewButton {...view} key={index} />
				))}
			</div>
		</div>
	)
}

const styles = {
	root: {
		position: "relative",
		width: "6.5em",
		height: "100%",
		backgroundColor: Theme.brandColor,
		borderTopRightRadius: "2em",
		borderBottomRightRadius: "2em",
	},
	viewList: {
		position: "absolute",
		flex: 1,
		padding: "1em"
	}
}
