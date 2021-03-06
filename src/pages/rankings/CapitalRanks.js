import React from 'react'
import RankViewColumn from './RankViewColumn'
import RankList from './RankList'
import YourRank from './YourRank'

const CapitalRanks = ({ data, rank }) => (
	<>
		<RankViewColumn>
			<RankList data={data} rank={rank} />
		</RankViewColumn>
		<RankViewColumn delay={1}>
			<YourRank rank={rank} />
		</RankViewColumn>
		<RankViewColumn delay={2}>
			<p><strong>Capital</strong> is the total of all investments plus cash balance.</p>
		</RankViewColumn>
	</>
)

export default CapitalRanks;