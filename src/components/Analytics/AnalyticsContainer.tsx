// import { useState } from "react";

const AnalyticsContainer = () => {
    const storedInventoryTrashListJSON = localStorage.getItem("inventoryTrashList");
    // const storedInventoryTrashList = JSON.parse(storedInventoryTrashListJSON)
    // const [inventoryTrashList, setInventoryTrashList] = useState(storedInventoryTrashList)


    console.log(storedInventoryTrashListJSON)
    
  return (
    <div>AnalyticsContainer</div>
  )
}

export default AnalyticsContainer