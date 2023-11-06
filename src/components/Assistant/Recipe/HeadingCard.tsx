import "./HeadingCard.css"
export default function HeadingCard(props: any) {
  const { setQuery, getRecipes, toggle } = props;
  return (
    <div className="headingcard_container">
      <div className="headingcard_content">
        <h1 className="cardcontent_title">What would you like to cook?</h1>
        <div className="search_container">
          <button id="filterBtn" onClick={toggle}>
            <img src="/icons/sliders-white.svg" alt="slider" className="svgs" />
            Filter
          </button>
          <input
            type="text"
            id="search_input"
            placeholder="Recipes, Ingredients, Trends"
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={getRecipes}
          />
          <button id="searchBtn">
            <img
              src="/icons/search.svg"
              alt="search"
              className="svgs"
              onClick={getRecipes}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
