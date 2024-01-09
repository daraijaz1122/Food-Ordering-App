import {  CONSTANTS } from "../utils/Constants";

const RestaurantCard =(props)=>{
  const{resData}=props
  const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime}=resData?.info;
      console.log(resData?.info)
      
  return(
    <div className='w-52 h-auto bg-gray-300 m-4 p-2 shadow-xl rounded-lg'>
      <img  className='w-full rounded-lg' 
      src={CONSTANTS.CDN_URL+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}
export default RestaurantCard;