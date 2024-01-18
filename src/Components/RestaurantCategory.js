import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory =({data,showItems,setShowIndex})=>{
    const handleClick =()=>{
    setShowIndex()
    }
   // console.log(data)
    return(
        <div>
           <div 
           onClick={handleClick}
           className=" mb-8 w-6/12 cursor-pointer bg-gray-100 my-4  mx-auto shadow-lg p-4">
            <div className="flex justify-between">
            <span className="font-bold text-lg"> {data.title}-({data.itemCards.length}) </span>
            <span> 🔽</span>
            </div>
            {showItems &&  <ItemList items ={data.itemCards}/>}
           
           </div>
          
           
        </div>
    )
}
export default RestaurantCategory;