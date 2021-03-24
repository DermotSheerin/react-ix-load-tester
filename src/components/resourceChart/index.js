// https://recharts.org/en-US/
// https://www.youtube.com/watch?v=azvcvbeRZ08

import React, { useState, useEffect } from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts"

const ResourceChart = ({usedMem}) => {
console.log(usedMem);

// let tick = 0;
// const test = {name: tick++, value: usedMem }

  return (
    <div>
        <LineChart width={500} height={300} data={usedMem}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="value" />
        </LineChart>
    </div>
  )

}

export default ResourceChart