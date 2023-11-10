import axios from "axios";
import { useEffect, useState } from "react";
import WasteTrends from "./WasteTrends";
import Progress from "./Progress";
import Impact from "./Impact";

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


  return (
    <div className="mx-[2%] mt-[2%] flex flex-col gap-2 overflow-hidden">
      <div className="SEARCH h-[10vh]">
        Header and account
      </div>

      <div className="MAINSECTION h-content flex flex-col gap-7">
        <div className="MAINGRAPHS flex flex-row items-cente h-[50vh] gap-4">
          <WasteTrends data={trashList} />
          {/* <div className="TYPES_PIE w-[30%] h-[100%] bg-[#37474F] rounded-lg shadow-lg">Waste Type Pie</div> */}
        </div>


        <div className="h-[40vh] gap-4 flex items-center mb-[2rem]">
          <Progress data={trashList} />
          <Impact data={trashList} />
          {/* <div className="MONTHLY SUMMARY w-[33%] rounded-lg shadow-lg bg-[#37474F] h-[100%]"></div> */}
        </div>



      </div>
    </div>
  )
}

export default AnalyticsContainer