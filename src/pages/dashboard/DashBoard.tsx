import DashboardContainer from "../../components/Dashboard/DashboardContainer"

const Dashboard = (props: any) => {
  const {userData} = props

  return (
    <div className="h-[100%] flex flex-row w-[100vw]">
      <div className="w-[0%]">
        {/* <SideBar /> */}
      </div>
      <div className="w-[95%]">
        <DashboardContainer userData={userData}/>
      </div>
    </div>
  )
}

export default Dashboard