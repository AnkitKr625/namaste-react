import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../data/restaurant";

function Body() {
  const [resList, setResList] = useState(restaurantData);

  function filterResList() {
    const filteredRes = resList.filter((res) => res.info.avgRating > 4);
    setResList(filteredRes);
  }
  return (
    <div className="body">
      <div className="search-container">
        <button onClick={filterResList} className="btn top-rated-btn">
          Top Rated Restaurant
        </button>
        <button
          onClick={() => setResList(restaurantData)}
          className="btn reset-btn"
        >
          Reset
        </button>
      </div>
      <div className="restaurant-container">
        {resList.map((resData) => (
          <RestaurantCard key={resData.info.id} info={resData.info} />
        ))}
      </div>
    </div>
  );
}

export default Body;
