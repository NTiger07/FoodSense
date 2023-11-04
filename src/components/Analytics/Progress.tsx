import { format, parse } from "date-fns";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Progress = (props: any) => {
    const { data } = props

    const calculateProgress = (previousUnits, currentUnits) => {
        return ((currentUnits - previousUnits) / 200) * 100;
    };

    const transformData = data => {
        const transformedData = [];
        for (let i = 1; i < data.length; i++) {
            const previousEntry = data[i - 1];
            const currentEntry = data[i];
            const progress = calculateProgress(previousEntry.units, currentEntry.units);
            transformedData.push({
                date: new Date(currentEntry.createdAt),
                progress: progress.toFixed(2), // Limit decimal places to 2
            });
        }
        return transformedData;
    };

    const transformedData = transformData(data);

    transformedData.sort((a, b) => a.date - b.date);

    const sortedTransformedData = transformedData.map(item => ({
        date: item.date.toLocaleDateString(),
        Units: item.progress,
    }));


    return (
        <div className="REDUCTIONPROG w-[60%] rounded-lg shadow-lg bg-[#37474F] h-[100%]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sortedTransformedData} margin={{ top: 25, right: 30, left: 0, bottom: 10 }}>
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
                        dataKey="Units"
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip contentStyle={{ backgroundColor: "black", borderRadius: "10px" }} />
                    {/* <Legend /> */}
                    <Bar dataKey="Units" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Progress