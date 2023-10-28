import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../data/restaurant";

function Body() {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="restaurant-container">
        {restaurantData.map((resData) => (
          <RestaurantCard key={resData.info.id} info={resData.info} />
        ))}
      </div>
    </div>
  );
}

export default Body;
