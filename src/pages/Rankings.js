import React, { useState } from 'react'
import ViewTitle from '../components/ViewTitle'
import ViewPage from '../components/ViewPage'
import TabSelect from '../components/TabSelect'
import CapitalRanks from './rankings/CapitalRanks'
import GainRanks from './rankings/GainRanks'
import LossRanks from './rankings/LossRanks'

export default function Rankings() {

	const getTopCapital = () => {
		return [
			{ name: "Name", value: "1000000" },
			{ name: "Name", value: "900000" },
			{ name: "Name", value: "800000" },
			{ name: "Jaggler3", value: "700000" },
			{ name: "Name", value: "600000" },
			{ name: "Name", value: "500000" },
			{ name: "Name", value: "400000" },
			{ name: "Name", value: "300000" },
			{ name: "Name", value: "200000" },
			{ name: "Name", value: "100000" },
		]
	}
	
	const getUserData = () => {
		return {
			user: "Jaggler3",
			capital: "700000",
			capitalRank: 4,
			bestGainAmount: "1000",
			bestGainPercent: "9.12",
			bestLossAmount: "500",
			bestLossPercent: "5.51"
		}
	}

	const [selectedTab, setSelectedTab] = useState("Capital")

	const getView = () => {
		switch(selectedTab) {
			case "Capital":
				return <CapitalRanks data={getTopCapital()} rank={getUserData().capitalRank} />
			case "Gains":
				return <GainRanks data={getTopCapital()} rank={getUserData().capitalRank} />
			case "Losses":
				return <LossRanks data={getTopCapital()} rank={getUserData().capitalRank} />
			default:
				return "";
		}
	}

	return (
		<ViewPage>
			<ViewTitle>Rankings</ViewTitle>
			<br/>
			<TabSelect tabNames={["Capital", "Gains", "Losses"]} onSelect={setSelectedTab} />

			<div style={styles.view}>
				{getView()}
			</div>

		</ViewPage>
	)
}

const styles = {
	view: {
		display: "flex",
		flexDirection: "row"
	},
}
