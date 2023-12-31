
const RestaurantCard =(props)=>{
    const{resData}=props
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        deliveryTime}=resData?.info;
        const styleCard={
            backgroundColor:"#f0f0f0"
          }
    return(
      <div className='res-card'style={styleCard}>
        <img  className='card-image' 
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    )
  }
  export default RestaurantCard;