import PlannerContainer from "./Planner/PlannerContainer"
import RecipeContainer from "./Recipe/RecipeContainer"

const AssistantContainer = () => {
  return (
    <div className="h-[100vh] mx-[2%] mt-[2%]">
      {/* <RecipeContainer /> */}
      <PlannerContainer/>
    </div>
  )
}

export default AssistantContainer