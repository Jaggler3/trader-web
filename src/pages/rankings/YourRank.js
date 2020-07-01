import React from 'react'
import Theme from '../../Theme'

export default function YourRank({ rank }) {
	return (
		<div style={styles.root}>
			<p style={styles.title}>Your Rank</p>
			<div style={styles.rankParent}>
				<p style={styles.rank}>{rank}</p>
			</div>
		</div>
	)
}

const styles = {
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	title: {
		margin: "2.5em 0 2.5em 0",
		fontSize: "2.5em",
		color: Theme.brandColor
	},
	rankParent: {
		width: "15em",
		height: "15em",
		position: "relative",
		backgroundColor: Theme.brandColor,
		borderRadius: "7.5em"
	},
	rank: {
		fontSize: "6em",
		color: "white",
		width: "100%",
		height: "100%",
		textAlign: "center",
		lineHeight: "calc(15em / 6)"
	}
}
