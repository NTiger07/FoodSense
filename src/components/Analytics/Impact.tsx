import { parse, format } from "date-fns";
import { useState } from "react"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Impact = (props: any) => {
  const { data } = props
  // const carbonFootprint = totalGrams * 4500
  const transformedData = data.map(item => ({
    date: new Date(item.createdAt),
    Units: ((item.units * item.gramsPerUnit) / 1000) * 4.5, // Carbon footprint in kg
  }));
  transformedData.sort((a, b) => a.date - b.date);

  const sortedTransformedData = transformedData.map(item => ({
    date: item.date.toLocaleDateString(),
    Units: item.Units,
  }));


  return (
    <div className="IMPACT w-[30%] rounded-lg shadow-lg bg-[#37474F] h-[100%]">
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={sortedTransformedData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area dataKey="Units" stroke="#8884d8" fill="url(#colorUv)" type={'monotoneX'} />

          <XAxis
            dataKey="date"
            axisLine={true}
            tickLine={true}
            interval={7}
            tickFormatter={(str) => {
              const formattedDate = parse(str, 'M/d/yyyy', new Date())
              return format(formattedDate, 'MMM d')
            }}
          />

          <YAxis
            dataKey="Units"
            axisLine={true}
            tickLine={true}
            tickCount={8}
            tickFormatter={(number) => `${number.toFixed(0)}`}
          />

          <Tooltip contentStyle={{ backgroundColor: "black", borderRadius: "10px" }} />

          <CartesianGrid opacity={0} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Impact