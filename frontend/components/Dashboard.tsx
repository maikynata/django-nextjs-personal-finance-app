import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTransactions().then((res) => setData(res));
  }, []);

  const categoryData = Object.values(
    data.reduce((acc, tx) => {
      acc[tx.category] = acc[tx.category] || { name: tx.category, value: 0 };
      acc[tx.category].value += parseFloat(tx.amount);
      return acc;
    }, {})
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Spending by Category</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={categoryData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
