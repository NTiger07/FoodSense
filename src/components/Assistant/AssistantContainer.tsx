import ConverseContainer from "./Converse/ConverseContainer"
import RecipeContainer from "./Recipe/RecipeContainer"

const AssistantContainer = () => {
  return (
    <div className="h-[100vh] mx-[2%] mt-[2%]">
      {/* <RecipeContainer /> */}
      <ConverseContainer />
    </div>
  )
}

export default AssistantContainer