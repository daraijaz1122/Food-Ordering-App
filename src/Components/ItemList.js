import { useDispatch } from "react-redux";
import { CONSTANTS } from "../utils/Constants";
import { addItem } from "../utils/cartSlice";

const ItemList =({items})=>{
   // console.log("itms",items)
   //dispatch an action 
   const dispatch = useDispatch();
   handleClick =((item)=>{
  dispatch(addItem(item))
   })
    return(
        <div>

          {items.map((item)=>(
            <div 
            className=" flex justify-between mb-2 p-2 shadow-lg border-b-2 border-gray"
            key={item.card.info.id}>
                <div className="text-start w-9/12">
                <span className="font-semibold"> {item.card.info.name}</span><br/>
                <span className="font-bold mt-4">- ₹ {item.card.info.price/100}</span>
                </div>


                <div className="w-3/12 ">
                <div className="absolute">
                    <button 
                    onClick={()=>handleClick(item)}
                    className=" bg-black rounded-md px-2 mx-4  shadow-lg text-white"> Add +</button>
                    </div>
                    <img className="" src={CONSTANTS.CDN_URL + item.card.info.imageId }/>
                    
                    
                </div>
               
                
            </div>

          ))}

        </div>
    )
}
export default ItemList;