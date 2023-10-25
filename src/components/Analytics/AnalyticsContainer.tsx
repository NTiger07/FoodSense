const AnalyticsContainer = () => {
  const storedTrashListJSON = localStorage.getItem("trashList");
  const storedTrashList = JSON.parse(storedTrashListJSON) || []




  console.log(storedTrashList)

  return (
    <div className="h-[100vh] mx-[2%] mt-[2%] flex flex-col gap-2">
      <div className="SEARCH h-[10vh]">
        Header and account
      </div>




      <div className="MAINSECTION h-[85vh] flex flex-col gap-7">


        <div className="MAINGRAPHS flex flex-row items-cente h-[60%] gap-4">
          <div className="TRENDS w-[75%] h-[100%] bg-[#37474F] rounded-lg shadow-lg">Waste Trends</div>
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