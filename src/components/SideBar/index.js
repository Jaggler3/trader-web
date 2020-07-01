import React, { useState } from 'react'
import Theme from '../../Theme'
import ViewButton from './ViewButton'

import * as NavData from '../../res/nav.json'

const SideBar = () => {
	
	const getPathIndex = () => {
		for (let i = 0; i < NavData.views.length; i++) {
			if (NavData.views[i].path === window.location.pathname) {
				return i;
			}
		}
		return 0;
	}
	
	const [selectedIndex, setSelectedIndex] = useState(getPathIndex())

	return (
		<div style={styles.root}>
			<div style={styles.viewList}>
				{NavData.views.map((view, index) => (
					<ViewButton {...view}
						key={index}
						onClick={() => {
							setSelectedIndex(index)
						}}
						selected={selectedIndex === index}
					/>
				))}
			</div>
			<div style={{ ...styles.indicator, marginTop: (selectedIndex * 5) + 1.5 + "em" }}></div>
		</div>
	)

}

const styles = {
	root: {
		position: "relative",
		width: "7em",
		height: "calc(100% - .5em)",
		backgroundColor: Theme.brandColor,
		borderTopRightRadius: "2em",
		borderBottomRightRadius: "2em",
		paddingTop: "1em",
		marginTop: ".5em",
		zIndex: 2,
		boxSizing: "border-box"
	},
	viewList: {
		position: "absolute",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	indicator: {
		position: "absolute",
		left: "6em",
		width: "1em",
		height: "2em",
		backgroundColor: "white",
		clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
		transition: "margin-top .25s ease-in-out"
	}
}

export default SideBar