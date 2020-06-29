import React from 'react'
import Theme from '../../Theme'
import MoneyDisplay from '../../components/MoneyDisplay'

export const HeaderItem = ({ subtitle, ...displayProps }) =>
	<div style={styles.item}>
		<MoneyDisplay {...displayProps} />
		<p style={styles.subtitle}>{ subtitle }</p>
	</div>

export default function PorfolioHeader({ data }) {
	return (
		<div style={styles.root}>
			<HeaderItem
				subtitle="INVESTMENTS"
				value={data["investments"]}
				caret
				colored
				size="2em"
			/>
			<HeaderItem
				subtitle="DAILY RETURN"
				value={data["daily_return"]}
				caret
				colored
				signed
				size="2em"
			/>
			<HeaderItem
				subtitle="GROWTH"
				percent={data["daily_growth"]}
				caret
				colored
				signed
				percentSize="2em"
				size="2em"
			/>
			<HeaderItem
				subtitle="CASH"
				value={data["cash"]}
				caret
				colored
				size="2em"
			/>
		</div>
	)
}

const styles = {
	root: {
		width: "100%",
		display: "flex",
		flexDirection: "row"
	},
	item: {
		flex: 1,
		height: "5em",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center"
	},
	itemContent: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	subtitle: {
		color: Theme.brandColor
	}
}