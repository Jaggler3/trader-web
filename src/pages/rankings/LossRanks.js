import React from 'react'
import RankViewColumn from './RankViewColumn'
import RankList from './RankList'
import YourRank from './YourRank'

const LossRanks = ({ data, rank }) => (
	<>
		<RankViewColumn delay={2}>
			<p>A <strong>loss</strong> is when a investment decreases in value.
			The trade is added to this list once it is sold or expires.</p>
		</RankViewColumn>
		<RankViewColumn delay={1}>
			<YourRank rank={rank} />
		</RankViewColumn>
		<RankViewColumn>
			<RankList data={data} rank={rank} />
		</RankViewColumn>
	</>
)

export default LossRanks;

const styles = {
	root: {
		flex: 1
	}
}