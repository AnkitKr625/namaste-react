import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constant";

function Body() {
  const resListData = useRef([]);
  const [resList, setResList] = useState(resListData.current);

  function filterResList() {
    const filteredRes = resList.filter((res) => res.info.avgRating > 4);
    setResList(filteredRes);
  }

  async function fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    resListData.current =
      data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    setResList(resListData.current);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search-container">
        <button onClick={filterResList} className="btn top-rated-btn">
          Top Rated Restaurant
        </button>
        <button
          onClick={() => setResList(resListData.current)}
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
