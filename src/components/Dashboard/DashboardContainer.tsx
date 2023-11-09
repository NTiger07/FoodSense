import axios from "axios"
import { useState, useEffect } from "react"
import WasteTrends from "../Analytics/WasteTrends"
import IncomingDates from "./IncomingDates"

const DashboardContainer = (props: any) => {
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
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#37474F] w-[85%] p-[1rem] mt-[2rem] rounded-lg shadow-xl text-[1.5rem] mb-[2%]">
        Welcome {userData?.firstname} {userData?.lastname}
      </div>
      <div className="MAINCONTENT w-[95%] h-[50vh] flex items-center justify-between gap-4">
        <div className="h-full w-[70%]">
          <WasteTrends data={trashList} />
        </div>
        <div className="w-[30%]">
          <IncomingDates userData={userData} />
        </div>
      </div>
    </div>
  )
}

export default DashboardContainer