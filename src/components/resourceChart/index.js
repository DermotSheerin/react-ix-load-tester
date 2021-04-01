// https://recharts.org/en-US/
// https://www.youtube.com/watch?v=azvcvbeRZ08

import React from "react";
import {
  Line,
  LineChart,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Area,
  ComposedChart,
  Legend,
  Bar,
  Scatter
} from "recharts"

const ResourceChart = ({usedMem}) => {

  return (
    <div>
                    <ComposedChart
          width={800}
          height={500}
          data={usedMem}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="value" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="value" stroke="#ff7300" />
          <Scatter dataKey="value" fill="red" />
        </ComposedChart>
 
    </div>
  )

}

{/* <div>
<LineChart width={800} height={500} data={usedMem}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="value" />
</LineChart>
</div> */}

export default ResourceChart

{/* <AreaChart
width={500}
height={400}
data={usedMem}
margin={{
  top: 10,
  right: 30,
  left: 0,
  bottom: 0,
}}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
</AreaChart> */}