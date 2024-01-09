import { useState} from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu =()=>{
   
    const {resId} =useParams();

    const ResMenuList = useRestaurantMenu(resId)
     if(ResMenuList===null)return <ShimmerUI/>
     
     const{name,
           cuisines,
           costForTwoMessage}=ResMenuList?.cards[0]?.card?.card?.info;

    const {itemCards}=ResMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
   

    return(
        <>
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h3>{costForTwoMessage}</h3>
        <div>
            <h1>Menu</h1>
            <ul>
                {itemCards.map((item)=>
                <li key={item.card.info.id} >
                    {item.card.info.name} - {"Rs:"} {item.card.info.price/100}
                </li>)}
               
            </ul>
        </div>
        </>
    )
}
export default RestaurantMenu;