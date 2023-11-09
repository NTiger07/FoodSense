import { useState } from "react"
import ConverseContainer from "./Converse/ConverseContainer"
import RecipeContainer from "./Recipe/RecipeContainer"

const AssistantContainer = () => {
  const [tab, setTab] = useState(0)
  const components = [<RecipeContainer/>, <ConverseContainer/>]
  const children = components[tab]



  return (
    <div className="h-[100vh] pt-[2%]">
      <div className="SWITCH flex justify-center mb-[5%]">
        <span onClick={() => setTab(0)} className="cursor-pointer font-bold text-[1.8rem] px-[1rem] py-[.4rem] w-[12%] text-center hover:text-[1.77rem] transition-all">Recipe</span>
        <span className="absolute bg-[] text-primary top-[4%] right-[31%]"><img src="/icons/experiment.svg" alt="" /></span>
        <span onClick={() => setTab(1)} className="bganim bg-clip-text text-transparent cursor-pointer font-bold
        text-[1.8rem] px-[1rem] py-[.4rem] w-[12%] text-center hover:text-[1.77rem] transition-all ease-in">ChatBot</span>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default AssistantContainer