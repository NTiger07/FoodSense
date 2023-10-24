import { useState } from "react";

const AnalyticsContainer = () => {
  const storedTrashListJSON = localStorage.getItem("trashList");
  const storedTrashList = JSON.parse(storedTrashListJSON)

  const [trashList, setTrashList] = useState(storedTrashList || [])



  console.log(trashList)

  return (
    <div className="h-[100vh] mx-[2%] mt-[2%] flex flex-col gap-2">
      <div className="SEARCH h-[10vh]">
        Header and account
      </div>




      <div className="MAINSECTION h-[85vh] flex flex-col">


        <div className="MAINGRAPHS flex flex-row items-cente h-[60%] gap-4">
          <div className="TRENDS w-[75%] h-[50%] bg-[#37474F] rounded-lg shadow-lg"></div>
          <div className="TYPES_PIE w-[30%] h-[50%] bg-[#37474F] rounded-lg shadow-lg"></div>
        </div>


        <div className="h-[40%] bg-primary-red"></div>



      </div>
    </div>
  )
}

export default AnalyticsContainer