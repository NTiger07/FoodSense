import "./DropDown.css"
export default function DropDown(props: any) {
  const {dietLabel, healthLabel, cuisineType, mealType, dishType, reset, apply, toggle} = props
  return (
    <div className="drop_down" id="dropDown">
      <div className="dropdown_head">
        <h1>Filter by</h1>
        <img
          src="/icons/cancel_icon.png"
          alt="cancel"
          className="svgs"
          onClick={toggle}
        />
      </div>
      <div className="filter_container">
        <div className="filter_container-item">
          <span className="label-title">Diet Label</span>
          <select name="diet" id="dietLabel" ref={dietLabel}>
            <option value="">All</option>
            <option value="&diet=balanced">Balanced</option>
            <option value="&diet=high-fiber">High-Fiber</option>
            <option value="&diet=high-protein">High-Protein</option>
            <option value="&diet=low-carb">Low-Carb</option>
            <option value="&diet=low-fat">Low-Fat</option>
            <option value="&diet=low-sodium">Low-Sodium</option>
          </select>
        </div>
        <div className="filter_container-item">
          <span className="label-title">Health Label</span>
          <select name="health" id="healthLabel" ref={healthLabel}>
            <option value="">All</option>
            <option value="&health=alcohol-cocktail">Alcohol-Cocktail</option>
            <option value="&health=alcohol-free">Alcohol-Free</option>
            <option value="&health=celery-free">Celery-Free</option>
            <option value="&health=crustcean-free">Crustcean-Free</option>
            <option value="&health=dairy-free">Dairy-Free</option>
            <option value="&health=DASH">DASH</option>
            <option value="&health=egg-free">Egg-Free</option>
            <option value="&health=fish-free">Fish-Free</option>
            <option value="&health=fodmap-free">FODMAP-Free</option>
            <option value="&health=gluten-free">Gluten-Free</option>
            <option value="&health=immuno-Supportive">Immuno-Supportive</option>
            <option value="&health=keto-friendly">Keto-Friendly</option>
            <option value="&health=kidney-friendly">Kidney-Friendly</option>
            <option value="&health=kosher">Kosher</option>
            <option value="&health=low-pottassium">Low Potassium</option>
            <option value="&health=low-sugar">Low Sugar</option>
            <option value="&health=lupine-free">Lupine-Free</option>
            <option value="&health=Mediterranean">Mediterranean</option>
            <option value="&health=mollusk-free">Mollusk-Free</option>
            <option value="&health=mustard-free">Mustard-Free</option>
            <option value="&health=no-oil-added">No oil added</option>
            <option value="&health=paleo">Paleo</option>
            <option value="&health=peanut-free">Peanut-Free</option>
            <option value="&health=pescatarian">Pescatarian</option>
            <option value="&health=pork-free">Pork-Free</option>
            <option value="&health=red-meat-free">Red-Meat-Free</option>
            <option value="&health=sesame-free">Sesame-Free</option>
            <option value="&health=shellfish-free">Shellfish-Free</option>
            <option value="&health=soy-free">Soy-Free</option>
            <option value="&health=sugar-conscious">Sugar-Conscious</option>
            <option value="&health=sulfite-free">Sulfite-Free</option>
            <option value="&health=tree-nut-free">Tree-Nut-Free</option>
            <option value="&health=vegetarian">Vegetarian</option>
            <option value="&health=wheat-free">Wheat-Free</option>
          </select>
        </div>
        <div className="filter_container-item">
          <span className="label-title">Cuisine Type</span>
          <select name="cuisine" id="cuisineType" ref={cuisineType}>
            <option value="">All</option>
            <option value="&cuisineType=American">American</option>
            <option value="&cuisineType=Asian">Asian</option>
            <option value="&cuisineType=British">British</option>
            <option value="&cuisineType=Caribbean">Caribbean</option>
            <option value="&cuisineType=Central%20Europe">
              Central Europe
            </option>
            <option value="&cuisineType=Chinese">Chinese</option>
            <option value="&cuisineType=Eastern%20Europe">
              Eastern Europe
            </option>
            <option value="&cuisineType=French">French</option>
            <option value="&cuisineType=Indian">Indian</option>
            <option value="&cuisineType=Italian">Italian</option>
            <option value="&cuisineType=Japanese">Japanese</option>
            <option value="&cuisineType=Kosher">Kosher</option>
            <option value="&cuisineType=Mediterranean">Mediterranean</option>
            <option value="&cuisineType=Mexican">Mexican</option>
            <option value="&cuisineType=Middle%20Eastern">
              Middle Eastern
            </option>
            <option value="&cuisineType=Nordic">Nordic</option>
            <option value="&cuisineType=South%20American">
              South American
            </option>
            <option value="&cuisineType=South%20East%20Asian">
              South East Asian
            </option>
          </select>
        </div>
        <div className="filter_container-item">
          <span className="label-title">Meal Type</span>
          <select name="meal" id="mealType" ref={mealType}>
            <option value="">All</option>
            <option value="&mealType=Breakfast">Breakfast</option>
            <option value="&mealType=Lunch">Lunch</option>
            <option value="&mealType=Dinner">Dinner</option>
            <option value="&mealType=Snack">Snack</option>
            <option value="&mealType=Teatime">Teatime</option>
          </select>
        </div>
        <div className="filter_container-item">
          <span className="label-title">Dish Type</span>
          <select name="dish" id="dishType" ref={dishType}>
            <option value="">All</option>
            <option value="&dishType=Alcohol-cocktail">Alcohol-cocktail</option>
            <option value="&dishType=Biscuits%20and%20cookies">
              Biscuits and cookies
            </option>
            <option value="&dishType=Bread">Bread</option>
            <option value="&dishType=Cereals">Cereals</option>
            <option value="&dishType=Condiments%20and%20sauces">
              Condiments and sauces
            </option>
            <option value="&Drinks">Drinks</option>
            <option value="&Desserts">Desserts</option>
            <option value="&Egg">Egg</option>
            <option value="&Main%20course">Main course</option>
            <option value="&Omelet">Omelet</option>
            <option value="&Pancake">Pancake</option>
            <option value="&Preps">Preps</option>
            <option value="&Preserve">Preserve</option>
            <option value="&Salad">Salad</option>
            <option value="&Sandwiches">Sandwiches</option>
            <option value="&Soup">Soup</option>
            <option value="&Starter">Starter</option>
          </select>
        </div>
      </div>
      <div className="filter_container-button">
        <button id="resetBtn" onClick={reset}>
          Reset
        </button>
        <button id="applyBtn" onClick={apply}>
          Apply
        </button>
      </div>
    </div>
  );
}
