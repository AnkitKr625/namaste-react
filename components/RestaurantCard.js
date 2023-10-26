function RestaurantCard() {
  return (
    <div className="restaurant-card">
      <div className="restaurant-img-container">
        <img
          className="restaurant-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"
          alt="res-logo"
        />
      </div>
      <div className="restaurant-detail">
        <h3 className="res-name">Meghna Foods</h3>
        <h4>Biryani, North Indian</h4>
        <h5>4.4 *</h5>
        <h5>38 min</h5>
      </div>
    </div>
  );
}

export default RestaurantCard;
