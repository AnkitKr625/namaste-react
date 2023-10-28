import Rating from "../assets/Rating.js";

function RestaurantCard({ info }) {
  const { cloudinaryImageId: imageId, name, cuisines } = info;
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
        <p className="res-cuisines">{cuisines.join(",")}</p>
        <h5>
          <Rating />
          4.4
        </h5>
        <h5>38 min</h5>
      </div>
    </div>
  );
}

export default RestaurantCard;
