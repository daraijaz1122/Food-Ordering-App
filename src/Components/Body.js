import { resList } from "../utils/ApiData";
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CONSTANTS } from "../utils/Constants";
const Body =()=>{
  const [listOfRestaurants,setlistOfRestaurants] = useState([])
  const [searchText , SetSearchText] = useState("");
  const[filteredRes,setfilteredRes] = useState([])

  useEffect(()=>{
    fetchdata();
  },[])

  const fetchdata = async () => {
    try {
      const data = await fetch(CONSTANTS.RESTAURANT_URL);
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
         <div className='bg-gray-100'>
            <div className="search-container flex   px-4 py-4">
              <div className='search mr-16 p-4'>

              <input 
              className="border-black border-1 bg-gray-300 mr-4 py-2 px-4 rounded-lg shadow-lg" 
              type="text" placeholder="Search "
              value ={searchText}
              onChange={(e)=>{
                SetSearchText(e.target.value);
              }}
              />
              <button className="text-black border-black shadow-lg px-8 py-2 rounded-md bg-green-200"
              onClick={handleSearch}
              >Search</button>
              
             </div>

            <div className="filter p-4">
              <button
              className="bg-green-50 py-2 px-6 rounded-lg shadow-lg"
            onClick={handleFilter}
              > Top Rated Restaurants</button>
            </div>
        </div>
        <div  className='flex bg-gray-1\]= 00 grid-cols-6 gap-2 flex-wrap'>
         
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