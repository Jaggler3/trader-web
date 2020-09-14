import React from 'react'
import Theme from '../../Theme'
import MoneyDisplay from '../../components/MoneyDisplay'
import { motion } from 'framer-motion'

export const HeaderItem = ({ subtitle, delay = 0, ...displayProps }) =>
	<motion.div
		style={styles.item}
		animate={{
			y: [-20, 0],
			opacity: [0, 1],
			transition: {
				duration: .25,
				delay: delay * .1,
				ease: "easeIn"
			}
		}}
	>
		<MoneyDisplay {...displayProps} />
		<p style={styles.subtitle}>{ subtitle }</p>
	</motion.div>

const PorfolioHeader = ({ data }) => (
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
			delay={1}
			value={data["daily_return"]}
			caret
			colored
			signed
			size="2em"
		/>
		<HeaderItem
			subtitle="GROWTH"
			delay={2}
			percent={data["daily_growth"]}
			caret
			colored
			signed
			percentSize="2em"
			size="2em"
		/>
		<HeaderItem
			delay={3}
			subtitle="CASH"
			value={data["cash"]}
			caret
			colored
			size="2em"
		/>
	</div>
)

export default PorfolioHeader;

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