import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// 🔢 Naya data (no copy from yours)
const data = [
  { label: "Mon", earnings: 1200, spend: 500 },
  { label: "Tue", earnings: 900,  spend: 650 },
  { label: "Wed", earnings: 1600, spend: 700 },
  { label: "Thu", earnings: 1400, spend: 400 },
  { label: "Fri", earnings: 2000, spend: 900 },
  { label: "Sat", earnings: 2400, spend: 1100 },
  { label: "Sun", earnings: 1800, spend: 600 },
];

// 🎯 Custom Tooltip – thoda OP look
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#111",
          padding: "10px 14px",
          borderRadius: "10px",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 4 }}>{label}</div>
        <div>💰 Earnings: <b>{payload[0].value}</b></div>
        <div>💸 Spend: <b>{payload[1].value}</b></div>
        <div style={{ marginTop: 4, fontSize: 12, opacity: 0.8 }}>
          Profit: <b>{payload[0].value - payload[1].value}</b>
        </div>
      </div>
    );
  }
  return null;
};

const UltimateBarChart = () => {
  return (
    <div
      style={{
        width: "750px",
        padding: "20px",
        background: "#050816",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        color: "#fff",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 10, fontSize: 22 }}>
        Weekly Money Flow 💹
      </h2>
      <p style={{ marginTop: 0, marginBottom: 18, fontSize: 13, opacity: 0.8 }}>
        Earnings vs Spend – jitna neela zyada, utna tu rich 😏
      </p>

      {/* 👉 Fixed width/height – no ResponsiveContainer, no -1 error */}
      <BarChart
        width={700}
        height={360}
        data={data}
        margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        barCategoryGap={20}
      >
        {/* 🎨 Gradients */}
        <defs>
          <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>

          <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="4 4" stroke="#222" />
        <XAxis
          dataKey="label"
          tick={{ fill: "#e5e7eb" }}
          tickLine={false}
          axisLine={{ stroke: "#374151" }}
        />
        <YAxis
          tick={{ fill: "#e5e7eb" }}
          tickLine={false}
          axisLine={{ stroke: "#374151" }}
        />

        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ color: "#e5e7eb" }}
          formatter={(value) => (
            <span style={{ color: "#e5e7eb", fontSize: 13 }}>{value}</span>
          )}
        />

        {/* 💰 Earnings Bar */}
        <Bar
          dataKey="earnings"
          name="Earnings"
          fill="url(#earningsGradient)"
          radius={[10, 10, 0, 0]}
          animationDuration={900}
        />

        {/* 💸 Spend Bar */}
        <Bar
          dataKey="spend"
          name="Spend"
          fill="url(#spendGradient)"
          radius={[10, 10, 0, 0]}
          animationDuration={900}
        />
      </BarChart>
    </div>
  );
};

export default UltimateBarChart;
