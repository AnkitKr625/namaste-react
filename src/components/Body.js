import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantCardShimmer from "./Shimmer/RestaurantCardShimmer";
import { API_URL } from "../utils/constant";

function Body() {
  const resListData = useRef([]);
  const [resList, setResList] = useState(resListData.current);
  const [searchQuery, setSearchQuery] = useState("");

  function filterResList() {
    const filteredRes = resList.filter((res) => res.info.avgRating > 4);
    setResList(filteredRes);
  }

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      resListData.current =
        data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      setResList(resListData.current);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="top-container">
        <div>
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
        <div className="search-container">
          <input
            className="input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => {
              const filteredRes = resListData.current.filter((res) =>
                res.info.name.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setResList(filteredRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {resList?.length > 0 ? (
        <div className="restaurant-container">
          {resList.map((resData) => (
            <RestaurantCard key={resData.info.id} info={resData.info} />
          ))}
        </div>
      ) : (
        <div className="restaurant-container">
          {[...Array(15).keys()].map((i) => (
            <RestaurantCardShimmer key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Body;
