import Rating from "../assets/Rating.js";

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
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
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
        <div>{areaName}</div>
      </div>
    </div>
  );
}

export default RestaurantCard;
