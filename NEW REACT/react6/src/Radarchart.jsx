import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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

const Radarchart = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <RadarChart
        cx={250}
        cy={250}
        outerRadius={170}
        width={500}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Tooltip />
        <Legend />

        <Radar
          name="Monthly Values"
          dataKey="value"
          stroke="#FF5733"
          fill="#FF5733"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default Radarchart;
