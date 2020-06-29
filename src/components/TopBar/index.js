import React from 'react'
import Theme from '../../Theme'
import OmniSearch from './OmniSearch'
import ExtraLinks from './ExtraLinks'

export default function TopBar() {
	return (
		<div style={styles.root}>
			
			<p style={styles.title}>TRADER</p>

			<div style={styles.searchContainer}>
				<OmniSearch />
			</div>
			
			<div style={styles.extraLinksContainer}>
				<ExtraLinks />
			</div>
		</div>
	)
}

const styles = {
	root: {
		display: "flex",
		flexDirection: "row",
		height: "5em"
	},
	title: {
		fontSize: "3em",
		fontWeight: "700",
		padding: ".33em 1em .33em 1em",
		backgroundColor: "white",
		borderBottomLeftRadius: "1em",
		color: Theme.brandColor,
		flex: 1
	},
	searchContainer: {
		position: "relative",
		flex: 1,
		textAlign: "center"
	},
	extraLinksContainer: {
		position: "relative",
		flex: 1,
		textAlign: "right"
	}
}