import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer2 from "./Shimmer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBowlFood,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const veg = new URL("../veg.png", import.meta.url).href;
const nonveg = new URL("../non-veg.png", import.meta.url).href;
import { CDN_URL } from "./../utils/Constant";

let DEFAULT_LAT = 17.5366218;
let DEFAULT_LNG = 78.4844811;

const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("resId", resId);
  useEffect(() => {
    const getUserLocation = () => {
      if (!navigator.geolocation) {
        fetchMenu(DEFAULT_LAT, DEFAULT_LNG, resId); // fallback
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          console.log(userLat, userLng);
          console.log("User Location:", userLat, userLng);
          fetchMenu(userLat, userLng, resId);
        },
        () => {
          fetchMenu(DEFAULT_LAT, DEFAULT_LNG, resId);
        }
      );
    };
    getUserLocation();
  }, []);
  // UPDATED: fetchData now takes lat, lng
  const fetchMenu = async (
    lat = DEFAULT_LAT,
    lng = DEFAULT_LNG,
    restaurantId = resId
  ) => {
    const apiUrl = `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;
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
  const { title } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR ?? {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ?? {};
  console.log("itemCards", itemCards);
  console.log("title", title);
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
        <button
          className="FilterButton veg"
          onClick={() => {
            const vegItems = itemCards.filter((item) => item.card.info.isVeg);
            console.log(vegItems);
            setResInfo(vegItems);
          }}
        >
          <img src={veg} alt="veg" className="vegIcon" /> Veg Only
        </button>
        <button className="FilterButton nonveg">
          <img src={nonveg} alt="non-veg" className="nonvegIcon" /> Non-Veg Only
        </button>
      </div>

      <div className="Menucontents">
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (category, index) => {
            const catTitle = category?.card?.card?.title;
            const catItems = category?.card?.card?.itemCards;

            return catItems ? (
              <div key={index} className="MenuCategory">
                <h3 className="CategoryTitle">{catTitle}</h3>
                <ul>
                  {catItems.map((item) => (
                    <li key={item.card.info.id} className="MenuItem">
                      <div className="ItemDetails">
                        <span className="itemName">{item.card.info.name}</span>
                        <span className="price">
                          ₹
                          {item.card.info.price / 100 ||
                            item.card.info.defaultPrice / 100}
                        </span>
                      </div>
                      <div className="AddWrapper">
                        <button className="AddBtn">+ Add</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null;
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
