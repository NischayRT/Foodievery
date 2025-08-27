import Restocard from "./RestaurantCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import Empty from "./Empty";
import { Link } from "react-router-dom";
let DEFAULT_LAT = 17.5366218;
let DEFAULT_LNG = 78.4844811;
let x = 0;
const Body = () => {
  const [ResList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const getUserLocation = () => {
      if (!navigator.geolocation) {
        fetchData(DEFAULT_LAT, DEFAULT_LNG); // fallback
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          console.log(userLat, userLng);
          console.log("User Location:", DEFAULT_LAT, DEFAULT_LNG);
          fetchData(userLat, userLng);
        },
        () => {
          fetchData(DEFAULT_LAT, DEFAULT_LNG);
        }
      );
    };
    getUserLocation();
  }, []);
  // UPDATED: fetchData now takes lat, lng
  const fetchData = async (lat = DEFAULT_LAT, lng = DEFAULT_LNG) => {
    const apiUrl = `https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
    const response = await fetch(apiUrl, {
      headers: {
        "x-cors-api-key": "temp_b3cf31787eccbc7cc29237bca242ee7d", // <-- put your CORS.SH API Key here
      },
    });
    const json = await response.json();
    console.log(json);
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (ResList.length === 0) {
    x = 1;
    return <Shimmer />;
  }
  if (filteredResList.length === 0 && x) {
    x = 0;
    return <Empty />;
  }
  return (
    <div className="body">
      <div className="search-div">
        <input
          placeholder="Search"
          type="search"
          className="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchText);
            const filteredList = ResList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResList(filteredList);
            if (filteredList.length === 0) {
              return <Empty />;
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ResList.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ResList.filter((res) =>
              res.info.cuisines.includes("Desserts")
            );
            setFilteredResList(filteredList);
          }}
        >
          Desserts
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ResList.filter(
              (res) => res.info.sla.deliveryTime < 25
            );
            setFilteredResList(filteredList);
          }}
        >
          Quick Delivery
        </button>
      </div>
      <div className="restaurant-cntnr">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"Restaurant/" + restaurant.info.id}
          >
            <Restocard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
