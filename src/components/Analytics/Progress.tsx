import { format, parse } from "date-fns";
import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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
        Progress: item.progress,
    }));

    const maxProgress = sortedTransformedData.reduce((max, item) => {
        if (Number(item.Progress) > max) {
            max = Number(item.Progress);
        }
        return max;
    }, -Infinity);

    const minProgress = sortedTransformedData.reduce((min, item) => {
        if (Number(item.Progress) < min) {
            min = Number(item.Progress);
        }
        return min;
    }, Infinity);


    return (
        <div className="REDUCTIONPROG w-[60%] rounded-lg shadow-lg bg-[#37474F] h-[100%]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sortedTransformedData} margin={{ top: 25, right: 30, left: 0, bottom: 10 }}>
                    <CartesianGrid opacity={0} vertical={false} />
                    <XAxis
                        dataKey="date"
                        axisLine={true}
                        tickLine={true}
                        interval={15}
                        tickFormatter={(str) => {
                            const formattedDate = parse(str, 'M/d/yyyy', new Date())
                            return format(formattedDate, 'MMM')
                        }}
                    />
                    <YAxis
                        dataKey="Progress"
                        domain={[minProgress - 1, maxProgress + 1]}
                        axisLine={true}
                        tickLine={false}
                        tickFormatter={(num: number) => {
                            return num.toFixed(0)
                        }}
                    />
                    <Tooltip contentStyle={{ backgroundColor: "black", borderRadius: "10px" }} />
                    <Bar dataKey="Progress" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Progress