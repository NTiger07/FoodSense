import axios from "axios";
import { useEffect, useState } from "react";
import mockData2 from "./mockData2";
import WasteTrends from "./WasteTrends";
import Progress from "./Progress";

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


  return (
    <div className="h-[100vh] mx-[2%] my-[2%] flex flex-col gap-2">
      <div className="SEARCH h-[10vh]">
        Header and account
      </div>

      <div className="MAINSECTION h-[85vh] flex flex-col gap-7">
        <div className="MAINGRAPHS flex flex-row items-cente h-[60%] gap-4">
          <WasteTrends data={mockData2} />
          {/* <div className="TYPES_PIE w-[30%] h-[100%] bg-[#37474F] rounded-lg shadow-lg">Waste Type Pie</div> */}
        </div>


        <div className="h-[40%] gap-4 flex items-center">
          <Progress data={mockData2} />
          <div className="IMPACT w-[33%] rounded-lg shadow-lg bg-[#37474F] h-[100%]"></div>
          <div className="MONTHLY SUMMARY w-[33%] rounded-lg shadow-lg bg-[#37474F] h-[100%]"></div>
        </div>



      </div>
    </div>
  )
}

export default AnalyticsContainer