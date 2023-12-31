import axios from "axios"
import { useState, useEffect } from "react"
import WasteTrends from "../Analytics/WasteTrends"
import IncomingDates from "./IncomingDates"
import Recipes from "./Recipes"

const DashboardContainer = (props: any) => {
  const { userData } = props

  const [trashList, setTrashList] = useState([])

  useEffect(() => {
    getItems()
  }, [])

  const getItems = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}trash/all/${userData?.id}`)
      .then((res) => {
        setTrashList(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const combinedObjects = trashList.reduce((acc, obj) => {
    const existingObject = acc.find(item => item.createdAt.slice(0, 10) === obj.createdAt.slice(0, 10))

    if (existingObject) {
      existingObject.units += obj.units
    } else {
      acc.push({ createdAt: obj.createdAt, units: obj.units })
    }
    return acc
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#00B074] flex flex-col bg-[url('/images/welcome.png')] bg-cover w-full p-[1rem] mx-[2%] text-[1.5rem] mb-[2%] font-semibold h-[30vh]">
        <span className="text-[3rem] font-extrabold">DASHBOARD</span>
        Hi, {userData?.firstname}. Welcome back to FoodSense!
      </div>
      <div className="MAINCONTENT w-[95%] flex flex-col items-center justify-center gap-4">

        <div className="w-full flex items-center h-[50vh] justify-between gap-4">
          <div className="h-full w-[70%]">
            <WasteTrends data={combinedObjects} />
          </div>
          <div className="w-[30%]">
            <IncomingDates userData={userData} />
          </div>
        </div>

        <div className="h-fit w-full mb-[2rem]">
          <span className="text-[1.5rem] mb-[1rem] text-[#000]">Here are some recipes for you to try out...</span>
          <Recipes />
        </div>
      </div>
    </div>
  )
}

export default DashboardContainer