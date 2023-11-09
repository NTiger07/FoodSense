import AssistantContainer from "../../components/Assistant/AssistantContainer"


const Assistant = (props: any) => {
  const { userData } = props
  
  return (
    <div className="h-[100%] flex flex-row w-[100vw]">
      <div className="w-[0%]">
        {/* <SideBar /> */}
      </div>
      <div className="w-[95%]">
        <AssistantContainer />
      </div>
    </div>
  )
}

export default Assistant