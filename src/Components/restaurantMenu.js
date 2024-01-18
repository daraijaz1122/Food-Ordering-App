import { useState} from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu =()=>{
   
    const {resId} =useParams();
  const [showIndex,setShowIndex] = useState(null);
    const ResMenuList = useRestaurantMenu(resId)
     if(ResMenuList===null)return <ShimmerUI/>
     
     const{name,
           cuisines,
           costForTwoMessage}=ResMenuList?.cards[0]?.card?.card?.info;
  
   const Categories = ResMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return(
        <>
        <div className="  text-center justify-items-center">
        <h1 className="font-bold text-2xl p-4">{name}</h1>
        <h2 className="font-bold">{cuisines.join(",")} - {costForTwoMessage}</h2>
       
       
           {Categories.map((category,index)=>
           (<RestaurantCategory
            key={category?.card?.card?.title}
            data ={category?.card?.card}
            showItems = {index === showIndex ? true : false}
            setShowIndex ={() =>setShowIndex(index)}
            
            />)
            
          )}
           
       
        </div>
        
        </>
    )
}
export default RestaurantMenu;