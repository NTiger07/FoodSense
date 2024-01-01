import axios from "axios";
import { useEffect, useState } from "react";
import WasteTrends from "./WasteTrends";
import Progress from "./Progress";
import Impact from "./Impact";
import TrashType from "./TrashType";

const AnalyticsContainer = (props: any) => {
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
      acc.push({ createdAt: obj.createdAt, units: obj.units, gramsPerUnit: obj.gramsPerUnit })
    }
    return acc
  }, [])


  return (
    <div className="mx-[2%] mt-[2%] flex flex-col gap-2 overflow-hidden">
      <div className="SEARCH h-[10vh]">
        Header and account
      </div>

      <div className="MAINSECTION h-content flex flex-col gap-7">
        <div className="MAINGRAPHS flex flex-row items-cente h-[50vh] gap-4">
          <WasteTrends data={combinedObjects} />
          {/* <div className="TYPES_PIE w-[30%] h-[100%] bg-[#00B074] rounded-lg shadow-lg">Waste Type Pie</div> */}
        </div>


        <div className="h-[40vh] gap-4 flex items-center mb-[2rem]">
          <Progress data={combinedObjects} />
          <Impact data={combinedObjects} userData={userData} />
          <TrashType userData={userData} />
          {/* <div className="MONTHLY SUMMARY w-[33%] rounded-lg shadow-lg bg-[#00B074] h-[100%]"></div> */}
        </div>



      </div>
    </div>
  )
}

export default AnalyticsContainer