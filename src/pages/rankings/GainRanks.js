import React from 'react'
import RankViewColumn from './RankViewColumn'
import RankList from './RankList'
import YourRank from './YourRank'

const GainRanks = ({ data, rank }) => (
	<>
		<RankViewColumn delay={1}>
			<YourRank rank={rank} />
		</RankViewColumn>
		<RankViewColumn>
			<RankList data={data} rank={rank} />
		</RankViewColumn>
		<RankViewColumn delay={1}>
			<p>A <strong>gain</strong> is the total return over time from a trade. The trade is added to this list once it is sold or expires.</p>
		</RankViewColumn>
	</>
)

export default GainRanks;

const styles = {
	root: {
		flex: 1
	}
}