import React, { useState } from 'react'
import Panel from '../../components/Panel'
import StockRow from '../../components/StockRow'
import Theme from '../../Theme'

export default function MyOptions() {

	return (
		<Panel title="my options" style={styles.root}>
		</Panel>
	)
}

const styles = {
	root: {
		width: "100%",
		height: "20em",
		display: "flex",
		flexDirection: "column"
	}
}