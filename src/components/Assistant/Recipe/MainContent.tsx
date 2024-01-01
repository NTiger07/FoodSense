import Axios from "axios";
import { useState, useEffect } from "react";
import HeadingCard from "./HeadingCard";
import "./MainContent.css"

export default function MainContent(props: any) {
  const { parameters, toggle, isHidden } = props
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const pms = parameters;

  async function getRecipes() {
    const id_array = [
      "3749c2a5",
      "c12bd48b",
      "f36e134f",
      "5219a59d",
      "4e94f844",
      "ad4677cd",
      "895237cb",
      "08781cf6",
      "84716649",
      "e5d2a8f5",
      "9e3a4567",
    ];
    const key_array = [
      "b83dd2c4bfbd47ccd62bd4d65d3c739e",
      "659ba4c4d7973b60b4a23ab71e54f4a5",
      "ae2537540a8c78071f77d2d4dcfb07b4",
      "d53f9718305bd7d9feb3d4dd42488fc2",
      "3899e8db734a92c6c3ab61e1297523e1",
      "76db2476c2d8b511cfeb9654631d7114",
      "5b3b12bc9a45372db9dda8904d39e68e",
      "945aa42286134dcecf3175bb90a745f5",
      "b6e8f6939ba6b661a3268ae1448a8a3a",
      "f1ad50f0054bbec1e11579ed9bba1adb",
      "03bb82952d4ad3d1a42bb5a95be3ff5d",
    ];
    const index = Math.floor(Math.random() * id_array.length);
    const app_id = id_array[index];
    const app_key = key_array[index];
    const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}&time=1%2B${pms}`;
    const result = await Axios.get(API_URL).catch(() => {
    });
    setRecipes(result.data.hits);
  }
  useEffect(
    (query) => {
      getRecipes(query);
    },
    [query]
  );

  const mealElement = recipes.map((item) => {
    return (
      <>
        <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">
          <div className="mealrecipes_item">
            <img
              src={item.recipe.images.REGULAR.url}
              alt="meal"
              className="mealImg h-[70%]"
            />
            <div className="flex flex-col justify-between h-[30%]">
              <span className="meal_name h-[50%]">{item.recipe.label.length > 30 ? `${item.recipe.label.slice(0, 30)}...` : item.recipe.label}</span>
              <div className="mealitem_favtime">
                <div className="flex items-center favtime_time gap-1 h-[50%]">
                  <img src="/icons/clock.svg" alt="clock" className="svgs" />
                  <span className="time_span">{item.recipe.totalTime} min</span>
                </div>
              </div>
            </div>

          </div>
        </a>
      </>
    );
  });

  return (
    <>
      <HeadingCard
        getRecipes={getRecipes}
        setQuery={setQuery}
        toggle={toggle}
        isHidden={isHidden}
      />
      <div className="">
        <div className="mealrecipes_container mt-[2%]">{mealElement}</div>
      </div>
    </>
  );
}
