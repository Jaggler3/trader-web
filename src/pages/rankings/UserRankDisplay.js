import React from 'react'
import MoneyDisplay from '../../components/MoneyDisplay'
import Theme from '../../Theme'

export default function UserRankDisplay({ user, rank = "?", type = "money", isSelf = false }) {
	return (
		<div style={styles.root}>
			<p style={styles.rank}>{rank}</p>
			<p>{user.name}</p>
			{isSelf && (
				<strong>&nbsp;(You!)</strong>
			)}
			<div style={styles.space}></div>
			{type === "money" ? (
				<MoneyDisplay value={user.value} />
			) : (
				<p></p>
			)}
		
		</div>
	)
}

const styles = {
	root: {
		border: "1px solid " + Theme.brandHover,
		padding: "1em",
		margin: ".75em 0 .75em 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: ".5em"
	},
	space: {
		flex: 1
	},
	rank: {
		fontWeight: "bold",
		width: "2em",
		paddingRight: "1em",
		borderRight: "1px solid black",
		marginRight: "1em",
		textAlign: "center"
	}
}