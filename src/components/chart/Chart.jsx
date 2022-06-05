import './chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
	{ Month: 'January', Total: 1200 },
	{ Month: 'February', Total: 2100 },
	{ Month: 'March', Total: 800 },
	{ Month: 'April', Total: 1600 },
	{ Month: 'May', Total: 900 },
	{ Month: 'June', Total: 1700 },
];

export const Chart = () => {
	return (
		<div className='chart'>
			<div className="title">Previous 6 Months (Revenue)</div>
			<ResponsiveContainer width="100%" aspect={2 / 1}>
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" className='chartGrid' />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="Month" stroke="#8884d8" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="Total" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
