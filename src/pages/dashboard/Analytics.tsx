import AnalyticsContainer from "../../components/Analytics/AnalyticsContainer"

const Analytics = (props: any) => {
  const { userData } = props
  
  return (
    <div className="h-[100%] flex flex-row w-[100vw]">
      <div className="w-[0%]">
        {/* <SideBar /> */}
      </div> 
      <div className="w-[95%]">
        <AnalyticsContainer userData={userData}/>
      </div>
    </div>
  )
}

export default Analytics