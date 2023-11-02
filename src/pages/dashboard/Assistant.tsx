import { useEffect } from "react"
import AssistantContainer from "../../components/Assistant/AssistantContainer"
import SideBar from "../../components/SideBar"
import { useNavigate } from "react-router-dom"

const Assistant = (props: any) => {
  const { userData } = props
  const navigate = useNavigate()

  const userDataLocal = localStorage.getItem('persist:foodsense')
  const userDataLocalJSON = JSON.parse(userDataLocal)


  useEffect(() => {
    if (!userDataLocalJSON.email) {
      navigate("/auth/login")
    }
  }, [])
  
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