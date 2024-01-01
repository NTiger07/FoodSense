import axios from "axios"
import { useEffect, useState } from "react"
import { ResponsiveContainer, PieChart, Pie, Legend, Cell, Tooltip } from "recharts"

const TrashType = (props: any) => {
  const { userData } = props
  const [response, setResponse] = useState([])

  useEffect(() => {
    getType()
  }, [])

  const getType = () => {
    axios.get(`${import.meta.env.VITE_LOCAL_URL}trash/type/${userData.id}`)
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const COLORS = ['#d12b2f', '#4A6CF7']

  return (
    <div className="TRASHTYPE w-[30%] rounded-lg shadow-lg bg-[#00B074] h-[100%]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 15, right: 5, bottom: 5, left: 5 }}>
          <Pie data={response} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} fill="#82ca9d">
            {
              response.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Legend />
          <Tooltip formatter={(str) => str + '%'} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrashType