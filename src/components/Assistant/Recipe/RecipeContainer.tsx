import { useState, useRef } from "react";
import MainContent from "./MainContent";
import DropDown from "./DropDown";


const RecipeContainer = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [parameters, setParameters] = useState("");

  const dietLabel = useRef("");
  const healthLabel = useRef("");
  const cuisineType = useRef("");
  const mealType = useRef("");
  const dishType = useRef("");

  function apply() {
    const dietValue = dietLabel.current.value;
    const healthValue = healthLabel.current.value;
    const cuisineValue = cuisineType.current.value;
    const mealValue = mealType.current.value;
    const dishValue = dishType.current.value;
    setParameters(
      `${dietValue}${healthValue}${cuisineValue}${mealValue}${dishValue}`
    );
    setIsHidden(false);
  }

  function reset() {
    dietLabel.current.value = "";
    healthLabel.current.value = "";
    cuisineType.current.value = "";
    mealType.current.value = "";
    dishType.current.value = "";
  }

  async function toggle() {
    setIsHidden(!isHidden);
  }


  return (
    <div className="main_container">
      <MainContent
        toggle={toggle}
        isHidden={isHidden}
        parameters={parameters}
      />
      {isHidden && (
        <DropDown
          dietLabel={dietLabel}
          healthLabel={healthLabel}
          cuisineType={cuisineType}
          mealType={mealType}
          dishType={dishType}
          apply={apply}
          reset={reset}
          toggle={toggle}
        />
      )}
    </div>
  );
}

export default RecipeContainer