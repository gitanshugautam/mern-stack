import React from 'react'
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from 'recharts'

const Linecharts = () => {
    const data =[
        {name : "jan", value:100},
        {name : "feb", value:200},
        {name : "mar", value:300},
        {name : "apr", value:400},
        {name : "may", value:500},
        {name : "june", value:600},
        {name : "july", value:700},
        {name : "aug", value:800},
        {name : "sep", value:900},
        {name : "oct", value:1000}
    ]
  return (
    <div>
      <LineChart height={500} width={500} data={data}>
      <XAxis dataKey='name'/>
      <YAxis/>
      <Tooltip/>
      <CartesianGrid stroke='red' strokeDasharray='5 5'/>
      <Line type='monotone' dataKey='value' stroke="yellow"/>
      </LineChart>
    </div>
  )
}

export default Linecharts
