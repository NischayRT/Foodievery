import { React, useEffect, useState } from "react";
import Shimmer2 from "./Shimmer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBowlFood,
  faIndianRupeeSign,
  faClock,
  faStar,
  faLeaf,
  faDrumstickBite,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

// import { data } from "react-router-dom";
// import { restaurantId } from "Body.jsx";
import { CDN_URL } from "./../utils/Constant";

let DEFAULT_LAT = 17.5366218;
let DEFAULT_LNG = 78.4844811;

let restaurantId = "667695";
const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    const getUserLocation = () => {
      if (!navigator.geolocation) {
        fetchMenu(DEFAULT_LAT, DEFAULT_LNG); // fallback
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          console.log(userLat, userLng);
          console.log("User Location:", userLat, userLng);
          fetchMenu(userLat, userLng);
        },
        () => {
          fetchMenu(DEFAULT_LAT, DEFAULT_LNG);
        }
      );
    };
    getUserLocation();
  }, []);
  // UPDATED: fetchData now takes lat, lng
  const fetchMenu = async (lat = DEFAULT_LAT, lng = DEFAULT_LNG) => {
    const apiUrl = `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;
    const data = await fetch(apiUrl, {
      headers: {
        "x-cors-api-key": "temp_b3cf31787eccbc7cc29237bca242ee7d", // <-- put your CORS.SH API Key here
      },
    });
    const json = await data.json();
    console.log("json", json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer2 />;
  }
  const { name, cuisines, city, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info ?? {};
  console.log("resInfo", resInfo);
  return (
    <div className="RestaurantPage">
      {/* Restaurant Info Card */}
      <div className="RestaurantInfo">
        <div className="RestaurantImage">
          <img
            src={
              CDN_URL + resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
            alt={name}
          />
        </div>
        <div className="RestaurantDetails">
          <div className="resname-city">
            <div className="title">
              <h2>
                {name}{" "}
                <span className="avgRating">
                  <FontAwesomeIcon icon={faStar} className="icon" /> {avgRating}
                </span>
              </h2>{" "}
            </div>
            <p>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              {city}
            </p>
          </div>
          <p>
            <FontAwesomeIcon icon={faBowlFood} className="icon" />
            {cuisines.join(", ")}
          </p>
          <div className="info-line">
            <span>💰 {costForTwoMessage}</span>
            <span>
              ⏱️ {resInfo?.cards[2]?.card?.card?.info?.sla?.deliveryTime} mins
            </span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <h2 className="MenuTitle">Menu</h2>
      <div className="FilterBtns">
        <button className="FilterButton Recommended">Recommended</button>
        <button className="FilterButton veg">Veg Only</button>
        <button className="FilterButton nonveg">Non-Veg Only</button>
      </div>

      <div className="Menucontents">
        <ul>
          <li>
            <div className="DishInfo">
              <h3>Veg Hakka Noodles</h3>
              <p>₹120</p>
            </div>
            <button className="AddBtn">+ Add</button>
          </li>
          <li>
            <div className="DishInfo">
              <h3>Chicken Fried Rice</h3>
              <p>₹180</p>
            </div>
            <button className="AddBtn">+ Add</button>
          </li>
          <li>
            <div className="DishInfo">
              <h3>Manchow Soup</h3>
              <p>₹90</p>
            </div>
            <button className="AddBtn">+ Add</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantPage;
