// https://recharts.org/en-US/
// https://www.youtube.com/watch?v=azvcvbeRZ08

import React, { useState } from "react";
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

const ResourceChart = ({graphData}) => {

  return (
    <div>
      <h2 className="table-space">Resource Graph </h2>
        <AreaChart
        width={1100}
        height={400}
        data={graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        {/* 'time' refers to the timestamp, 'usedMem refers to the memory recorded at this time, same applies for systemTime, userTime' */}
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="usedMem" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="systemTime" stroke="#008000" fill="#008000" />
        <Area type="monotone" dataKey="userTime" stroke="#33ddff" fill="#33ddff" />
        </AreaChart>
 
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

        // <AreaChart
        // width={500}
        // height={400}
        // data={usedMem}
        // margin={{
        //   top: 10,
        //   right: 30,
        //   left: 0,
        //   bottom: 0,
        // }}
        // >
        // <CartesianGrid strokeDasharray="3 3" />
        // {/* 'time' refers to the timestamp, 'usedMem refers to the memory recorded at this' */}
        // <XAxis dataKey="time" />
        // <YAxis />
        // <Tooltip />
        // <Area type="monotone" dataKey="usedMem" stroke="#8884d8" fill="#8884d8" />
        // {/* <Area type="monotone" dataKey="userTime" stroke="#8884d8" fill="#FF0000" />
        // <Area type="monotone" dataKey="systemTime" stroke="#8884d8" fill="#222222" /> */}
        // </AreaChart>



{/* <ComposedChart
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
</ComposedChart> */}