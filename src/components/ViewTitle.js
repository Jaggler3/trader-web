import React from 'react'
import Theme from '../Theme'

export default props => <p style={{
	fontSize: "2.5em",
	margin: ".5em 0 0 .5em",
	fontWeight: "bold",
	color: Theme.brandColor
}}>
	{props.children}
</p>