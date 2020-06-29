import React from 'react'
import Theme from '../Theme'
import { AddCommas } from '../util/Presentation'

const MoneyDisplay = ({ value, size, colored, signed, caret, percent, percentSize, ...restProps}) => {

	let green = (value !== undefined && value >= 0) || (percent !== undefined && percent >= 0);

	return (
		<div style={{
			display: "flex", 
			flexDirection: "row",
			alignItems: "center",
			...restProps.style
		}}>
			{value && 
				<p style={{
					fontSize: size || "1em",
					color: !colored ? "black" : (green ? Theme.moneyGreen : Theme.moneyRed)
				}}>
					{signed && (value >= 0 ? "+" : "-")}${AddCommas(value)}
				</p>
			}

			{caret &&
				<i
					className={"fas fa-caret-" + (green ? "up" : "down")}
					style={{
						margin: "0 .25em 0 .25em",
						fontSize: size || "1em",
						color: !colored ? "black" : (green ? Theme.moneyGreen : Theme.moneyRed)
					}}
				></i>
			}

			{percent && 
				<p style={{
					fontSize: percentSize || "1em",
					color: !colored ? "black" : (green ? Theme.moneyGreen : Theme.moneyRed)
				}}>
					{signed && (percent >= 0 ? "+" : "-")}{AddCommas(percent)}%
				</p>
			}
		</div>
	)
}

export default MoneyDisplay