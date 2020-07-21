import React from 'react'

import { motion } from "framer-motion";

import ViewPage from '../components/ViewPage'
import ViewTitle from '../components/ViewTitle';
import SupportForm from './support/SupportForm';
import SupportFAQs from './support/SupportFAQs';


export const SupportColumn = ({ delay = 0, ...restProps}) => {
	return (
		<motion.div
			style={{...styles.column}}
			animate={{
				y: [50, 0],
				opacity: [0, 1],
				transition: {
					delay: delay * .2,
					duration: .4,
					ease: "easeInOut"
				}
			}}
		>
			{ restProps.children }
		</motion.div>
	)
}


export default function Support() {
	return (
		<ViewPage>
			<ViewTitle>Support</ViewTitle>
			<p style={styles.desc}>TradePad.io copyrights, developers, etc, etc, purpose, etc, etc.<br/>Hart-Darazs, LLC</p>
			<div style={styles.container}>
				<SupportColumn>
					<SupportForm />
				</SupportColumn>
				<SupportColumn delay={1}>
					<SupportFAQs />
				</SupportColumn>
			</div>
		</ViewPage>
	)
}

const styles = {
	desc: {
		margin: "2em"
	},
	container: {
		display: "flex",
		flexDirection: "row"
	},
	column: {
		flex: 1
	}
}
