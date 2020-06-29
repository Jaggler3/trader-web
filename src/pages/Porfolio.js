import React, { useState, useEffect } from 'react'
import ViewPage from '../components/ViewPage'
import MyStocks from './porfolio/MyStocks'
import PorfolioHeader from './porfolio/PorfolioHeader'
import BigStockChart from '../components/BigStockChart'

export default function Porfolio() {

	let portfolioHeaderData = {
		"investments": 2540829.25,
		"daily_return": 1259.10,
		"daily_growth": 9.25,
		"cash": 12501895.69
	}

	const [stockAvg, setStockAvg] = useState([
		{ time: "18:05", value: 1.05 },
		{ time: "18:10", value: 1.09 },
		{ time: "18:15", value: 1.11 },
		{ time: "18:20", value: 1.21 },
		{ time: "18:25", value: 1.16 },
		{ time: "18:30", value: 1.75 },
		{ time: "18:35", value: 1.65 },
		{ time: "18:40", value: 2.05 },
	])

	const getLastAverages = count => {
		if(stockAvg.length <= count) {
			return stockAvg;
		} else {
			return stockAvg.slice(stockAvg.length - 10)
		}
	}

	return (
		<ViewPage>
			<PorfolioHeader data={portfolioHeaderData} />
			<div style={{ maxWidth: "100%", display: "flex", flexDirection: "row" }}>
				<MyStocks />
				<BigStockChart animated={false} data={getLastAverages(30)} x="time" y="value" />
			</div>
		</ViewPage>
	)
}
