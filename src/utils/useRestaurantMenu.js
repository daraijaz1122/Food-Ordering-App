import { useEffect, useState } from "react"
import { MENU_API } from "./Constants"

const useRestaurantMenu=(resId)=>{
const [resInfo,setResInfo]=useState(null)

useEffect(()=>{
    fetchData()
})

const fetchData= async()=>{
    const Data= await fetch(MENU_API+resId);
    const json= await Data.json();
    setResInfo(json.data)
}
return resInfo;
}
export default useRestaurantMenu;