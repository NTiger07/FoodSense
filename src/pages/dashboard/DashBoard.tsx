import MainDashBoard from "../../components/MainDashBoard"
import SideBar from "../../components/SideBar"

const Dashboard = () => {
  return (
    <div className="h-[100%] flex flex-row w-[100vw]">
      <div className="w-[5%]">
        <SideBar />
      </div>
      <div className="w-[95%]">
        <MainDashBoard />
      </div>
    </div>
  )
}

export default Dashboard