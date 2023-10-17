import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resDetails }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resDetails;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + " stars"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
