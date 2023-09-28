// import React from 'react';
import {PieCharts, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PieCharts from './PieCharts';

const PieCharts = () => {
    const data = [
        { name: "Group A", value: 400, color: "red" },
        { name: "Group B", value: 300, color: "green" }
      ];
    return (
        <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {data.map((item) => (
            <p>
              {" "}
              <span
                style={{ padding: "1px 10px ", backgroundColor: item.color }}
              ></span>{" "}
              {item.name}
            </p>
          ))}
        </div>
      </div>
    );
};

export default PieCharts;