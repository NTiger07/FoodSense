// import { useState } from "react";

const AnalyticsContainer = () => {
  const storedTrashListJSON = localStorage.getItem("trashList");
  const storedTrashList = JSON.parse(storedTrashListJSON)


  console.log(storedTrashList)

  return (
    <div>AnalyticsContainer</div>
  )
}

export default AnalyticsContainer