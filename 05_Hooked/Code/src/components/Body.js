import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
    }

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
export const Body = () => {
     // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // update the state of searchText variable
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards-lists">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
    </>
  );
};