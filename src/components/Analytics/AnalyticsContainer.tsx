import axios from "axios";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { useEffect, useState } from "react";
import mockData2 from "./mockData2";

const AnalyticsContainer = (props: any) => {
  const { userData } = props
  const [trashList, setTrashList] = useState([])
  useEffect(() => {
    getItems()
  }, [])
  const getItems = () => {
    axios
      .get(`http://localhost:3000/trash/all/${userData.id}`)
      .then((res) => {
        setTrashList(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const transformedData = mockData2.map(item => ({
    date: new Date(item.createdAt), 
    Units: item.units, 
  }));
  transformedData.sort((a, b) => a.date - b.date);
  const sortedTransformedData = transformedData.map(item => ({
    date: item.date.toLocaleDateString(), 
    Units: item.Units, 
  }));

  

























  return (
    <div className="h-[100vh] mx-[2%] mt-[2%] flex flex-col gap-2">
      <div className="SEARCH h-[10vh]">
        Header and account
      </div>

      <div className="MAINSECTION h-[85vh] flex flex-col gap-7">
        <div className="MAINGRAPHS flex flex-row items-cente h-[60%] gap-4">
          <div className="TRENDS w-[75%] h-[100%] bg-[#2e1c15] rounded-lg shadow-lg flex items-center">
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={sortedTransformedData}>
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                    <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <Area dataKey="Units" stroke="#ECA114" fill="#4A6CF7" />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(str) => {
                    const date = parseISO(str);
                    if (date.getDate() % 7 === 0) {
                      return format(date, "MMM, d");
                    }
                    return "";
                  }}
                />

                <YAxis
                  dataKey="Units"
                  axisLine={false}
                  tickLine={false}
                  tickCount={8}
                  tickFormatter={(number) => `${number.toFixed(0)}`}
                />

                <Tooltip contentStyle={{backgroundColor: "black", borderRadius: "10px"}}/>

                <CartesianGrid opacity={0.2} vertical={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="TYPES_PIE w-[30%] h-[100%] bg-[#37474F] rounded-lg shadow-lg">Waste Type Pie</div>
        </div>


        <div className="h-[40%] gap-4 flex items-center">
          <div className="REDUCTIONPROG w-[33%] rounded-lg shadow-lg bg-[#37474F] h-[100%]"></div>
          <div className="IMPACT w-[33%] rounded-lg shadow-lg bg-[#37474F] h-[100%]"></div>
          <div className="MONTHLY SUMMARY w-[33%] rounded-lg shadow-lg bg-[#37474F] h-[100%]"></div>
        </div>



      </div>
    </div>
  )
}

export default AnalyticsContainer