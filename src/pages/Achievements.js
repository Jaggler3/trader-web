import React from 'react'

import ViewPage from '../components/ViewPage'
import ViewTitle from '../components/ViewTitle'

import * as AchievementList from '../res/achievements.json'
import AchievementDisplay from './achievements/AchievementDisplay'

export default function Achievements() {

	const getCompletedAchievements = () => {
		return [
			"Gained $10"
		]
	}

	return (
		<ViewPage>
			<ViewTitle>Achievements</ViewTitle>
			<br/>
			<div style={{ margin: "0 10em 0 10em" }}>
				{AchievementList.achievements.map((item, index) => (
					<AchievementDisplay
						item={item}
						completed={getCompletedAchievements().indexOf(item.name) !== -1}
						animDelay={index}
					/>
				))}
			</div>
		</ViewPage>
	)
}
