import { resList } from "../utils/ApiData";
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
const Body =()=>{
  const [filterRes,setFilterRes] = useState([])
useEffect(()=>{
  fetchdata()
},[])
  const fetchdata = async()=>{
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=26.913903&lng=80.943945"
    );
    
    const json = await data.json();
    console.log(json)
   // const restaurant_data =data.get("success", {}).get("cards", [])[4].get("gridWidget", {}).get("gridElements", {}).get("infoWithStyle", {}).get("restaurants", [])
    const resData = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    console.log("restaurants",resData)
    setFilterRes(resData)
  }
  //filtering logic
  const handleFilter=()=>{
    console.log('pressed')
    const filteredList = filterRes.filter(
      (res) => res.data.avgRating >4
    );
    setFilterRes(filteredList)
  }
    return(
      <div className='body'>
        <div className='search'>Search</div>
        <div className="filter">
          <button
          className="filter-btn"
         onClick={handleFilter}
          > Top Rated Restaurants</button>
        </div>
        <div  className='res-container'>
         
          {
            filterRes.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))
          }
          
  
        </div>
      </div>
    )
  }
  export default Body;