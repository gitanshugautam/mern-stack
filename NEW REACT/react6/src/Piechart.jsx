import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

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

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4560",
  "#775DD0",
  "#00E396",
  "#FEB019",
  "#546E7A"
];

const Piechart = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <PieChart width={450} height={450}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Piechart;
