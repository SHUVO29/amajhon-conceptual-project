import {
  LineChart as LChart,
  Line,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  // ResponsiveContainer,
} from "recharts";
// import { LineChart, Line } from 'recharts';
// import LineChart from "./LineChart";

// import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const LineChart = () => {
  const subjectMarksData = [
    {
      id: 1,
      name: "Alice",
      physics: 85,
      chemistry: 90,
      math: 78,
      color: "#ff634710",
    },
    {
      id: 2,
      name: "Bob",
      physics: 78,
      chemistry: 85,
      math: 80,
      color: "#ff634720",
    },
    {
      id: 3,
      name: "Charlie",
      physics: 92,
      chemistry: 88,
      math: 95,
      color: "#ff634730",
    },
    {
      id: 4,
      name: "David",
      physics: 88,
      chemistry: 84,
      math: 90,
      color: "#ff634740",
    },
    {
      id: 5,
      name: "Emma",
      physics: 70,
      chemistry: 75,
      math: 68,
      color: "#ff634750",
    },
    {
      id: 6,
      name: "Frank",
      physics: 95,
      chemistry: 91,
      math: 97,
      color: "#ff634760",
    },
    {
      id: 7,
      name: "Grace",
      physics: 82,
      chemistry: 78,
      math: 85,
      color: "#ff634770",
    },
    {
      id: 8,
      name: "Hannah",
      physics: 79,
      chemistry: 83,
      math: 77,
      color: "#ff634780",
    },
    {
      id: 9,
      name: "Ian",
      physics: 87,
      chemistry: 89,
      math: 84,
      color: "#ff634790",
    },
    {
      id: 10,
      name: "Jack",
      physics: 90,
      chemistry: 88,
      math: 92,
      color: "#ff6347",
    },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={subjectMarksData}>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"physics"} stroke="green"></Line>
        <Line dataKey={"chemistry"} stroke="orange"></Line>
        <Line dataKey={"id"} stroke="violet"></Line>
      </LChart>
      <br />
      {/* <LChart width={500} height={400} data={subjectMarksData}>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"physics"} stroke="green"></Line>
        <Line dataKey={"chemistry"} stroke="orange"></Line>
        <Line dataKey={"id"} stroke="violet"></Line>
      </LChart> */}

      <br />

      {/* <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
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
          <Area type="monotone" dataKey="math" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="math" stroke="#ff7300" />
          <Scatter dataKey="math" fill="red" />
        </ComposedChart>
      </ResponsiveContainer> */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="math" data={subjectMarksData} label>
              {subjectMarksData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Pie dataKey="physics" data={subjectMarksData} label>
              {subjectMarksData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {subjectMarksData.map((item) => (
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

      <br />

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="math" data={subjectMarksData} label>
              {subjectMarksData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Pie dataKey="physics" data={subjectMarksData} label>
              {subjectMarksData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {subjectMarksData.map((item) => (
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
    </div>
  );
};

export default LineChart;
