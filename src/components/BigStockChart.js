  
import React from 'react'
import { AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, CartesianGrid } from 'recharts';

const PanelChart = ({ data, contentMargin, style, x, y, animated }) => (
	<div style={{...{ width: "100%", height: "30em", paddingTop: "1em" }, ...style}}>
		<ResponsiveContainer>
			<AreaChart
				data={data || []}
				margin={contentMargin}
			>+
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="70%" stopColor="rgb(131, 164, 158)" stopOpacity={0.2} />
						<stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity={0.2} />
					</linearGradient>
				</defs>
				<CartesianGrid vertical={false} stroke="#A1A5B5" strokeWidth={".04em"} />
				<XAxis dataKey={x} style={{ fontWeight: "bold" }} />
				<YAxis axisLine={false} style={{ fontWeight: "bold" }} />
				<Tooltip />
				<Area
					animationDuration={(animated === undefined || animated === true) ? 1000 : 0}
					type="monotone"
					dataKey={y}
					stroke="#89C5B7"
					fill="url(#colorUv)"
					strokeWidth={".3em"}
				/>
			</AreaChart>
		</ResponsiveContainer>
	</div>
)

export default PanelChart