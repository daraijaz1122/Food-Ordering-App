import { resList } from "../utils/ApiData";
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import ShimmerUI from "./ShimmerUI";
const Body =()=>{
  const [listOfRestaurants,setlistOfRestaurants] = useState([])
  const [searchText , SetSearchText] = useState("");
  const[filteredRes,setfilteredRes] = useState([])

    useEffect(()=>{
      fetchdata()
    },[])

  const fetchdata = async()=>{
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=26.913903&lng=80.943945"
    );
    const json = await data.json();
    const resData = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    setlistOfRestaurants(resData)
    setfilteredRes(resData)
  }
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

  //conditional rendering...............
    return listOfRestaurants.length === 0 ? <ShimmerUI/> :( 
      <div className='body'>
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
        <div  className='res-container'>
         
          {
            filteredRes.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))
          }
          
  
        </div>
      </div>
    )
  }
  export default Body;