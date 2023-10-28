import Rating from "../assets/Rating.js";
import { CDN_URL } from "../utils/constant.js";

function RestaurantCard({ info }) {
  const {
    cloudinaryImageId: imageId,
    name,
    cuisines,
    avgRating,
    sla,
    areaName,
  } = info;
  return (
    <div className="restaurant-card">
      <div className="restaurant-img-container">
        <img
          className="restaurant-img"
          src={CDN_URL + imageId}
          alt="res-logo"
        />
      </div>
      <div className="restaurant-detail">
        <h3 className="res-name">{name}</h3>
        <div className="res-rating">
          <Rating />
          {avgRating}
          {` . ${sla.deliveryTime} min`}
        </div>
        <p className="res-cuisines">{cuisines.join(",")}</p>
        <div className="res-area">{areaName}</div>
      </div>
    </div>
  );
}

export default RestaurantCard;
