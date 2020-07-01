import React from 'react'
import UserRankDisplay from './UserRankDisplay'
import Theme from '../../Theme'

export default function RankList({ data, rank }) {
	return (
		<div style={styles.root}>
			{data && data.map((item, index) => (
				<UserRankDisplay isSelf={rank === index + 1} user={item} rank={index + 1} key={index} />
			))}
			<div style={styles.fake1}></div>
			<div style={styles.fake2}></div>
		</div>
	)
}

const styles = {
	root: {
		textAlign: "center"
	},
	fake1: {
		border: "1px solid " + Theme.brandHover,
		height: "2em",
		margin: ".5em 2em .5em 2em",
		borderRadius: ".5em",
		opacity: .5
	},
	fake2: {
		border: "1px solid " + Theme.brandHover,
		height: "1.5em",
		margin: ".3em 6em 0 6em",
		borderRadius: ".25em",
		opacity: .25
	}
}
