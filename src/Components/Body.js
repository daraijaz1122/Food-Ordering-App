import { resList } from "../utils/ApiData";
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body =()=>{
  const [listOfRestaurants,setlistOfRestaurants] = useState([])
  const [searchText , SetSearchText] = useState("");
  const[filteredRes,setfilteredRes] = useState([])

  useEffect(()=>{
    fetchdata();
  },[])

    const fetchdata = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8943893&lng=81.0368211&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      for (let index = 0; index < json.data.cards.length; index++) {
        const resData =
          json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (resData === undefined) {
          continue;
        }
        setlistOfRestaurants(resData);
        setfilteredRes(resData);
        break;

    }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
  };
//search logic
const handleSearch=()=>{
const filteredRestaurants = listOfRestaurants.filter(
  (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
);
  setfilteredRes(filteredRestaurants)
}

  //filtering logic
  const handleFilter=()=>{
    const filteredList = filteredRes.filter(
      (res) => res.info.avgRating >4
    );
    setfilteredRes(filteredList)
  }
 const onlineStatus = useOnlineStatus();
 if(onlineStatus===false)return <h1>Check you status you are offline</h1>
  //conditional rendering...............
//if(listOfRestaurants.length===0)return<ShimmerUI/>


    return listOfRestaurants.length === 0 ?(<ShimmerUI/>): ( 
         <div className=''>
            <div className="search-container">
              <div className='search'>
              <button
              onClick={handleSearch}
              >Search</button>
              <input 
              className="input-box" 
              type="text" placeholder="Search "
              value ={searchText}
              onChange={(e)=>{
                SetSearchText(e.target.value);
              }}
              />
          </div>

            <div className="filter">
              <button
              className="filter-btn"
            onClick={handleFilter}
              > Top Rated Restaurants</button>
            </div>
        </div>
        <div  className='flex flex-wrap'>
         
          {
            filteredRes.map((restaurant)=>(
              <Link
              key={restaurant.info.id} 
              to={"/restaurant/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant}/>
              </Link>
              
            ))
          }
          
  
        </div>
      </div>
    )
  }
  export default Body;
