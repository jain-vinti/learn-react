import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/data";

const Body = () => {
  // State Varible
  let [listOfRes, setListOfRes] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>
            setListOfRes(
              listOfRes.filter((resObject) => resObject.info.avgRating >= 4.5)
            )
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((resObject) => (
          <RestaurantCard key={resObject.info.id} resDetails={resObject} />
        ))}
      </div>
    </div>
  );
};

export default Body;
