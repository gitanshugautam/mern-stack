import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 300 },
  { name: "Apr", value: 400 },
  { name: "May", value: 500 },
  { name: "June", value: 600 },
  { name: "July", value: 700 },
  { name: "Aug", value: 800 },
  { name: "Sep", value: 900 },
  { name: "Oct", value: 1000 }
];

const formattedData = data.map((item, index) => ({
  x: index + 1,   
  y: item.value,  
  label: item.name
}));

const Scatterchart = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <ScatterChart
        width={500}
        height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="x"
          name="Month"
          tickFormatter={(v) => data[v - 1]?.name}
        />
        <YAxis type="number" dataKey="y" name="Value" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        
        <Scatter name="Monthly Data" data={formattedData} fill="#0088FE" />
      </ScatterChart>
    </div>
  );
};

export default Scatterchart;
