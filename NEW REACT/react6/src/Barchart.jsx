import React from 'react'
import { BarChart, Bar,CartesianGrid,Legend,Tooltip,XAxis,YAxis, } from 'recharts'
const Barchart = () => {
    const data =[
      {name : "jan", value:500},
        {name : "feb", value:300},
        {name : "mar", value:900},
        {name : "apr", value:470},
        {name : "may", value:900},
        {name : "june", value:600},
        {name : "july", value:1100},
        {name : "aug", value:800},
        {name : "sep", value:1200},
        {name : "oct", value:1000}
    ]
  return (
    <div>
      <BarChart height={500} width={500} data={data}>
        <XAxis dataKey='name' />
        <YAxis/>
        <CartesianGrid stroke='red' strokeDasharray='5 5'/>
        <Legend/>
        <Tooltip/>
        <Bar dataKey='value' stroke='black' type='monotone' fill='yellow' background={{fill:'red'}}/>
      </BarChart>
    </div>
  )
}

export default Barchart
