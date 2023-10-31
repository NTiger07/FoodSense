import AssistantContainer from "../../components/Assistant/AssistantContainer"
import SideBar from "../../components/SideBar"

const Assistant = () => {
  return (
    <div className="h-[100%] flex flex-row w-[100vw]">
      <div className="w-[5%]">
        <SideBar />
      </div>
      <div className="w-[95%]">
        <AssistantContainer />
      </div>
    </div>
  )
}

export default Assistant