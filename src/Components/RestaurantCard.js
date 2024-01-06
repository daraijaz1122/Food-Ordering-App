
const RestaurantCard =(props)=>{
  const{resData}=props
  const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime}=resData?.info;
      
  return(
    <div className='w-52 h-68 bg-gray-300 m-4 p-4 rounded-lg'>
      <img  className='w-full rounded-lg' 
      src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}
export default RestaurantCard;