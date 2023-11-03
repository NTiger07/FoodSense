import { format, parse } from "date-fns";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Progress = (props: any) => {
    const { data } = props

    const transformedData = data.map(item => ({
        date: new Date(item.createdAt),
        Units: item.units,
    }))
    transformedData.sort((a, b) => a.date - b.date);

    const sortedTransformedData = transformedData.map(item => ({
        date: item.date.toLocaleDateString(),
        Units: item.Units,
    }));


    return (
        <div className="REDUCTIONPROG w-[33%] rounded-lg shadow-lg bg-[#37474F] h-[100%]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sortedTransformedData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid opacity={0.2} vertical={false} />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={true}
                        interval={15}
                        tickFormatter={(str) => {
                            const formattedDate = parse(str, 'M/d/yyyy', new Date())
                            return format(formattedDate, 'MMM')
                        }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip contentStyle={{ backgroundColor: "black", borderRadius: "10px" }} />
                    <Legend />
                    <Bar dataKey="Units" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Progress